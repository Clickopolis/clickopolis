import * as React from 'react';

import { LeaderIcon } from 'components/LeaderIcon';
import './LeaderSelect.scss';

export interface LeaderSelectProps {
    options: string[];
    onSelect: (item: string) => void;
}

export interface LeaderSelectState {
    selectedItem: string;
}

export class LeaderSelect extends React.Component<LeaderSelectProps, LeaderSelectState> {
    constructor(props:LeaderSelectProps) {
        super(props);
        this.state = {
            selectedItem: this.props.options[0]
        };
    }

    private toTitleCase(str:string) {
        return str.replace(/-/g, ' ').replace(/[^\s]+/g, word => word.replace(/^./, first => first.toUpperCase()));
    }

    private openSelect (leader: string, _: number) {
        this.setState({
            selectedItem: leader
        });
        this.props.onSelect(this.toTitleCase(this.state.selectedItem));
    }

    private renderOptions():JSX.Element[] {
        return this.props.options.map((o:string, idx: number) => {
            const isSelected = this.state.selectedItem === o;
            const isHidden = isSelected ? 'selected' : '';
            return (
                <div onClick={this.openSelect.bind(this, o, idx)} key={o} className={`leader-option ${isHidden}`}>
                    <LeaderIcon style={{ marginLeft: '.5rem' }} height='2rem' width='2rem' icon={o} />
                    <span style={{ marginLeft: '2rem' }} className='leader-option-name'>{ this.toTitleCase(o) }</span>
                </div>
            );
        });
    }

    public render() {
        return (
            <div className={`leader-select open`}>
                { this.renderOptions() }
            </div>
        );
    }
}
