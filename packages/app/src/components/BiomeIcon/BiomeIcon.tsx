import * as React from 'react';
import { Indicator, Biome } from '@clickopolis/core';
import { colors } from 'utils';
import { keyframes, stylesheet } from 'typestyle';

const rotate = keyframes({
    '0%': {
        transform: 'rotate(0deg)',
    },
    '100%': {
        transform: 'rotate(360deg)',
    }
});

const css = stylesheet({
    biomeIcon: {
        position: 'relative',
    },
    biomeIconOverlay: {
        height: '4.5rem',
        width: '4.5rem',
        position: 'absolute',
        animationName: rotate,
        animationIterationCount: 'infinite',
        animationTimingFunction: 'ease-in-out',
        animationDuration: '4s',
        top: '-0.25rem',
        zIndex: 1,
    },
    biomeIconIndicator: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '3.5rem',
        width: '3.5rem',
        margin: '.5rem',
        //padding: '.25rem',
        borderRadius: '50%',
        cursor: 'pointer',
        position: 'relative',
    },
});

const biomeIconStyle = {
    //background: colors.get('biomes'),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '3.5rem',
    width: '3.5rem',
    margin: '.5rem',
    //padding: '.25rem',
    borderRadius: '50%',
    cursor: 'pointer',
    position: 'relative',
}

const isSelectedStyle = {
    filter: `drop-shadow(0 0 3px gold)`,
};

export interface BiomeIconProps {
    biome: Biome;
    isSelected?: boolean;
    onClick?: (e?: React.MouseEvent<HTMLElement>) => void;
}

export class BiomeIcon extends React.PureComponent<BiomeIconProps> {

    public render() {
        const {biome, onClick, isSelected} = this.props;

        return <div className={css.biomeIcon}>
            {isSelected && <img className={css.biomeIconOverlay} src='./images/biome-overlay.svg' />}
            <Indicator
                style={{
                    ...(isSelected && isSelectedStyle),
                    ...biomeIconStyle,
                }}
                iconHeight='3.5rem'
                icon={`./images/${biome.name}.svg`}
                description={biome.name}
                onClick={onClick}
            />
        </div>;
    }
}