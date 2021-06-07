import * as React from 'react';
import { Indicator, Biome } from '@clickopolis/core';
import { colors } from 'utils';

const biomeIconStyle = {
    //background: colors.get('biomes'),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '3.5rem',
    width: '3.5rem',
    margin: '.25rem',
    //padding: '.25rem',
    border: '2px solid transparent',
    borderColor: colors.get('biomes'),
    borderRadius: '50%',
    cursor: 'pointer',
}

export interface BiomeIconProps {
    biome: Biome;
    onClick?: (e?: any) => React.MouseEvent<HTMLElement>;
}

export class BiomeIcon extends React.Component<BiomeIconProps> {

    public render() {
        const {biome, onClick} = this.props

        return <Indicator
            style={{
                ...biomeIconStyle,
            }}
            iconHeight='3.5rem'
            icon={`./images/${biome.name}.svg`}
            description={biome.name}
            onClick={onClick}
        />
    }
}