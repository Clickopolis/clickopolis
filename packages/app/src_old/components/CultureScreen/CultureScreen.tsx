import * as React from 'react';
import { connect } from 'react-redux';

import { colors, colorKeys } from 'utils';
import { Screen } from 'components/Screen';
import { Indicator } from 'components/Indicator';
import { Resource, Civilization } from 'interfaces';
import './CultureScreen.scss';
import { socialPolicies, SocialPolicy as SP } from 'data/socialPolicies';
import { addImages } from 'utils/addImages';

export interface CultureScreenprops {
  culture?: Civilization['culture'];
}

const iconHeight = { height: '1rem' };
const rowItem = { margin: '.25rem' };

export const PolicySlot = () => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      padding: '1rem',
      height: '140px',
      width: '120px',
      margin: '.25rem',
      boxShadow: 'inset 0px 0px 67px 117px rgba(0,0,0,0.25)',
      border: '1px solid #111',
    }}
  >
    Drop a Policy Here!
  </div>
);

export const SocialPolicy = (sp: SP) => (
  <div
    style={{
      height: '140px',
      width: '120px',
      margin: '.25rem',
      cursor: 'move',
      fontSize: '95%',
      borderRadius: '.25rem',
      border: '1px solid #111',
      overflow: 'hidden',
      paddingBottom: '.5rem',
      textOverflow: 'ellipses',
      background: `linear-gradient(to top, #333, ${colors.get(
        sp.category as colorKeys
      )})`,
    }}
    className="social-policy-card"
  >
    <div
      style={{
        fontSize: '90%',
        padding: '4px',
        background: '#111',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <img
        style={{ ...iconHeight, marginRight: '.25rem' }}
        src={`./images/${sp.category}.svg`}
      />
      <span>{sp.category}</span>
    </div>
    <div
      style={{
        fontWeight: 'bold',
        margin: '.5rem',
      }}
    >
      {sp.name}
    </div>
    <div
      style={{
        fontSize: '90%',
        textOverflow: 'ellipses',
        margin: '.25rem',
      }}
    >
      {addImages(sp.description)}
    </div>
  </div>
);

export class CultureScreenBase extends React.Component<CultureScreenprops> {
  constructor(props: CultureScreenprops) {
    super(props);
  }

  public render() {
    return (
      <Screen
        type="Culture"
        color={colors.get('culture')}
        style={{ overflowY: 'auto' }}
      >
        <Indicator
          value={this.props.culture.total}
          positiveColor="#ff006d"
          neutralColor="#ff006d"
          icon={'./images/culture.svg'}
          description={`The total culture in your empire`}
        />
        <div
          style={{ color: 'white', margin: '1rem' }}
          className="culture-panel-inner"
        >
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <h4
              style={{
                textTransform: 'uppercase',
                letterSpacing: '3px',
                fontSize: '1.25rem',
              }}
            >
              Policies
            </h4>
            <div
              style={{
                background: colors.get('culture'),
                color: 'white',
                height: '2rem',
                display: 'flex',
                alignItems: 'center',
                borderRadius: '1.5rem',
                padding: '0 1rem',
                margin: '0 .5rem',
              }}
            >
              3 Policy Slots
            </div>
          </div>

          <div
            style={{
              margin: '.25rem',
              background: '#222',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            className="culture-panel-policies-chosen"
          >
            <PolicySlot />
            <PolicySlot />
            <PolicySlot />
          </div>
          <div
            style={{
              margin: '.25rem',
              background: '#222',
              display: 'flex',
              justifyContent: 'space-evenly',
              flexWrap: 'wrap',
            }}
            className="policy-cards"
          >
            {socialPolicies.map((sp) => (
              <SocialPolicy {...sp} />
            ))}
          </div>
        </div>
        <div style={{ color: 'white', margin: '1rem' }} className="great-works">
          <h4
            style={{
              textTransform: 'uppercase',
              letterSpacing: '3px',
              fontSize: '1.25rem',
            }}
          >
            Great Works
          </h4>

          <div
            style={{ margin: '.25rem', background: '#222' }}
            className="great-works-list"
          >
            <div
              className="row"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-evenly',
              }}
            >
              <div
                style={{
                  ...rowItem,
                  display: 'flex',
                  justifyContent: 'center',
                }}
              ></div>
              <div style={rowItem}>Name</div>
              <div style={rowItem}>Year Discovered</div>
              <div style={rowItem}>Bonus</div>
            </div>
            <div
              className="row"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-evenly',
              }}
            >
              <div style={rowItem}>
                <img
                  style={{ height: '120px' }}
                  src="https://upload.wikimedia.org/wikipedia/commons/d/d1/VenusWillendorf.jpg"
                />
              </div>
              <div style={rowItem}>Venus of Willendorf</div>
              <div style={rowItem}>20 AC</div>
              <div style={rowItem}>
                +10 <img style={iconHeight} src="./images/culture.svg" />
                /min
              </div>
            </div>
          </div>
        </div>
      </Screen>
    );
  }
}

export const CultureScreen = connect(
  (state: any) => ({ culture: state.civilization.culture }),
  null
)(CultureScreenBase as any);
