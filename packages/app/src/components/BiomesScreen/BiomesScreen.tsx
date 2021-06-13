import * as React from 'react';

import { biomes } from 'data/biomes';
import { BiomeIcon } from 'components/BiomeIcon';
import { keyframes, stylesheet, classes } from 'typestyle';
import { addImages, colors } from 'utils';
import { color } from 'csx';

const moveInAnimation = keyframes({
  '0%': {
    right: '-1000px',
  },
  '100%': {
    right: 0,
  },
});

const css = stylesheet({
  biomesScreen: {
    //overflowX: 'hidden',
    color: `white`,
    padding: ` 0.25rem`,
    width: `100%`,
    position: `relative`,
    background: '#111',
    minHeight: '400px',
    //marginTop: '2rem',
  },
  biomesScreenTitle: {
    display: 'block',
    margin: '0',
    fontWeight: 'lighter',
    marginLeft: '.5rem',
  },
  biomesScreenIcon: {
    marginLeft: '1rem',
    marginRight: '1rem',
    marginTop: '-1rem',
    height: '2rem',
  },
  biomeData: {
    background: 'rgba(0, 0, 0, 0.8)',
    clipPath: `polygon(8% 0, 100% 0%, 100% 100%, 0% 100%)`,
    position: 'absolute',
    top: 0,
    right: 0,
    width: '50%',
    padding: '1rem',
    paddingLeft: '2rem',
    height: '100%',
    animationName: moveInAnimation,
    animationDuration: '1s',
    animationIterationCount: 1,
  },
  biomeDataHidden: {
    // right: '-1000px',
    // animationDirection: 'reverse',
    // animationDelay: '1s',
  },
  biomeDominance: {},
  biomeCloser: {
    height: '1rem',
    filter: 'invert(100%)',
    position: 'absolute',
    top: '0.5rem',
    right: '0.5rem',
    cursor: 'pointer',
  },
  biomeName: {
    fontSize: '120%',
    fontWeight: 'bold',
    letterSpacing: '3px',
    color: colors.get('goldenAge'),
    textAlign: 'center',
    textTransform: 'uppercase',
    marginBottom: '0.25rem',
  },
  biomeRankWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  biomeRank: {
    background: colors.get('biomes'),
    color: '#222',
    maxWidth: '14rem',
    borderRadius: '.25rem',
    borderBottom: `4px solid ${color(colors.get('biomes'))
      .darken(0.1)
      .toString()}`,
    textAlign: 'center',
    margin: '.25rem auto',
    padding: '0.25rem 0.5rem',
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

export interface BiomesScreenProps {}

export function BiomesScreen(props: BiomesScreenProps) {
  const [currentBiome, setCurrentBiome] = React.useState<string | null>(null);
  const currentBiomeData = React.useMemo(() => {
    return biomes.find((biome) => biome.name === currentBiome);
  }, [currentBiome]);

  return (
    <div className={classes(css.biomesScreen)}>
      <h3 className={classes(css.biomesScreenTitle)}>
        <img
          className={classes(css.biomesScreenIcon)}
          src="./images/biomes.svg"
        />
        Biomes
      </h3>

      <div style={{ display: 'flex' }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap',
            width: '50%',
            padding: '1rem',
          }}
        >
          {biomes.map((biome) => (
            <BiomeIcon
              onClick={() => {
                if (currentBiomeData?.name === biome.name) {
                  setCurrentBiome(null);
                } else {
                  setCurrentBiome(biome.name);
                }
              }}
              key={biome.name}
              biome={biome}
              isSelected={biome?.name === currentBiomeData?.name}
            />
          ))}
          <div className={css.biomeDominance}>
            Dominant Biome: {'Desert'} (95% of land)
          </div>
        </div>
        {
          <div
            className={classes(
              css.biomeData,
              !currentBiomeData && css.biomeDataHidden
            )}
          >
            <div className={css.biomeName}>
              {currentBiomeData?.name ?? 'Select a Biome'}
            </div>
            {currentBiomeData ? (
              <div className={css.biomeRankWrapper}>
                <div className={css.biomeRank}>
                  Rank: {currentBiomeData?.biomeRank}
                </div>
                <div className={css.biomeRank}>
                  Prevalance: {currentBiomeData?.sqKm}/{'2555'}
                  {'km'}
                </div>
              </div>
            ) : null}
            <div className={css.biomeRankItems}>
              {currentBiomeData?.rankBonuses &&
                currentBiomeData?.rankBonuses.map(
                  (rankBonus: any, idx: number) => (
                    <div
                      style={{
                        marginRight: idx * 2 + 'px',
                      }}
                      key={rankBonus.bonus}
                      className={css.biomeRankItem}
                    >
                      {rankBonus?.rank}{' '}
                      {rankBonus.unlocked ? addImages(rankBonus.bonus) : '???'}
                    </div>
                  )
                )}
            </div>
          </div>
        }
      </div>
    </div>
  );
}
