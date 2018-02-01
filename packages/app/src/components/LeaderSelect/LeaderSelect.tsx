import * as React from 'react';

import { LeaderIcon } from 'components/LeaderIcon';
import './LeaderSelect.scss';

export interface LeaderSelectProps {
    options: string[];
}

export interface LeaderSelectState {
    isOpen: boolean;
    selectedItem: string;
}

export class LeaderSelect extends React.Component<LeaderSelectProps, LeaderSelectState> {
    constructor(props:LeaderSelectProps) {
        super(props);
        this.state = {
            isOpen: false,
            selectedItem: this.props.options[0]
        };
    }

    private toTitleCase(str:string) {
        return str.replace(/-/g, ' ').replace(/[^\s]+/g, word => word.replace(/^./, first => first.toUpperCase()));
    }

    private openSelect (leader: string, idx: number) {
        this.setState({
            isOpen: idx === 0 ? true : false
        });
    }

    private renderOptions():JSX.Element[] {
        return this.props.options.map((o:string, idx: number) => {
            const isSelected = this.state.selectedItem === o;
            const isHidden = this.state.isOpen ? '' : isSelected ? '' : 'hidden';
            return (
                <div onClick={this.openSelect.bind(this, o, idx)} key={o} className={`leader-option ${isHidden}`}>
                    <LeaderIcon style={{ marginLeft: '.5rem' }} height='2rem' width='2rem' icon={o} />
                    <span style={{ marginLeft: '2rem' }} className='leader-option-name'>{ this.toTitleCase(o) }</span>
                    {
                        isSelected ?
                        <span style={{ color: '#333', marginLeft: 'auto' }}>▼</span>
                        :
                        <span style={{ marginLeft: 'auto' }}></span>
                    }
                </div>
            );
        });
    }

    public render() {
        return (
            <div className={`leader-select ${this.state.isOpen ? 'open' : ''}`}>
                { this.renderOptions() }
            </div>
        );
    }
}
