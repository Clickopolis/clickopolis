import * as React from 'react';
// @ts-ignore: no @types def
import * as classNames from 'classnames';

export interface ScreenProps {
    className?: string | string[];
    color: string;
    style?: object;
    type: string;
}

export class Screen extends React.Component<ScreenProps> {
    constructor(props:ScreenProps) {
        super(props);
    }

    public render() {
        const { children, color, className, style, type } = this.props;

        return (
            <section style={{ ...style, borderTop: `4px solid ${color}`}} className={classNames('clickopolis-screen', `${type.toLowerCase()}-screen`, className)} id={type}>
                <header style={{ backgroundColor: color }} className={classNames(`${type.toLowerCase()}-screen-header`, 'screen-header')}>
                    <img alt={type} src={'./images/' + type.toLowerCase() + '.svg'} style={{ height: '2rem' }} />
                    <h2>{ type }</h2>
                </header>
                { children }
            </section>
        );
    }
}