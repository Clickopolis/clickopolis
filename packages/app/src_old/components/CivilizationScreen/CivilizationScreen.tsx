import * as React from 'react';
import { connect } from 'react-redux';
import { Screen } from 'components/Screen';
import { Indicator } from 'components/Indicator';
import { Resource, Civilization } from 'interfaces';

import { abbrNum } from 'utils/abbrNum';

import { PopulationButton } from '../PopulationButton';
import { colors, getCashPerMinute } from 'utils';

import './CivilizationScreen.scss';

const indicatorStyle = {
  margin: '.25rem',
  minWidth: '5rem',
};

export interface CivilizationScreenProps {
  civilization?: Civilization;
  growPopulation?: Function;
  cattle?: Resource;
}

export interface CivilizationScreenState {
  selectedIndicator: string | null;
}

export const calculateHappiness = (civ: Civilization) => {
  return (
    (civ.happiness.base +
      (civ.happiness.fromBuildings || 0) +
      (civ.happiness.fromWonders || 0) +
      (civ.happiness.fromCitizens || 0) +
      (civ.happiness.fromResources || 0) +
      (civ.happiness.fromCultureBonuses || 0) +
      (civ.happiness.fromFaithBonuses || 0) +
      (civ.happiness.fromEvents || 0)) *
    (civ.happiness.multiplier || 1)
  );
};

export const calculateAnger = (civ: Civilization) => {
  return (
    (civ.anger.fromPopulation || 0) +
    (civ.anger.fromSlavery || 0) +
    (civ.anger.fromWar || 0) * (civ.anger.multiplier || 1)
  );
};

export const calculatePollution = (civ: Civilization) => {
  const { pollution } = civ;

  return (
    ((pollution.fromPopulation || 0) +
      (pollution.fromBuildings || 0) +
      (pollution.fromEvents || 0) +
      (pollution.fromCorporations || 0)) *
    (pollution.mulitiplier || 1)
  );
};

export const calculateHealth = (civ: Civilization, cattle: Resource) => {
  return (
    civ.health.base +
    (civ.health.fromResources || 0) +
    (cattle.healthBonus * cattle.total || 0) +
    (civ.health.fromBuildings || 0) * (civ.health.multiplier || 1)
  );
};

const isNegative = (n?: number) => n?.toString().charAt(0) === '-';

export class CivilizationScreenBase extends React.Component<
  CivilizationScreenProps,
  CivilizationScreenState
> {
  state: CivilizationScreenState = {
    selectedIndicator: null,
  };

  private getHappinessPercentages() {
    const { civilization } = this.props;

    const happiness = calculateHappiness(civilization);
    const anger = calculateAnger(civilization);
    const total = happiness + anger;

    return {
      happiness: (happiness / total) * 100 + '%',
      anger: (anger / total) * 100 + '%',
    };
  }

  private getHealthPercentages() {
    const { civilization } = this.props;
    const { cattle } = this.props;

    const health = calculateHealth(civilization, cattle);
    const pollution = calculatePollution(civilization);
    const total = health + pollution;

    return {
      health: (health / total) * 100 + '%',
      pollution: (pollution / total) * 100 + '%',
    };
  }

  private getGoldenAgeProgress(civ: Civilization) {
    const gp = civ.goldenAge.progress;
    const gg = civ.goldenAge.goal;

    return (gp / gg) * 100 + '%';
  }

  public render() {
    const center = {
      alignItems: 'center',
      display: 'flex',
      marginTop: '1rem',
    };

    const { civilization } = this.props;
    const goldenAgePercent = this.getGoldenAgeProgress(civilization);
    const gaGain = civilization.population / ((calculateHappiness(civilization) - calculateAnger(civilization)) || 1);

    return (
      <Screen type="Civilization" color={colors.get('civilization')}>
        <div className="civilization-indicator" style={center}>
          <PopulationButton />
        </div>
        <div
          className="civilization-indicator"
          style={{
            ...center,
            alignItems: 'flex-end',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div
              style={{
                width: '80%',
                height: '.5rem',
                borderRadius: '.25rem',
                display: 'flex',
                margin: '.5rem 1rem',
                overflow: 'hidden',
              }}
            >
              <div
                style={{
                  background: 'yellow',
                  height: '.5rem',
                  width: this.getHappinessPercentages().happiness,
                }}
              ></div>
              <div
                style={{
                  background: 'red',
                  height: '.5rem',
                  width: this.getHappinessPercentages().anger,
                }}
              ></div>
            </div>
            <div style={{ display: 'flex' }}>
              <Indicator
                value={calculateHappiness(this.props.civilization)}
                positiveColor="yellow"
                neutralColor="yellow"
                icon={'./images/happiness.svg'}
                description="Keep your citizens happy with buildings and innovation."
                style={indicatorStyle}
                onClick={this.onClick('happiness')}
              />
              <Indicator
                value={calculateAnger(this.props.civilization)}
                positiveColor="red"
                neutralColor="red"
                icon={'./images/anger.svg'}
                description={`Don't make your citizens angrier`}
                style={indicatorStyle}
                onClick={this.onClick('anger')}
              />
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div
              style={{
                width: '80%',
                height: '.5rem',
                borderRadius: '.25rem',
                display: 'flex',
                margin: '.5rem 1rem',
                overflow: 'hidden',
              }}
            >
              <div
                style={{
                  background: 'white',
                  height: '.5rem',
                  width: this.getHealthPercentages().health,
                }}
              ></div>
              <div
                style={{
                  background: 'lightgreen',
                  height: '.5rem',
                  width: this.getHealthPercentages().pollution,
                }}
              ></div>
            </div>
            <div style={{ display: 'flex' }}>
              <Indicator
                value={calculateHealth(
                  this.props.civilization,
                  this.props.cattle
                )}
                positiveColor="white"
                neutralColor="white"
                icon={'./images/health.svg'}
                description={`Health`}
                style={indicatorStyle}
                onClick={this.onClick('health')}
              />

              <Indicator
                value={calculatePollution(this.props.civilization)}
                positiveColor={colors.get('pollution')}
                neutralColor={colors.get('pollution')}
                icon={'./images/pollution.svg'}
                description={`Pollution`}
                style={indicatorStyle}
                onClick={this.onClick('pollution')}
              />
            </div>
          </div>
          <Indicator
            value={`Golden Age Progress (${isNegative(gaGain) ? '-' : '+'}${abbrNum(gaGain)})`}
            style={{
              ...indicatorStyle,
              color: 'white',
              border: '1px solid rgba(255, 255, 255, 0.8)',
              background: `linear-gradient(to right, ${colors.get(
                'goldenAge'
              )} ${goldenAgePercent}, ${colors.get(
                'goldenAgeDark'
              )} ${goldenAgePercent}, ${colors.get('goldenAgeDark')})`,
            }}
            icon={'./images/golden-age.svg'}
            description={`Your progress towards a Golden Age ${
              abbrNum(civilization.goldenAge.progress)
            }/${abbrNum(civilization.goldenAge.goal)}`}
          />
        </div>
        <div
          className="civilization-indicator"
          style={{
            alignItems: 'center',
            display: 'flex',
            marginTop: '.5rem',
          }}
        >
          <Indicator
            value={getCashPerMinute(this.props.civilization)}
            positiveColor={colors.get('economy')}
            neutralColor={colors.get('economy')}
            negativeColor={colors.get('economy')}
            icon={'./images/cash.svg'}
            description={`The total cash in your empire`}
            style={indicatorStyle}
            onClick={this.onClick('cash')}
          />
          <Indicator
            value={this.props.civilization.research.total}
            positiveColor={colors.get('advancements')}
            neutralColor={colors.get('advancements')}
            icon={'./images/research.svg'}
            formatFunction={(v: number) => abbrNum(v)}
            description={`The total science in your empire`}
            style={indicatorStyle}
            onClick={this.onClick('research')}
          />
          <Indicator
            value={this.props.civilization.culture.total}
            positiveColor="#ff006d"
            neutralColor="#ff006d"
            icon={'./images/culture.svg'}
            description={`The total culture in your empire`}
            style={indicatorStyle}
            onClick={this.onClick('culture')}
          />
          <Indicator
            value={this.props.civilization.faith.total}
            positiveColor="#e5d48a"
            neutralColor="#e5d48a"
            icon={'./images/faith.svg'}
            description={`The total faith in your empire`}
            style={indicatorStyle}
            onClick={this.onClick('faith')}
          />
          <Indicator
            value={`2555 km`}
            positiveColor={colors.get('land')}
            neutralColor={colors.get('land')}
            icon={'./images/land.svg'}
            description={`The total land in your empire`}
            style={indicatorStyle}
          />
        </div>
        <div
          className="civilization-indicator"
          style={{
            alignItems: 'center',
            display: 'flex',
            marginTop: '.5rem',
          }}
        >
          <Indicator
            value={`1%`}
            positiveColor={colors.get('pollution')}
            neutralColor={colors.get('pollution')}
            icon={'./images/plague.svg'}
            description={`Your current chance of a plague.`}
            style={indicatorStyle}
          />
          <Indicator
            value={`1%`}
            positiveColor={'#faffe5'}
            neutralColor={'#faffe5'}
            icon={'./images/luck.svg'}
            description={`Your current luck.`}
            style={indicatorStyle}
          />
        </div>
        {this.state.selectedIndicator && (
          <div
            className="civilization-indicator-breakdown"
            style={{
              background: 'rgba(20, 20, 20, 0.8)',
              color: 'white',
              padding: '.25rem',
              border: '1px solid #111',
              borderRadius: '4px',
              margin: '.5rem 1rem',
            }}
          >
            <h4
              style={{
                fontSize: '1.05rem',
                textAlign: 'center',
                letterSpacing: '3px',
                textTransform: 'uppercase',
              }}
            >
              <img
                style={{ height: '1rem', marginRight: '1rem' }}
                src={`./images/${this.state.selectedIndicator}.svg`}
              />
              {this.state.selectedIndicator} breakdown
            </h4>
            <ul style={{ padding: '0 2rem' }}>{this.renderIndicatorStats()}</ul>
          </div>
        )}
      </Screen>
    );
  }

  private onClick = (selectedIndicator: string) => () => {
    this.setState({
      selectedIndicator,
    });
  };

  private renderIndicatorStats = () => {
    const { selectedIndicator } = this.state;
    const { civilization } = this.props;

    const propMap: [string, any][] = Object.entries(
      civilization[selectedIndicator as keyof Civilization]
    );
    return propMap.map((item) => {
      return (
        <li
          style={{
            marginBottom: '.25rem',
            listStyleType: 'none',
            fontSize: '.9rem',
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <span style={{ fontWeight: 'bold' }}>
            {item[0].replace(/[A-Z]/g, ' $&')}
          </span>
          <span>{item[1]}</span>
        </li>
      );
    });
  };
}

export const CivilizationScreen = connect(
  (state: any) => ({
    civilization: state.civilization,
    cattle: state.cattle,
    banana: state.banana,
    fish: state.fish,
  }),
  null
)(CivilizationScreenBase as any);
