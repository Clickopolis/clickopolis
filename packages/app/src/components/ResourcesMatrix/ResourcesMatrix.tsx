import * as React from 'react';
import { connect } from 'react-redux';
import { Indicator, Resource } from '@clickopolis/core';

import './ResourcesMatrix.scss';

export interface ResourcesMatrixProps {
    [resource: string]: Resource;
}

export class ResourcesMatrixBase extends React.Component<ResourcesMatrixProps, { info: Resource | boolean }> {
    constructor(props:ResourcesMatrixProps) {
        super(props);
        this.state = {
            info: false
        };
    }

    getResources(props:ResourcesMatrixProps) {
        const sort = (_:any, prop = 'category') => {
            return (a:any, b:any) => {
                const result = (a[prop] < b[prop]) ? -1 : (a[prop] > b[prop]) ? 1 : 0;
                return result;
            };
        };

        const group = (xs:any[], key:string) => {
            return xs.reduce((rv, x) => {
                (rv[x[key]] = rv[x[key]] || []).push(x);
                return rv;
            }, {});
        };

        const resources:Resource[] = Object.values(props)

        return group(resources.sort(sort(this)), 'category');
    }

    renderResourceRow(resources:Resource[]) {
        return resources.map((r, k) => {
            const vis = r.visible ? {display: 'flex'} : {display: 'none'}
            const lock = r.unlocked ? {opacity: '1'} : {opacity: '0.5'}
        
            return <Indicator
                    key={k}
                    value={r.total}
                    icon={`./images/${r.name}.svg`}
                    description={r.description}
                    onClick={(_:any) => this.setState({ info: r })}
                    className='resources-matrix-item'
                    style={{
                        ...vis,
                        ...lock,
                        padding: '.25rem .75rem',
                    }}
                />
            }
        );
    }

    renderInfo = (resource:Resource) => {
        return (
            <div className='resource-info'>
                <div className='resource-info-row center-row'>
                    <h3>{ resource.name }</h3>
                </div>
                <div className='resource-info-row'>
                    <div className={`info-image image-${resource.name}`}>
                        <img src={`./images/${resource.name}.svg`} />
                    </div>
                    <div className='info-description'>
                        <div style={{ marginBottom: '1rem' }}>
                            { resource.description }
                        </div>
                        { resource.healthBonus ? <div>
                            <img style={{ height: '1rem' }} src='./images/health.svg' />
                            &nbsp;+{resource.healthBonus} per {resource.name}, {(resource.healthBonus * resource.total).toFixed(0)} total
                        </div> : null }
                        { resource.faithBonus ? <div>
                            <img style={{ height: '1rem' }} src='./images/faith.svg' />
                            &nbsp;+{resource.faithBonus} per {resource.name}, {(resource.faithBonus * resource.total).toFixed(0)} total
                        </div> : null }
                        { resource.cultureBonus ? <div>
                            <img style={{ height: '1rem' }} src='./images/culture.svg' />
                            &nbsp;+{resource.cultureBonus} per {resource.name}, {(resource.cultureBonus * resource.total).toFixed(0)} total
                        </div> : null }
                    </div>
                </div>
            </div>
        );
    }

    public render() {
        const resources:Resource[] = Object.values(this.props)

        return (
            <div className='resources-matrix'>
                <div className='resources-matrix-row'>
                    {
                        this.renderResourceRow(
                            resources
                        )
                    }
                </div>
                {/* <div className='resources-matrix-row'>
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
                </div> */}

                <div className='resources-matrix-row'>
                    { this.state.info ? this.renderInfo(this.state.info as any) : null }
                </div>
            </div>
        );
    }
}

export const ResourcesMatrix = connect(
    (state:any) => ({
        cattle: state.cattle,
        crabs: state.crabs,
        fish: state.fish,
        mushrooms: state.mushrooms,
        banana: state.banana,
        wine: state.wine,
        wood: state.wood,
        stone: state.stone,
        marble: state.marble,
        horses: state.horses,
        oil: state.oil,
        spices: state.spices,
        tobacco: state.tobacco,
        gold: state.gold,
        silver: state.silver,
        gems: state.gems,
        uranium: state.uranium,
        copper: state.copper,
        aluminum: state.aluminum,
        coral: state.coral,
        maize: state.maize,
        fossils: state.fossils,
        spaghetti: state.spaghetti,
        chihuahuas: state.chihuahuas,
    }),
    null
)(ResourcesMatrixBase);