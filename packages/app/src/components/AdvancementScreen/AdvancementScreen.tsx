import * as React from 'react';
import { Screen, Era } from '@clickopolis/core';
import { connect } from 'react-redux';

import { colors } from 'utils';

import { Civilization } from '@clickopolis/core'

export interface AdvancmentScreenProps {
    civilization: Civilization;
}

export interface Advancement {
    name: string;
    era: Era;
    categories: string[];
    cost: number;
    unlocked: boolean;
    results: string[];
    purchased?: boolean;
    purchaseDate?: number;
    requirements?: string[];
}

export const AdvancementDisplay = (adv: Advancement) => {
    return (
        <div className='advancement' style={{
            background: adv.purchased ? colors.get('advancementPurchased') : colors.get('advancement'),
            cursor: 'pointer',
            display: 'flex',
            justifyContent: 'space-between',
            padding: '.25rem',
            margin: '.25rem',
            border: '1px solid rgba(0, 0, 0, 0.8)',
            borderRadius: '.25rem',
            position: 'relative',
            pointerEvents: adv.unlocked ? undefined : 'none',
            opacity: adv.unlocked ? undefined : 0.25,
        }}>
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
                {adv.purchased && <div style={{fontSize: '12px', textAlign: 'center'}}>Discovered in {adv.purchaseDate} AC</div>}
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

        const advancements = [
            {
                name: 'Pottery',
                era: Era.Ancient,
                cost: 20,
                categories: ['culture', 'buildings'],
                unlocked: true,
                results: [
                    'Allows construction of Granary'
                ]
            },
            {
                name: 'Bartering',
                era: Era.Ancient,
                cost: 20,
                categories: ['economy'],
                unlocked: true,
                results: [
                    'Can create Trade Routes',
                    'Citizens award +1 Gold',
                    'Unlocks Economy panel',
                ]
            },
            {
                name: 'Clothing',
                era: Era.Ancient,
                cost: 20,
                categories: ['culture'],
                purchased: true,
                purchaseDate: 30,
                unlocked: true,
                results: [
                    '+2 Happiness',
                    'Can discover Tundra biome',
                ]
            },
            {
                name: 'Irrigation',
                era: Era.Ancient,
                cost: 20,
                categories: [
                    'resources',
                ],
                unlocked: true,
                results: [
                    '+.5 Food/s from Farmers',
                    'Unlocks Banana resource',
                ]
            },
            {
                name: 'Painting',
                era: Era.Ancient,
                cost: 20,
                categories: ['culture'],
                unlocked: true,
                results: [
                    'Unlocks culture panel',
                ]
            },
            {
                name: 'Sailing',
                era: Era.Ancient,
                cost: 20,
                categories: ['military', 'economy'],
                unlocked: false,
                results: [
                    'Can raise a Navy',
                    'Can discover Coast and Island biomes',
                ],
                requirements: [
                    'Wood Cutting',
                ]
            },
            {
                name: 'Wood Cutting',
                era: Era.Ancient,
                cost: 20,
                categories: ['military'],
                unlocked: true,
                results: [
                    'Can assign woodcutters',
                    'Unlocks Spices resource',
                ]
            },
            {
                name: 'Writing',
                era: Era.Ancient,
                cost: 20,
                categories: ['research'],
                unlocked: false,
                requirements: ['Pottery'],
                results: [
                    'Can build Library',
                    'Can build The Great Library World Wonder',
                    'Can assign Writers',
                ]
            }
        ]

        return (
            <Screen
                type='Advancements'
                color={colors.get('advancement')}
            >
                {advancements.map(adv => <AdvancementDisplay key={adv.name} {...adv} />)}
            </Screen>
        );
    }
}

export const AdvancementScreen: React.ComponentClass<{}> = connect(
    (state: any) => ({
        civilization: state.civilization,
    }),
    null
)(AdvancementScreenBase);
