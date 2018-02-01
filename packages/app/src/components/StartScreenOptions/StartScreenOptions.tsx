import * as React from 'react';

import { LeaderSelect } from 'components/LeaderSelect';

import './StartScreenOptions.scss';

export interface StartScreenOptionsProps {

}

export class StartScreenOptions extends React.Component<StartScreenOptionsProps> {
    constructor(props:StartScreenOptionsProps) {
        super(props);
    }

    public render() {
        return (
            <div className='start-screen-options'>
                <div className='option-wrapper'>
                    <span className='option-name'>Name</span>
                    <input type='text' />
                </div>

                <div className='option-wrapper'>
                    <span className='option-name'>Leader</span>
                    <LeaderSelect options={[
                        'abraham-lincoln',
                        'george-washington'
                    ]} />
                </div>

                <div className='option-wrapper'>
                    <span className='option-name'>Civilization Name</span>
                    <input type='text' />
                </div>

            </div>
        );
    }
}
