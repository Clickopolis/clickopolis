import * as React from 'react';
import { connect } from 'react-redux';

import { selectLeader } from 'actions';
import { LeaderSelect } from 'components/LeaderSelect';

import './StartScreenOptions.scss';

export interface StartScreenOptionsProps {
    selectLeader: selectLeader;
    leader: any;
}

export class StartScreenOptionsBase extends React.Component<StartScreenOptionsProps> {
    constructor(props:StartScreenOptionsProps) {
        super(props);
    }

    public render() {
        const {leader} = this.props

        return (
            <div className='start-screen-options' style={{
                display: 'flex',
                width: '100%',
                margin: '2rem',
                paddingTop: '2rem',
            }}>
                <div className='option-wrapper' style={{
                    height: '100%',
                }}>
                    <LeaderSelect options={[
                        'abraham-lincoln',
                        'victoria',
                        'mansa-musa',
                    ]} onSelect={leaderName => this.props.selectLeader(leaderName)} />
                </div>

                <div className='option-wrapper-2' style={{

                }}>
                    <div style={{
                        display: 'flex',
                    }}>
                        {leader ? 
                         <>
                            <img style={{borderRadius: '50%', height: '128px', margin: '.5rem auto'}} src={`./images/${leader.name.toLowerCase().replace(/\s/g, '-')}.png`} />
                            
                            <div style={{display: 'flex', flexDirection: 'column'}}>
                                {leader.abilities.map((ab: any) => {
                                    return <div style={{margin: '.5rem', marginBottom: '.25rem'}}>
                                        <strong>{ab.name}</strong>
                                        <p style={{margin: '0'}}>{ab.description}</p>
                                    </div>
                                })}
                            </div>
                        </>
                        : 'No Leader Selected'}
                    </div>

                    <div style={{
                        width: '50%',
                        margin: '0 auto',
                    }}>
                        <div className='option-wrapper'>
                            <span className='option-name'>Name</span>
                            <input type='text' />
                        </div>

                        <div className='option-wrapper'>
                            <span className='option-name'>Civilization Name</span>
                            <input type='text' />
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export const StartScreenOptions = connect(
    (state: any) => ({ leader: state.leader }),
    {
        selectLeader
    }
)(StartScreenOptionsBase as any);