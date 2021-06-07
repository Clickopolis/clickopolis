import * as React from 'react';

import './Notification.scss';
import { connect } from 'react-redux';
import { removeNotification } from 'actions';

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
    id?: string;
    posId?: number;
    key: string;
    removeNotification: removeNotification;
    onClose?: () => void;
}

export class NotificationBase extends React.Component<NotificationProps> {
    public intervalId: any;
    public static defaultProps = {
        timeout: 60000,
    }

    public componentWillMount() {
        this.intervalId = setTimeout(this.disappear, this.props.timeout);
    }

    public componentWillUnmount() {
        clearInterval(this.intervalId);
    }

    public render() {
        const {content, posId, type} = this.props;

        const style  = {
            top: `calc(3.5rem + (4.25rem * (${posId}))`,
        };

        return <div className={`notification ${type}`} style={style}>
            <div className='notification-inner'>{content}</div>
            <div onClick={this.disappear} className='notification-close'>
                <img src='./images/close.svg' style={{
                    height: '1rem',
                    filter: 'invert(100%)',
                }} />
            </div>
        </div>
    }

    private disappear = () => {
        this.props.onClose && this.props.onClose();
        this.props.removeNotification(this.props.id.toString())
    }

}

export const Notification: any = connect(null, { removeNotification })(NotificationBase as any)