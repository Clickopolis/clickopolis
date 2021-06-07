import * as React from 'react';
// @ts-ignore: no @types def
import classNames from 'classnames';

export interface ScreenProps {
    className?: string | string[];
    color: string;
    style?: object;
    type: string;
    infoComponent?: React.ReactNode
}

export class Screen extends React.Component<ScreenProps, {showInfo: boolean}> {
    public state = {
        showInfo: false,
    }

    private onShowInfo = (_: any) => {
        this.setState(state => ({ showInfo: !state.showInfo }))
    }

    public render() {
        const { children, color, className, style, type, infoComponent } = this.props;

        return (
            <section style={{ ...style }} className={classNames('clickopolis-screen', `${type.toLowerCase()}-screen`, className)} id={type}>
                <header style={{ backgroundColor: color }} className={classNames(`${type.toLowerCase()}-screen-header`, 'screen-header')}>
                    <img alt={type} src={'./images/' + type.toLowerCase() + '.svg'} style={{ height: '2rem', marginRight: '8px' }} />
                    <h2>{ type }</h2>
                    {infoComponent != null && <img style={{height: '1.5rem'}} onClick={this.onShowInfo} alt='info' src={'./images/info.svg'} />}
                </header>
                { this.state.showInfo && infoComponent && infoComponent }
                { children }
            </section>
        );
    }
}