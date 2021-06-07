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
    border: '4px solid transparent',
    borderRadius: '50%',
    cursor: 'pointer',
}

const isSelectedStyle = {border: `4px solid ${colors.get('biomes')}` };

export interface BiomeIconProps {
    biome: Biome;
    isSelected?: boolean;
    onClick?: (e?: React.MouseEvent<HTMLElement>) => void;
}

export class BiomeIcon extends React.Component<BiomeIconProps> {

    public render() {
        const {biome, onClick, isSelected} = this.props

        return <Indicator
            style={{
                ...(isSelected && isSelectedStyle),
                ...biomeIconStyle,
            }}
            iconHeight='3.5rem'
            icon={`./images/${biome.name}.svg`}
            description={biome.name}
            onClick={onClick}
        />
    }
}