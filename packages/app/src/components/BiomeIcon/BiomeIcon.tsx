import * as React from 'react';
import { Indicator } from '@clickopolis/core';

const biomeIconStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '3rem',
    margin: '.25rem',
    padding: '.25rem',
}

export interface BiomeIconProps {
    biome: string;
}

export class BiomeIcon extends React.Component<BiomeIconProps> {

    public render() {
        const {biome} = this.props

        return <Indicator
            style={{
                ...biomeIconStyle,
                background: 'white',
            }}
            iconHeight='2.5rem'
            icon={`./images/${biome}.svg`}
            description='Description for biome'
        />
    }
}