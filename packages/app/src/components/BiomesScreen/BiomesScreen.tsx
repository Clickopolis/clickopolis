import * as React from 'react';


import { biomes } from 'data/biomes';
import { BiomeIcon } from 'components/BiomeIcon';
import { stylesheet } from 'typestyle';
import { addImages, colors } from 'utils';

const css = stylesheet({
    biomeData: {

    },
    biomeRank: {
        //background: colors.get('goldenAge'),
        textAlign: 'center',
    },
    biomeRankItems: {
        display: 'flex',
        flexDirection: 'column',
    },
    biomeRankItem: {
        padding: '0.25rem 0.5rem',
        background: '#333',
        color: 'white',
        borderRadius: '.25rem',
        margin: '0.25rem',
    },
});

export interface BiomesScreenProps {

}

export function BiomesScreen(props: BiomesScreenProps) {
    const [currentBiome, setCurrentBiome] = React.useState<string | null>(null);
    const currentBiomeData = React.useMemo(() => {
        return biomes.find(biome => biome.name === currentBiome);
    }, [currentBiome]);

    return <div className='biomes-screen'>
        <h3 className='biomes-screen-title'>Biomes</h3>
        <div style={{
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap',
        }}>
            {
                biomes.map(
                    biome => <BiomeIcon
                        onClick={() => {
                            setCurrentBiome(biome.name);
                        }}
                        key={biome.name}
                        biome={biome}
                        isSelected={biome?.name === currentBiomeData?.name}
                    />
                )
            }
        </div>
        {
            currentBiomeData && (
                <div className={css.biomeData}>
                    <div className={css.biomeRank}>
                        Biome Rank: {currentBiomeData.biomeRank}
                    </div>
                    <div className={css.biomeRankItems}>
                        {currentBiomeData.rankBonuses && currentBiomeData.rankBonuses.map((rankBonus: any) => (
                            <div key={rankBonus.bonus} className={css.biomeRankItem}>
                                {rankBonus.unlocked ? addImages(rankBonus.bonus) : '???'}
                            </div>
                        ))}
                    </div>
                </div>
            )
        }

    </div>
}