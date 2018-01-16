import * as React from 'react';
// @ts-ignore: no @types def
import * as classNames from 'classnames';

export interface ButtonProps {
    icon?: string;
    iconHeight?: string;
    id?: string;
    value?: string | number | React.ReactNode;
    className?: string | string[];
    onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
    layout?: string;
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
            iconHeight,
            value
        } = this.props;
        return <button
                    id={id}
                    onClick={onClick}
                    className={classNames('clickopolis-button', className)}
                >
                    <img src={ icon } style={{
                        height: iconHeight || '2rem'
                    }} />
                    <span className='clickopolis-button-value'>{ value }</span>
                </button>;
    }
}