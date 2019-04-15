import * as React from 'react';

import { LeaderIcon } from 'components/LeaderIcon';
import './LeaderSelect.scss';

interface LeadOption {
    name: string;
    civ: string;
}

export interface LeaderSelectProps {
    options: LeadOption[];
    onSelect: (item: string) => void;
}

export interface LeaderSelectState {
    selectedItem: string;
}

export class LeaderSelect extends React.Component<LeaderSelectProps, LeaderSelectState> {
    constructor(props:LeaderSelectProps) {
        super(props);
        this.state = {
            selectedItem: this.props.options[0].name
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
        return this.props.options.map((o: LeadOption, idx: number) => {
            const isSelected = this.state.selectedItem === o.name;
            const isHidden = isSelected ? 'selected' : '';
            return (
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                }} onClick={this.openSelect.bind(this, o.name, idx)} key={o.name} className={`leader-option ${isHidden}`}>
                    <LeaderIcon style={{ marginLeft: '.5rem', overflow: 'hidden' }} height='2rem' width='2rem' icon={o.name} />
                    <span style={{ marginLeft: '2rem' }} className='leader-option-name'>{
                        this.toTitleCase(o.name)
                    }</span>
                    <em style={{marginRight: '.5rem', fontSize: '90%'}}>{o.civ}</em>
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
