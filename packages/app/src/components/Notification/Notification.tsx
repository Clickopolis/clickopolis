import * as React from 'react';

import './Notification.scss';

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
    onClose?: () => void;
}

export class Notification extends React.Component<NotificationProps> {
    public intervalId: any;
    public static defaultProps = {
        timeout: 2000,
    }

    public componentWillMount() {
        this.intervalId = setTimeout(this.disappear, 1000);
    }

    public componentWillUnmount() {
        clearInterval(this.intervalId);
    }

    public render() {
        const {content} = this.props;

        return <div className='notification'>
            <div className='notification-close'>×</div>
            {content}
        </div>
    }

    private disappear = () => {
        this.props.onClose && this.props.onClose();
    }

}