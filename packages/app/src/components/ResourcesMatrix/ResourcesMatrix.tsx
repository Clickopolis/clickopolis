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
                <div onClick={() =>
                    this.setState({info: null})
                } style={{
                    position: 'absolute',
                    top: '0.25rem',
                    right: '0.25rem',
                    filter: 'invert(100%)',
                    cursor: 'pointer',
                }}>
                    <img style={{height: '1rem'}} src='./images/close.svg' />
                </div>
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
                        { resource.foodBonus ? <div>
                            <img style={{ height: '1rem' }} src='./images/food.svg' />
                            +{resource.foodBonus} per {resource.name}, {(resource.foodBonus * resource.total).toFixed(0)} total
                        </div> : null }
                        { resource.healthBonus ? <div>
                            <img style={{ height: '1rem' }} src='./images/health.svg' />
                            +{resource.healthBonus} per {resource.name}, {(resource.healthBonus * resource.total).toFixed(0)} total
                        </div> : null }
                        { resource.faithBonus ? <div>
                            <img style={{ height: '1rem' }} src='./images/faith.svg' />
                            +{resource.faithBonus} per {resource.name}, {(resource.faithBonus * resource.total).toFixed(0)} total
                        </div> : null }
                        { resource.cultureBonus ? <div>
                            <img style={{ height: '1rem' }} src='./images/culture.svg' />
                            +{resource.cultureBonus} per {resource.name}, {(resource.cultureBonus * resource.total).toFixed(0)} total
                        </div> : null }
                    </div>
                </div>
            </div>
        );
    }

    public render() {
        const resources:Resource[] = Object.values(this.props)

        return (
            <div className='other-resources-screen'>
                <h3 className='biomes-screen-title'>Other Resources</h3>
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
        maize: state.maize,
        cattle: state.cattle,
        fish: state.fish,
        crabs: state.crabs,
        wood: state.wood,
        stone: state.stone,
        horses: state.horses,
        mushrooms: state.mushrooms,
        banana: state.banana,
        wine: state.wine,
        copper: state.copper,
        marble: state.marble,
        spices: state.spices,
        tobacco: state.tobacco,
        gold: state.gold,
        silver: state.silver,
        gems: state.gems,
        coral: state.coral,
        fossils: state.fossils,
        oil: state.oil,
        uranium: state.uranium,
        aluminum: state.aluminum,
        spaghetti: state.spaghetti,
        chihuahuas: state.chihuahuas,
        eagles: state.eagles,
        cactus: state.cactus,
    }),
    null
)(ResourcesMatrixBase);