import * as React from 'react';
import { connect } from 'react-redux';

import { Screen, Button, Indicator, Resource } from '../../../../core';

import './ResourcesMatrix.scss';

export interface ResourcesMatrixProps {
    [resource: string]: Resource;
}

export class ResourcesMatrixBase extends React.Component<ResourcesMatrixProps> {
    constructor(props:ResourcesMatrixProps) {
        super(props);
    }

    getResources(props:ResourcesMatrixProps) {
        const sort = (arr, prop = 'category') => {
            return (a, b) => {
                const result = (a[prop] < b[prop]) ? -1 : (a[prop] > b[prop]) ? 1 : 0;
                return result;
            };
        };

        const group = (xs, key) => {
            return xs.reduce((rv, x) => {
                (rv[x[key]] = rv[x[key]] || []).push(x);
                return rv;
            }, {});
        };

        const resources:Resource[] = [
            props.cattle,
            props.fish,
            props.banana,
            props.wood,
            props.horses,
            props.oil,
            props.spices,
            props.gold,
            props.silver,
            props.gems,
            props.spaghetti
        ];

        return group(resources.sort(sort(this)), 'category');
    }

    renderResourceRow(resources) {
        return resources.map((r, k) => <Indicator
            key={k}
            value={r.total}
            icon={`./images/${r.name}.svg`}
            description={r.description}
            className='resources-matrix-item'
        />);
    }

    public render() {
        return (
            <div className='resources-matrix'>
                <div className='resources-matrix-row'>
                    <div className='resources-matrix-category'>
                        <img src='./images/health.svg' />
                        <span>Health</span>
                    </div>
                    {
                        this.renderResourceRow(
                            this.getResources(this.props)['health']
                        )
                    }
                </div>
                <div className='resources-matrix-row'>
                    <div className='resources-matrix-category'>
                        <img src='./images/buildings.svg' />
                        <span>Building</span>
                    </div>
                    {
                        this.renderResourceRow(
                            this.getResources(this.props)['building']
                        )
                    }
                </div>
                <div className='resources-matrix-row'>
                    <div className='resources-matrix-category'>
                        <img src='./images/strategic.svg' />
                        <span>Strategic</span>
                    </div>
                    {
                        this.renderResourceRow(
                            this.getResources(this.props)['strategic']
                        )
                    }
                </div>
                <div className='resources-matrix-row'>
                    <div className='resources-matrix-category'>
                        <img src='./images/luxury.svg' />
                        <span>Luxury</span>
                    </div>
                    {
                        this.renderResourceRow(
                            this.getResources(this.props)['luxury']
                        )
                    }
                </div>
                <div className='resources-matrix-row'>
                    <div className='resources-matrix-category'>
                        <img src='./images/power.svg' />
                        <span>Power</span>
                    </div>
                    {
                        this.renderResourceRow(
                            this.getResources(this.props)['power']
                        )
                    }
                </div>
            </div>
        );
    }
}

export const ResourcesMatrix = connect(
    (state:any) => ({
        cattle: state.cattle,
        fish: state.fish,
        banana: state.banana,
        wood: state.wood,
        horses: state.horses,
        oil: state.oil,
        spices: state.spices,
        gold: state.gold,
        silver: state.silver,
        gems: state.gems,
        spaghetti: state.spaghetti,
    }),
    null
)(ResourcesMatrixBase);