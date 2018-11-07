import React, {Component} from 'react';
import {Route} from 'react-router-dom';

import OpenCharacter from './open-character';
import TranslationsProvider from './translations/TranslationsProvider';
import CharacterSheet from './character-sheet';
import ModeSelector from './mode-selector';
import Header from './header';

import {Provider as AlertProvider} from 'react-alert'
import BasicAlertTemplate from 'react-alert-template-basic'

import 'bootstrap/dist/css/bootstrap.css'
import './MainContainer.css';

import pl from 'react-intl/locale-data/pl';
import en from 'react-intl/locale-data/en';
import {addLocaleData, IntlProvider} from 'react-intl';

import {Provider} from 'react-redux';
import { createStore, combineReducers } from 'redux';

import {LOAD_CHARACTER_DATA_ACTION} from "./open-character";
import player from './model/Player';
import character from './model/Character';
import experiencePoints from './model/ExperiencePoints';
import personalDetails from './model/PersonalDetails';
import combatMovement from './model/CombatMovement';
import characterProfile from './model/CharacterProfile';
import weapons from "./model/Weapons";
import armour from './model/Armour';
import armourPoints from './model/ArmourPoints';
import skills from './model/Skills';

addLocaleData(pl);
addLocaleData(en);

const alertOptions = {
    position: 'top center',
    timeout: 2000,
    offset: '100px',
    transition: 'fade',
    type: 'success'
};

const characterData = (state = {}, action) => {
    if(action.type === LOAD_CHARACTER_DATA_ACTION) {
        return action.characterData;
    }
    return {
        player: player(state.player, action),
        character: character(state.character, action),
        experiencePoints: experiencePoints(state.experiencePoints, action),
        personalDetails: personalDetails(state.personalDetails, action),
        combatMovement: combatMovement(state.combatMovement, action),
        characterProfile: characterProfile(state.characterProfile, action),
        weapons: weapons(state.weapons, action),
        armour: armour(state.armour, action),
        armourPoints: armourPoints(state.armourPoints, action),
        skills: skills(state.skills, action)
    };
};

const store = createStore(combineReducers({characterData}));

export default class MainContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            locale: 'en',
            messages: TranslationsProvider.get()
        }
    }

    changeLocale(locale) {
        this.setState({...this.state, locale});
    }

    render() {
        return (
            <IntlProvider locale={this.state.locale} messages={this.state.messages[this.state.locale]}>
                <AlertProvider template={BasicAlertTemplate} {...alertOptions}>
                    <Provider store={store}>
                        <div className="container-fluid">
                            <Header changeLocale={locale => this.changeLocale(locale)}/>
                            <Route exact path='/' component={ModeSelector}/>
                            <Route exact path='/character' component={CharacterSheet}/>
                            <Route exact path='/character/open' component={OpenCharacter}/>
                        </div>
                    </Provider>
                </AlertProvider>
            </IntlProvider>
        );
    }
}