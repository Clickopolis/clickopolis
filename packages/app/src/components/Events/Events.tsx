import * as React from 'react';
import { connect } from 'react-redux';
import { addNotification, addResource } from 'actions';
import { Flags, choose, Resource, Citizen, Civilization } from '@clickopolis/core';
import { TimeStatus } from 'utils';
import { v4 as uuid } from 'uuid';

interface EventsProps {
    addNotification: addNotification;
    addResource: addResource;
    flags: Flags;
    timeStatus: TimeStatus;
    cattle: Resource;
    farmer: Citizen;
    miner: Citizen;
    civilization: Civilization;
}


const events = [
    {
        weight: 3,
        name: 'GAIN_COW',
    },
    {
        weight: 1,
        name: 'GAIN_CORN',
    },
    {
        weight: 2,
        name: 'GAIN_STONE',
    },
    {
        weight: 2,
        name: 'CITIZEN_KILLED',
    },

];



interface HasWeight { weight: number; }

export function pickRandomWeighted<T extends HasWeight>(events: T[]) {
    const sumWeight = events?.reduce((prev, curr) => prev + curr.weight, 0) || 1;

    let sum = 0;
    const r = Math.random() * sumWeight;

    if (!events) {
        return undefined;
    }
    
    for (let i = 0; i < events.length; i++) {
        sum += events[i].weight;
        if (r <= sum) {
            return events![i];
        } else {
            return undefined;
        }
    }

    return undefined;
}

export class EventsBase extends React.Component<EventsProps> {
    public intervalIdMin: any;

    componentDidMount() {
        this.intervalIdMin = setInterval(this.minuteTimer, 1000 * 60);
    }

    minuteTimer = () => {
        if (this.props.flags.HAS_STARTED_GAME && this.props.timeStatus === TimeStatus.Playing) {
            this.rollEvent()
        }
    }

    rollEvent() {
        const {
            cattle,
            civilization,
            addResource,
            addNotification,
            farmer,
            miner,
        } = this.props;
        //const rand = () => Math.floor(Math.random() * 1000);
        const result = pickRandomWeighted(events);
        console.log('Event Result: ', result);

        
        addNotification({
            content: <div>
                One of your farmers has domesticated a cow. Say hi to {choose(['Bessy', 'Betty', 'Martha', 'Jumbo', 'Mac', 'Beefy Dan'])}!
                <br />
                +1 <img src='./images/cattle.svg' />
            </div>,
            id: uuid(),
        });
        addResource('cattle', 1);
        
    
        addNotification({
            content: <div>
                Your farmers have grown an abundant crop of maize!
                <br />
                +{farmer.amount} <img src='./images/maize.svg' />
            </div>,
            id: uuid(),
        });
        addResource('maize', farmer.amount);
            
        addNotification({
            content: <div>
                Your miners have cut new stones for the empire!
                <br />
                +{miner.amount} <img src='./images/stone.svg' />
            </div>,
            id: uuid(),
        });
        addResource('stone', miner.amount);
    }

    public render() {
        return <div />
    }
}

export const Events = connect(
    (state: any) => ({
        flags: state.flags,
        timeStatus: state.timeStatus,
        cattle: state.cattle,
        farmer: state.farmer,
        miner: state.miner,
        civilization: state.civilization,
    }), {
    addNotification,
    addResource,
})(EventsBase as any)