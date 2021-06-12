import * as React from 'react';

import './Notification.scss';
import { connect } from 'react-redux';
import { Era } from 'utils';
import { Button } from 'components/Button';


export interface EraNotificationProps {
    era?: Era;
}

const imgStyle = {height: '1rem'};
const okButton = {
    margin: '0 auto',
    padding: '1rem',
    border: '1px solid white',
    borderRadius: '34px',
    background: '#dfc990',
    color: '#111',
    fontSize: '1.1rem',
    width: '300px',
    '&:hover': {
        boxShadow: '0 0 4px #dfc990',
    }
}

export class EraNotificationBase extends React.Component<EraNotificationProps, {gone: boolean}> {
    public state = {
        gone: true
    }

    public render() {
        return <div style={{
            boxShadow: '0 0 2rem rgba(0, 0, 0, 0.5)',
            backgroundColor: '#222',
            backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.85)), url(./images/era/classical.jpg)`,
            backgroundSize: 'cover',
            color: 'white',
            position: 'fixed',
            width: '80%',
            height: '80%',
            left: '10%',
            top: '10%',
            fontFamily: `'Merriweather', serif`,
            border: '1px solid gold',
            borderRadius: '.25rem',
            zIndex: 10005,
            display: this.state.gone ? 'none' : 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center',
        }}>
            <div style={{
                padding: '4rem',
                marginTop: '-4rem'
            }}>
                <h1 style={{fontSize: '3rem', fontStyle: 'italic' }}>You've Entered the Classical Era!</h1>

                <div style={{margin: '1rem', textAlign: 'center'}}>
                    <h2>Era Bonuses Recieved:</h2>
                    <ul style={{ listStyleType: 'none', lineHeight: 2, fontSize: '110%' }}>
                        <li>+2000 Max <img style={imgStyle} src='./images/food.svg' /></li>
                        <li>+2000 Max <img style={imgStyle} src='./images/production.svg' /></li>
                        <li>+2 <img style={imgStyle}  src='./images/cash.svg' />/min per citizen</li>
                        <li>+.5 <img style={imgStyle} src='./images/research.svg' />/min per citizen</li>
                    </ul>
                </div>
            </div>
            <Button onClick={this.disappear} style={okButton} value={'Neat.'} />
            <div style={{position: 'fixed', right: '12.5%', top: '12.5%', height: '2rem', textShadow: '2px 2px 2px black'}} onClick={this.disappear} className='notification-close'>
                <img src='./images/close.svg' style={{
                    height: '1rem',
                    filter: 'invert(100%)',
                }} />
            </div>
        </div>
    }

    private disappear = () => {
        this.setState({gone: true})
    }

}

export const EraNotification: React.ComponentType<EraNotificationProps> = connect()(EraNotificationBase as any)