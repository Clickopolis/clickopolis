import * as React from 'react';
import { Indicator } from 'components/Indicator';
import { Button } from 'components/Button';
import { Resource, Leader } from 'interfaces';
import { UserMenu } from 'components';
import { abbrNum, colorKeys, colors } from 'utils';
import { EraIndicator } from 'components/EraIndicator';
import { connect } from 'react-redux';
import { persistor } from 'store';
import { v4 as uuid } from 'uuid';

import './Menu.scss';
import { addNotification, showMenu, resetAdvancements } from 'actions';
import { calculateHappiness } from 'components';
import { calculateAnger } from 'components/CivilizationScreen';
import { classes, stylesheet } from 'typestyle';
import { menus } from 'data/menus';

export interface MenuProps {
    ac?: number;
    food?: Resource;
    production?: Resource;
    leader: Leader;
    population: number;
    addNotification: addNotification;
    resetAdvancements: typeof resetAdvancements;
    showMenu: showMenu;
    civilization: any;
    currentMenu: string;
}

const css = stylesheet({
    menuItem: {
        //borderBottom: '1px solid #222',
        cursor: 'pointer',
        padding: '0.25rem',
        display: 'flex',
        alignItems: 'center',
        $nest: {
            '&:hover': {
                backgroundColor: 'rgb(66,66,66)',
                transition: '250ms backgroundColor',
            }
        }
    },
    menuItemSelected: {
        background: 'rgb(66,66,66)'
    },
    debugPanel: {
        border: '1px solid #ccc',
        borderRadius: '.25rem',
        padding: '0.25rem',
        margin: '0.5rem',
    }
});

const margin = {margin: '0 .5rem', color: '#111'}

const ProgressBar = () => {
    return <div style={{
        height: '.5rem',
        borderRadius: '.25rem',
        margin: '2px',
        width: '100%',
        background: `linear-gradient(to right, skyblue 33%, #222 33%, #222)`
    }} />
}

export class MenuBase extends React.Component<MenuProps> {


    private displayQuests = (_:any) => ({});

    private getHappinessRating = () => {
        const {civilization} = this.props;
        const delta = calculateHappiness(civilization) - calculateAnger(civilization);

        if (delta > 100) {
            return 'Ecstatic';
        }

        if (delta <= 100 && delta > 75) {
            return 'Joyous';
        }

        if (delta <= 75 && delta > 50) {
            return 'Happy';
        }

        if (delta <= 50 && delta > 0) {
            return 'Content';
        }

        if (delta === 0) return 'Neutral';

        if (delta < 0 && delta >= -30) {
            return 'Upset';
        }

        if (delta < -30) {
            return 'Furious';
        }

        return 'Uncertain';
    }

    public render() {
        const {ac, food, leader, production, population, currentMenu, civilization, showMenu} = this.props;

        return (
            <nav className='clickopolis-menu'>
                <UserMenu username={leader.name} userCivName={leader.defaultCivName} />

                <div className='at-a-glance' style={{
                    padding: '0.5rem',
                }}>
                    <h3 style={{
                        textTransform: 'lowercase',
                        textAlign: 'left',
                        fontWeight: 'lighter',
                        fontSize: '0.75rem',
                        margin: 0,
                        marginLeft: '0.5rem',
                    }}>At A Glance</h3>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        margin: '0.25rem',
                    }}>
                        <Indicator
                            value={food.total}
                            positiveColor={colors.get('resources')}
                            neutralColor={colors.get('resources')}
                            formatFunction={(v: number) => abbrNum(v)}
                            icon={'./images/food.svg'}
                            description='Total Food in your empire'
                            style={margin}
                        />
                        <Indicator
                            value={production.total}
                            positiveColor={colors.get('production')}
                            neutralColor={colors.get('production')}
                            formatFunction={(v: number) => abbrNum(v)}
                            icon={'./images/production.svg'}
                            description='Total Productivity of your empire'
                            style={margin}
                        />
                        <Indicator
                            value={population}
                            positiveColor={colors.get('citizens')}
                            neutralColor={colors.get('citizens')}
                            formatFunction={(v: number) => abbrNum(v)}
                            icon={'./images/citizens.svg'}
                            description='Total population'
                            style={margin}
                        />
                    </div>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        margin: '0.25rem',
                    }}>
                        <EraIndicator />
                        <Indicator
                            value={`${ac} AC`}
                            description={'AC: After Click'}
                            neutralColor='#333'
                            style={ { margin: '0 .33rem' }}
                        />
                    </div>
                    <div>
                        
                        <Indicator
                            icon={`./images/${this.getHappinessRating().toLowerCase()}.svg`}
                            value={`Your citizens are ${this.getHappinessRating()}`}
                            neutralColor='#333'
                        />

                    </div>
                </div>

                <nav className='main-nav'>
                    <ul>
                        {menus.map(menu => {
                            return <li onClick={() => {
                                showMenu(menu.name);
                            }}
                            key={menu.id} className={classes(css.menuItem, this.props.currentMenu === menu.name && css.menuItemSelected)}>
                                <img style={{height: '1.25rem'}} src={`./images/${menu.name}.svg`} />
                                <span>{menu.name}</span>
                            </li>
                        })}
                    </ul>
                    
                    <div className={css.debugPanel}>
                        <span>debug: {this.props.currentMenu}</span>
                        <br/>
                        <Button
                            style={{background: '#333'}}
                            onClick={() => this.props.resetAdvancements()}
                        >
                            Reset Advancements
                        </Button>
                        <div className='delete-all-data' style={{marginTop: '2rem'}} onClick={() => {
                            persistor.purge();
                        }}>
                            Delete All Data
                        </div>

                        <Button
                            style={{background: 'black'}}
                            onClick={() => this.props.addNotification({
                                content: `Triggered a notification.`,
                                id: uuid(),
                            })}
                        >
                            Trigger Notification
                        </Button>

                    </div>
                </nav>


                {/* <Indicator
                    value={`${3} Quests`}
                    icon={'./images/quests.svg'}
                    positiveColor={colors.get('quests')}
                    neutralColor={colors.get('quests')}
                    tooltipProps={{
                        arrow: true,
                        followCursor: false,
                        interactive: true,
                    }}
                    style={{color: '#222'}}
                    description={<div>
                        Gain 20/30 Population
                        <ProgressBar />
                        Have 3/6 Advancements
                        <ProgressBar />
                        Gain 40 Population
                        <ProgressBar />
                        <Button style={{background: '#111', color: 'white'}} value={'Claim Treasure'} />
                    </div>}
                    onClick={this.displayQuests}
                /> */}

                <div>{'<<'}</div>
            </nav>
        );
    }
}

export const Menu: React.ComponentClass<{}> = connect(
    (state: any) => ({
        ac: state.civilization.ac,
        food: state.food,
        production: state.production,
        leader: state.leader,
        population: state.civilization.population,
        civilization: state.civilization,
        currentMenu: state.currentMenu,
    }),
    {
        addNotification,
        showMenu,
        resetAdvancements,
    }
)(MenuBase as any)

