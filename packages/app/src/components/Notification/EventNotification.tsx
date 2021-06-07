import * as React from 'react';
import { Button } from '@clickopolis/core';

export interface EventNotificationProps {
    event: {
        id: number;
        description: string;
    };
}

export function EventNotification(props: EventNotificationProps) {
    return <div>
            {props.event.description}
        <Button

        >
            OK.
        </Button>
    </div>
}