import * as React from 'react';
import { connect } from 'react-redux';

import { Screen, Button, Indicator } from '../../../../core';

import './ResourcesMatrix.scss';

export interface ResourcesMatrixProps {

}

export class ResourcesMatrixBase extends React.Component<ResourcesMatrixProps> {
    constructor(props:ResourcesMatrixProps) {
        super(props);
    }

    sortResources() {

    }

    public render() {
        return (
            <div className='resources-matrix'>
                <div className='resources-matrix-row'>
                    <div className='resources-matrix-category'>
                        <img src='./images/health.svg' />
                        <span>Health</span>
                    </div>
                    <Indicator
                        value={15}
                        icon={'./images/cattle.svg'}
                        description=''
                        className='resources-matrix-item'
                    />
                    <Indicator
                        value={15}
                        icon={'./images/fish.svg'}
                        description=''
                        className='resources-matrix-item'
                    />
                    <Indicator
                        value={15}
                        icon={'./images/banana.svg'}
                        description='Bananas provide health'
                        className='resources-matrix-item'
                    />
                </div>
                <div className='resources-matrix-row'>
                    <div className='resources-matrix-category'>
                        <img src='./images/buildings.svg' />
                        <span>Building</span>
                    </div>
                    <Indicator
                        value={15}
                        icon={'./images/wood.svg'}
                        description=''
                        className='resources-matrix-item'
                    />
                </div>
                <div className='resources-matrix-row'>
                    <div className='resources-matrix-category'>
                        <img src='./images/strategic.svg' />
                        <span>Strategic</span>
                    </div>
                    <Indicator
                        value={15}
                        icon={'./images/horses.svg'}
                        description=''
                        className='resources-matrix-item'
                    />
                    <Indicator
                        value={15}
                        icon={'./images/oil.svg'}
                        description=''
                        className='resources-matrix-item'
                    />
                </div>
                <div className='resources-matrix-row'>
                    <div className='resources-matrix-category'>
                        <img src='./images/luxury.svg' />
                        <span>Luxury</span>
                    </div>
                    <Indicator
                        value={15}
                        icon={'./images/spices.svg'}
                        description=''
                        className='resources-matrix-item'
                    />
                    <Indicator
                        value={15}
                        icon={'./images/gold.svg'}
                        description=''
                        className='resources-matrix-item'
                    />
                    <Indicator
                        value={15}
                        icon={'./images/silver.svg'}
                        description=''
                        className='resources-matrix-item'
                    />
                    <Indicator
                        value={15}
                        icon={'./images/gems.svg'}
                        description=''
                        className='resources-matrix-item'
                    />
                </div>
                <div className='resources-matrix-row'>
                    <div className='resources-matrix-category'>
                        <img src='./images/power.svg' />
                        <span>Power</span>
                    </div>
                    <Indicator
                        value={15}
                        icon={'./images/spaghetti.svg'}
                        description=''
                        className='resources-matrix-item'
                    />
                </div>
            </div>
        );
    }
}

export const ResourcesMatrix = connect(
    null,
    null
)(ResourcesMatrixBase);