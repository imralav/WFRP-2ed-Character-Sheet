import React, {Component} from 'react';
import {FormattedMessage} from 'react-intl';

import Player from './Player';
import Character from './Character';
import ExperiencePoints from './ExperiencePoints';
import PersonalDetails from './PersonalDetails';
import CharacterProfile from './CharacterProfile';
import CombatMovement from './CombatMovement';
import Weapons from './Weapons';
import Armour from './Armour';
import ArmourPoints from './ArmourPoints';
import Skills from './Skills';
import Talents from './Talents';
import Trappings from './Trappings';
import Money from './Money';

import Clipboard from '../utils/clipboard';
import ObjectPaths from '../utils/object-paths';

import './character-sheet.css';
import wfrpLogo from './wfrp-logo.png';

export default class CharacterSheet extends Component {
    constructor(props) {
        super(props);
        const emptyCharacterData = {
            player: {}
        };
        this.state = {
            characterData: props.characterData || emptyCharacterData
        };
    }

    copyCharacterJsonToClipboard() {
        const characterDataJson = JSON.stringify(this.state.characterData);
        let encodedCharacterData = btoa(characterDataJson);
        Clipboard.copyTextToClipboard(encodedCharacterData);
    };

    handleInputChange(changeData, objectPath) {
        let propertyPath = `${objectPath}.${changeData.name}`;
        const newState = {...this.state};
        ObjectPaths.setOnPath(newState, propertyPath, changeData.value);
        this.setState(newState);
    }

    render() {
        return (
            <div className="row character-sheet">
                <div className="col-12" id="character-json">
                    <button className="btn btn-dark btn-sm content-font-size" onClick={() => this.copyCharacterJsonToClipboard()}>
                        <FormattedMessage id="copy-character-data-to-clipboard" defaultMessage="Copy character data to clipboard for later use"/>
                    </button>
                </div>
                <div className="col-12" id="wfrp-logo-container">
                    <img src={wfrpLogo} alt="WFRP Logo"/>
                </div>
                <div className="col-12" id="player">
                    <Player data={this.state.characterData.player} onChange={changeData => this.handleInputChange(changeData, 'characterData.player')}/>
                </div>
                <div className="col-12" id="character">
                    <Character/>
                </div>
                <div className="col-12" id="experience-points">
                    <ExperiencePoints/>
                </div>
                <div className="col-12" id="personal-details">
                    <PersonalDetails/>
                </div>
                <div className="col-12" id="character-profile">
                    <CharacterProfile/>
                </div>
                <div className="col-12" id="combat-movement">
                    <CombatMovement/>
                </div>
                <div className="col-12" id="weapons">
                    <Weapons/>
                </div>
                <div className="col-12" id="armour">
                    <Armour/>
                </div>
                <div className="col-12" id="armour-points">
                    <ArmourPoints/>
                </div>
                <div className="col-12" id="skills">
                    <Skills/>
                </div>
                <div className="col-12" id="talents">
                    <Talents/>
                </div>
                <div className="col-12" id="trappings">
                    <Trappings/>
                </div>
                <div className="col-12" id="money">
                    <Money/>
                </div>
            </div>
        );
    }
}