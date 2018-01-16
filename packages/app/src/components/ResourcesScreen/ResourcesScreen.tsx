import * as React from 'react';
import { connect } from 'react-redux';

// NOTE: Temporary Residence
//@ts-ignore: no @types def
import * as classNames from 'classnames';

import './ResourcesScreen.scss';

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
            <section style={{ ...style, borderTop: `4px solid ${color}`}} className={classNames(`${type.toLowerCase()}-screen`, className)} id={type}>
                <header style={{ background: color }} className={classNames(`${type.toLowerCase()}-screen-header`, 'screen-header')}>
                    <img alt={type} src={'./images/' + type.toLowerCase() + '.svg'} style={{ height: '2rem' }} />
                    <h2>{ type }</h2>
                </header>
                { children }
            </section>
        );
    }
}

export interface ResourcesScreenProps {

}

export class ResourcesScreenBase extends React.Component {
    constructor(props:ResourcesScreenProps) {
        super(props);
    }

    public render() {
        return (
            <Screen
                type='Resources'
                color='#1edb50'
            >
                <p></p>
            </Screen>
        );
    }
}

export const ResourcesScreen = connect(
    () => ({}),
    {}
)(ResourcesScreenBase);