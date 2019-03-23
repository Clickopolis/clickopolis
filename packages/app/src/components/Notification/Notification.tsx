import * as React from 'react';

export enum NotificationType {
    Success = 'success',
    Info = 'info',
    Warning = 'warning',
    Error = 'error',
}

export interface NotificationProps {
    timeout?: number;
    type?: NotificationType;
    requireUserCancellation?: boolean;
    content: React.ReactNode;
}

export class Notification extends React.Component<NotificationProps> {
    public static defaultProps = {
        timeout: 2000,
    }

    public render() {
        return <div className='notification'>


        </div>
    }

}