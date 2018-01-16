import * as React from 'react';
import * as classNames from 'classnames';

export interface ButtonProps {
    icon: string;
    id: string;
    value: string | number | React.ReactNode;
    className: string | string[];
    onClick: (e?: React.MouseEvent<HTMLButtonElement>) => void;
    layout: string;
}

export class Button extends React.PureComponent<ButtonProps> {
    constructor(props:ButtonProps) {
        super(props);
    }

    public render() {
        const {
            id,
            onClick,
            className,
            icon,
            value
        } = this.props;
        return <button
                    id={id}
                    onClick={onClick}
                    className={classNames('clickopolis-button', className)}
                >
                    <img src={ icon } />
                    { value }
                </button>;
    }
}