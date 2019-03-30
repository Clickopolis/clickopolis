import * as React from 'react';
import { Indicator } from '@clickopolis/core';
import { colors } from 'utils';

const biomeIconStyle = {
    background: colors.get('biomes'),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '2.5rem',
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
            }}
            iconHeight='2.3rem'
            icon={`./images/${biome}.svg`}
            description='Description for biome'
        />
    }
}