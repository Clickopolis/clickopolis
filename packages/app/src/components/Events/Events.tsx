import * as React from 'react';
import { connect } from 'react-redux';

interface EventsProps {

}

export class EventsBase extends React.Component<EventsProps> {

    rollEvent() {
        const rand = () => Math.floor(Math.random() * 1000);

        if (rand() < 600) {

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

export const Events = connect(null, null)(EventsBase)