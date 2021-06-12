import * as React from 'react';
import { Screen } from 'components/Screen';
import { Indicator } from 'components/Indicator';

import { connect } from 'react-redux';
import { Era, colors, getResearchPerMinute, getEraName, abbrNum, addImages } from 'utils';
import { purchaseAdvancement } from 'actions';
import { Tooltip } from 'react-tippy';
import GradientPath from 'gradient-path';

import './AdvancementScreen.scss'
import omit from 'ramda/es/omit';
import { keyframes, stylesheet } from 'typestyle';
import { AdvName } from 'data/advancements';
import { linearGradient } from 'csx';
import { useEffect } from 'react';
import { useRef } from 'react';

const noop = () => {};

const dash = keyframes({
    'to': {
        strokeDashoffset: 0,
    }
});

const css = stylesheet({
    advancementPath: {
        strokeDasharray: 10,
        strokeDashoffset: 10,
        animationName: dash,
        animationDuration: '1s',
        animationFillMode: 'forwards',
        animationDirection: 'alternate',
        animationTimingFunction: 'linear',
        animationIterationCount: 'infinite',
    }
})

export interface AdvancementScreenProps {
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
    tier: number;
    subtier: number;
    arrow?: null | [number, number, number];
    parents?: null | AdvName[];
}

export const AdvancementDisplay = (adv: Advancement & {ac: number, purchaseAdvancement: typeof purchaseAdvancement, disabled: boolean, idx: number, advs: Advancement[]}) => {
    const svgPath = useRef(null);
    const areParentsPurchased = adv?.parents ? adv?.parents?.every(parent => {
        return adv.advs.find(adv => adv.name === parent).purchased;
    }) : true;
    const canPurchase = !adv.disabled && adv.unlocked && areParentsPurchased;

    useEffect(() => {
        const isParentPurchased = adv.advs.find(ad => ad.name === adv.parents?.[0])?.purchased;
        const areBothPurchased = adv.purchased && isParentPurchased;
        const isOnlyParentPurchased = !adv.purchased && isParentPurchased;

        const stroke = areBothPurchased ?
            [{ color: colors.get('advancementPurchased'), pos: 0 }, { color: colors.get('advancementPurchased'), pos: 1 }]
            : isOnlyParentPurchased ?
                [
                    { color: colors.get('advancementPurchased'), pos: 0 },
                    { color: colors.get('advancements'), pos: 1 }
                ]
                : [{ color: colors.get('advancements'), pos: 0 }, { color: colors.get('advancements'), pos: 1 }];

        const path = svgPath.current;

        console.log(path);

        if (path) {
            try {
                const gp = new GradientPath({
                    path: path,
                    segments: 1,
                    samples: 3,
                    precision: 2,
                });
                
                gp.render({
                    type: 'path',
                    stroke: stroke,
                    strokeWidth: 8
                });
            } catch (e) {
                console.error(e);
            }
        }
        

        document.querySelectorAll('.path-segment').forEach(p => p.classList.add(css.advancementPath));

        
    }, [adv.purchased, adv.advs]);


    return (
        <Tooltip hideDuration={10} followCursor arrow position='left' html={<div>
            {<ul style={{ fontSize: '12px', margin: 0, padding: '4px', listStyleType: 'none', }}>
                {adv.results.map(res => <li key={res}>{addImages(res)}</li>)}
            </ul>}
        </div>}>
            {/* {adv.tier !== 0 && <svg style={{
                position: 'absolute',
                top: (170 * adv.tier) + 'px',
                left: (192 * adv.subtier * 1.5) + 'px', 
            }}  width={'2rem'} height={'6rem'}>
                <path className={css.advancementPath} d="M 0 0 C 0 0, 0 0, 0 160" stroke={colors.get('advancements')} strokeWidth='8px' fill="transparent"/>
            </svg>} */}

            {adv.tier !== 0 && adv.arrow && <svg style={{
                position: 'absolute',
                width: '4px',
                height: '120px',
                //background: background,
                //top: (170 * adv.tier) + 'px',
                //left: (192 * adv.subtier * 1.5) + 'px',
                
                left: (adv.arrow[0]) + 'px',
                top: (adv.arrow[1]) + 'px',
                
                transform: 'rotate(' + adv.arrow[2] + 'deg)',
            }}>
                <path className={css.advancementPath} d="M 0 0 C 0 0, 0 0, 0 160" stroke={colors.get('advancements')} strokeWidth='8px' fill="transparent" ref={svgPath} />
            </svg>}

            <div className={`advancement advancement-${getEraName(adv.era).toLowerCase()}`}
                onClick={_ => {
                    adv.disabled ?
                        noop() :
                        adv.purchaseAdvancement(omit(['purchaseAdvancement', 'ac', 'disabled'], adv), adv.ac)
                }}
                style={{
                    backgroundColor: adv.purchased ? colors.get('advancementPurchased') : colors.get('advancements'),
                    backgroundAttachment: 'scroll',
                    cursor: 'pointer',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    padding: '.25rem',
                    margin: '1rem',
                    boxShadow: '0 0 4px rgba(0, 0, 0, 0.1)',
                    borderRadius: '.25rem',
                    //position: 'relative',
                    pointerEvents: canPurchase ? undefined : 'none',
                    filter: canPurchase ? undefined : 'grayscale(80%)',
                    //opacity: canPurchase ? undefined : 0.25,
                    width: '10rem',
                    height: '10rem',

                    position: 'absolute',
                    top: (192 * adv.tier) + 'px',
                    left: (192 * adv.subtier) + 'px',
                    zIndex: 1,
                }}
            >
                <div className='advancement-info' style={{
                    textAlign: 'center' 
                }}>
                    <div style={{ }} className='advancement-name'>{adv.name}</div>
                    {/* <div>Tier {adv.tier} / {adv.subtier}</div> */}
                    {adv.purchased && <div style={{fontSize: '12px'}}>Discovered in {adv.purchasedDate} AC</div>}
                    
                    
                </div>
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
                    position: 'absolute',
                    left: '-1rem'
                }}>
                    {adv.categories.map(cat => <img style={{margin: '.25rem', height: '1.5rem', padding: '0.25rem', background: 'white', borderRadius: '50%' }} src={`./images/${cat}.svg`} />)}
                </div>
                
                {!adv.purchased && adv.unlocked && <div className='advancement-cost' style={{
                    background: 'white',
                    borderRadius: '.25rem',
                    borderBottom: '1px solid #ddd',
                    color: 'black',
                    padding: '0.5rem',
                    textAlign: 'center',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    position: 'absolute',
                    right: '-1rem',
                    bottom: '-1rem',
                    fontSize: '12px',
                    //width: '40px',
                    height: '40px',
                }}>
                    <img style={{ height: '1.5rem'}} src='./images/research.svg' />
                    <span>
                        {abbrNum(adv.cost)}
                    </span>
                    
                </div>}
            </div>
        </Tooltip>
    )
}

export class AdvancementScreenBase extends React.Component<AdvancementScreenProps, {showDiscovered: boolean, x: number, y: number}> {

    public state = {
        showDiscovered: false,
        x: 0,
        y: 0,
    };

    private onShowDiscovered = () => {
        this.setState(s => ({showDiscovered: !s.showDiscovered }));
    }

    private sortAdvancements(advs: Advancement[]) {


        return advs.filter(adv => adv.era === Era.Ancient);
    }

    public render() {
        const {civilization, purchaseAdvancement} = this.props;


        return (
            <Screen
                type='Advancements'
                color={colors.get('advancements')}
                style={{overflowY: 'auto'}}
            >
                <div style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center'}}>
                    <Indicator
                        value={this.props.civilization.research.total}
                        positiveColor={colors.get('advancements')}
                        neutralColor={colors.get('advancements')}
                        formatFunction={(f: number) => abbrNum(f)}
                        icon='./images/research.svg'
                        label={'total'}
                        description={`The total amount of research in your empire.`}
                    />
                    <Indicator
                        label={'per minute'}
                        value={getResearchPerMinute(this.props.civilization)}
                        formatFunction={(f: number) => abbrNum(f)}
                        positiveColor={colors.get('advancements')}
                        neutralColor={colors.get('advancements')}
                        negativeColor={colors.get('advancements')}
                        icon='./images/research.svg'
                        description={`Your total research generated per minute.`}
                    />
                    <Indicator
                        label={'owned'}
                        value={this.props.advancements.filter(f => f.purchased).length}
                        positiveColor={colors.get('advancements')}
                        neutralColor={colors.get('advancements')}
                        negativeColor={colors.get('advancements')}
                        icon='./images/research.svg'
                        description={`Your total advancements.`}
                    />
                </div>
                {/* <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                }}>
                    {this.props.advancements.map(adv => <AdvancementDisplay disabled={adv.cost > civilization.research.total} purchaseAdvancement={purchaseAdvancement} ac={civilization.ac} key={adv.name} {...adv} />)}
                </div> */}

                <div style={{ position: 'relative', margin: '0 auto', transition: '100ms all', transform: `translate(${this.state.x}px, ${this.state.y}px)`}}>
                    {this.props.advancements.map((adv, idx, advs) => <AdvancementDisplay idx={idx} advs={advs} disabled={adv.cost > civilization.research.total} purchaseAdvancement={purchaseAdvancement} ac={civilization.ac} key={adv.name} {...adv} />)}
                </div>

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
