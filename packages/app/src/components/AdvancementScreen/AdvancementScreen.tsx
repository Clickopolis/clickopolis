import * as React from 'react';
import { Screen, Button, Indicator, noop } from '@clickopolis/core';
import { connect } from 'react-redux';
import { Era, colors, getResearchPerMinute } from 'utils';
import { purchaseAdvancement } from 'actions';

import './AdvancementScreen.scss'
import omit from 'ramda/es/omit';

export interface AdvancmentScreenProps {
    civilization: any;
    advancements: Advancement[];
    purchaseAdvancement: typeof purchaseAdvancement;
}

export interface Advancement {
    name: string;
    era: Era;
    categories: string[];
    cost: number;
    unlocked: boolean;
    results: string[];
    purchased?: boolean;
    purchasedDate?: number;
    requirements?: string[];
}

export const AdvancementDisplay = (adv: Advancement & {ac: number, purchaseAdvancement: typeof purchaseAdvancement, disabled: boolean}) => {
    return (
        <div className='advancement'
            onClick={_ => {
                adv.disabled ?
                    noop() :
                    adv.purchaseAdvancement(omit(['purchaseAdvancement', 'ac', 'disabled'], adv), adv.ac)
            }}
            style={{
                background: adv.purchased ? colors.get('advancementPurchased') : colors.get('advancement'),
                cursor: 'pointer',
                display: 'flex',
                justifyContent: 'space-between',
                padding: '.25rem',
                margin: '.25rem',
                border: '1px solid rgba(0, 0, 0, 0.8)',
                borderRadius: '.25rem',
                position: 'relative',
                filter: adv.disabled && !adv.purchased ? 'grayscale(80%)' : undefined,
                opacity: adv.unlocked ? undefined : 0.25,
            }}
        >
            {!adv.unlocked && adv.requirements.length &&
                <div className='advancement-requirements' style={{
                    position: 'absolute',
                    top: '2rem',
                    left: '25%',
                    width: '50%',
                    background: 'rgba(0, 0, 0, 0.8)',
                    color: 'white',
                    padding: '.5rem',
                    textAlign: 'center',
                    zIndex: 1,
                    opactiy: 1,
                }}>
                    Requirements: {adv.requirements.join(', ')}
                </div>
            }
            <div className='advancement-icon' style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <img style={{height: '3rem', margin: '.25rem'}} src={`./images/advancements/${
                    adv.unlocked ? adv.name.toLowerCase().replace(/\s/, '-') : 'locked'
                }.svg`} />
            </div>
            <div className='advancement-categories' style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                {adv.categories.map(cat => <img style={{margin: '.25rem', height: '1.5rem'}} src={`./images/${cat}.svg`} />)}
            </div>
            <div className='advancement-info' style={{
                width: '-webkit-fill-available',
                maxHeight: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                fontSize: adv.purchased ? '1.25rem' : '1rem',
                textTransform: adv.purchased ? 'uppercase' : 'none',
                letterSpacing: adv.purchased ? '4px' : undefined,
            }}>
                <div style={{ textAlign: 'center' }} className='advancement-name'>{adv.name}</div>
                {adv.purchased && <div style={{fontSize: '12px', textAlign: 'center'}}>Discovered in {adv.purchasedDate} AC</div>}
                {!adv.purchased && <ul style={{ fontSize: '12px' }}>
                    {adv.results.map(res => <li key={res}>{res}</li>)}
                </ul>}
            </div>
            {!adv.purchased && <div className='advancement-cost' style={{
                background: 'rgba(0, 0, 0, 0.33)',
                color: 'white',
                padding: '1rem',
                textAlign: 'center',
            }}>
                <span className='advancement-cost-text'>
                    {adv.cost}
                </span>
                <img style={{marginTop: '.5rem'}} src='./images/research.svg' />
            </div>}
        </div>
    )
}

export class AdvancementScreenBase extends React.Component<AdvancmentScreenProps> {

    public render() {
        const {civilization, purchaseAdvancement} = this.props;

        return (
            <Screen
                type='Advancements'
                color={colors.get('advancement')}
                style={{overflowY: 'auto'}}
            >
                <div style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center'}}>
                    <Indicator
                        value={this.props.civilization.research.total}
                        positiveColor={colors.get('advancement')}
                        neutralColor={colors.get('advancement')}
                        icon='./images/research.svg'
                        label={'total'}
                        description={`The total amount of research in your empire.`}
                    />
                    <Indicator
                        label={'per minute'}
                        value={getResearchPerMinute(this.props.civilization)}
                        positiveColor={colors.get('advancement')}
                        neutralColor={colors.get('advancement')}
                        negativeColor={colors.get('advancement')}
                        icon='./images/research.svg'
                        description={`Your total research generated per minute.`}
                    />
                </div>
                <div style={{margin: '.5rem 0', borderBottom: '1px solid #ccc', width: '100%', height: '2px'}} />
                <div style={{display: 'flex', padding: '.25rem', justifyContent: 'space-around', alignItems: 'center' }}>
                    <Button style={{background: colors.get('advancement'), border: '1px solid #222', color: '#222', padding: '.25rem', borderRadius: '.25rem'}}>View Tree</Button>
                    <>
                        <input className='styled-checkbox' type='checkbox' />
                        <label style={{color: 'white'}} htmlFor='styled-checkbox-1'>show discovered</label>
                    </>
                    <input style={{borderRadius: '.25rem', padding: '.25rem .5rem', border: '1px solid #eee'}} type='search' />
                </div>
                {this.props.advancements.map(adv => <AdvancementDisplay disabled={adv.cost > civilization.research.total} purchaseAdvancement={purchaseAdvancement} ac={civilization.ac} key={adv.name} {...adv} />)}
            </Screen>
        );
    }
}

export const AdvancementScreen: React.ComponentClass<{}> = connect(
    (state: any) => ({
        civilization: state.civilization,
        advancements: state.advancements,
    }),
    {
        purchaseAdvancement,
    }
)(AdvancementScreenBase as any);
