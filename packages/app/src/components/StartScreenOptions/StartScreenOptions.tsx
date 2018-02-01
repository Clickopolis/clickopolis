import * as React from 'react';
import { connect } from 'react-redux';

import { selectLeader } from 'actions';
import { LeaderSelect } from 'components/LeaderSelect';

import './StartScreenOptions.scss';

export interface StartScreenOptionsProps {
    selectLeader: selectLeader;
}

export class StartScreenOptionsBase extends React.Component<StartScreenOptionsProps> {
    constructor(props:StartScreenOptionsProps) {
        super(props);
    }

    public render() {
        return (
            <div className='start-screen-options'>
                <div className='option-wrapper'>
                    <span className='option-name'>Leader</span>
                    <LeaderSelect options={[
                        'abraham-lincoln',
                        'george-washington',
                        'mao-zedong'
                    ]} onSelect={leaderName => this.props.selectLeader(leaderName)} />
                </div>

                <div className='option-wrapper'>
                    <span className='option-name'>Name</span>
                    <input type='text' />
                </div>

                <div className='option-wrapper'>
                    <span className='option-name'>Civilization Name</span>
                    <input type='text' />
                </div>

            </div>
        );
    }
}

export const StartScreenOptions = connect(
    null,
    {
        selectLeader
    }
)(StartScreenOptionsBase as any);