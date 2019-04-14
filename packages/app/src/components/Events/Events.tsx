import * as React from 'react';
import { connect } from 'react-redux';
import { addNotification, addResource } from 'actions';
import { Flags, choose, Resource, Citizen, Civilization } from '@clickopolis/core';
import { TimeStatus } from 'utils';

interface EventsProps {
    addNotification: addNotification;
    addResource: addResource;
    flags: Flags;
    timeStatus: TimeStatus;
    cattle: Resource;
    farmer: Citizen;
    civilization: Civilization;
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
        const {cattle, civilization, addResource, addNotification, farmer} = this.props
        const rand = () => Math.floor(Math.random() * 1000);

        if (rand() < 600) {
            if (rand() < 60) {
                const cowResistanceFactor = 1 - ((farmer.amount + cattle.total) / (civilization.population * 0.5));

                if (cowResistanceFactor >= 0) {
                    addNotification({
                        content: <div>
                            One of your farmers has domesticated a cow. Say hi to {choose(['Bessy', 'Betty', 'Martha', 'Jumbo', 'Mac', 'Beeferino'])}!
                            <br />
                            +1 <img style={{height: '1.5rem'}} src='./images/cattle.svg' />
                        </div>,
                        id: `${rand()}`,
                    })
                    addResource('cattle', 1)
                }
            }
        } else if (rand() < 800) {

        } else if (rand() < 900) {

        } else if (rand() < 950) {

        } else if (rand() === 999) {

        }
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
        civilization: state.civilization,
    }), {
    addNotification,
    addResource,
})(EventsBase as any)