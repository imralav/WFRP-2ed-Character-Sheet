import React, {Component} from 'react';
import {FormattedMessage} from 'react-intl';
import {withAlert} from 'react-alert'

import {connect} from 'react-redux';

import Player from './Player';
import Character from './Character';
import ExperiencePoints from './ExperiencePoints';
import PersonalDetails from './PersonalDetails';
import CharacterProfile from './character-profile/index';
import CombatMovement from './CombatMovement';
import Weapons from './Weapons';
import Armour from './armour/Armour';
import ArmourPoints from './ArmourPoints';
import Skills from './Skills';
import Talents from './Talents';
import Trappings from './Trappings';
import Money from './Money';

import Clipboard from '../utils/Clipboard';

import './character-sheet.css';
import wfrpLogo from './wfrp-logo.png';

import lodash from 'lodash';
import {Base64} from 'js-base64';

import {UPDATE_PLAYER_ACTION} from "../model/Player";
import {UPDATE_CHARACTER_ACTION} from "../model/Character";
import {UPDATE_EXPERIENCE_POINTS_ACTION} from "../model/ExperiencePoints";
import {UPDATE_PERSONAL_DETAILS_ACTION} from "../model/PersonalDetails";
import {UPDATE_COMBAT_MOVEMENT_ACTION} from "../model/CombatMovement";
import {UPDATE_CHARACTER_PROFILE_ACTION} from "../model/CharacterProfile";
import {ADD_WEAPON_ROW_ACTION, DELETE_WEAPON_ROW_ACTION, UPDATE_WEAPON_ROW_ACTION} from "../model/Weapons";
import {ADD_ARMOUR_ROW_ACTION, DELETE_ARMOUR_ROW_ACTION, UPDATE_ARMOUR_ROW_ACTION, UPDATE_BASIC_ARMOUR_ACTION} from "../model/Armour";
import {UPDATE_ARMOUR_POINTS_ACTION} from "../model/ArmourPoints";
import {ADVANCE_BASIC_SKILL_ACTION, ADVANCE_ADVANCED_SKILL_ACTION} from "../model/Skills";

class CharacterSheet extends Component {
    constructor(props) {
        super(props);
        this.clipboard = props.clipboard || Clipboard;
    }

    copyCharacterJsonToClipboard() {
        const characterData = lodash.cloneDeep(this.props.characterData);
        //characterData.clean();
        const characterDataJson = JSON.stringify(characterData);
        let encodedCharacterData = Base64.encode(characterDataJson);
        this.clipboard.copyTextToClipboard(encodedCharacterData);
        if (this.props.alert) {
            this.props.alert.show(<FormattedMessage id="character.data.copied" defaultMessage="Character data copied to clipboard"/>)
        }
    };

    render() {
        return (
            <div className="row character-sheet">
                <div className="col-12" id="character-json">
                    <button className="btn btn-dark btn-sm label-font-size" onClick={() => this.copyCharacterJsonToClipboard()}>
                        <FormattedMessage id="copy-character-data-to-clipboard" defaultMessage="Copy character data to clipboard for later use"/>
                    </button>
                </div>
                <div className="col-12" id="wfrp-logo-container">
                    <img src={wfrpLogo} alt="WFRP Logo"/>
                </div>
                <div className="col-12" id="player">
                    <Player data={this.props.characterData.player} onChange={changeData => this.props.updatePlayer(changeData)}/>
                </div>
                <div className="col-12" id="character">
                    <Character data={this.props.characterData.character} onChange={changeData => this.props.updateCharacter(changeData)}/>
                </div>
                <div className="col-12" id="experience-points">
                    <ExperiencePoints data={this.props.characterData.experiencePoints} onChange={changeData => this.props.updateExperiencePoints(changeData)}/>
                </div>
                <div className="col-12" id="personal-details">
                    <PersonalDetails data={this.props.characterData.personalDetails}
                                     onChange={changeData => this.props.updatePersonalDetails(changeData)}/>
                </div>
                <div className="col-12" id="character-profile">
                    <CharacterProfile stats={this.props.characterData.characterProfile}
                                      onChange={(changeData, propertyPathPrefix) => this.props.updateCharacterProfile(changeData, propertyPathPrefix)}/>
                </div>
                <div className="col-12" id="combat-movement">
                    <CombatMovement data={this.props.characterData.combatMovement} onChange={changeData => this.props.updateCombatMovement(changeData)}/>
                </div>
                <div className="col-12" id="weapons">
                    <Weapons data={this.props.characterData.weapons}
                             addWeaponRow={this.props.addWeaponRow}
                             deleteWeapon={this.props.deleteWeaponRow}
                             handleChange={this.props.updateWeaponRow}
                    />
                </div>
                <div className="col-12" id="armour">
                    <Armour data={this.props.characterData.armour}
                            addArmourRow={this.props.addArmourRow}
                            deleteArmourRow={this.props.deleteArmourRow}
                            updateArmourRow={this.props.updateArmourRow}
                            updateBasicArmour={this.props.updateBasicArmour}
                    />
                </div>
                <div className="col-12" id="armour-points">
                    <ArmourPoints data={this.props.characterData.armourPoints}
                                  handleChange={changeData => this.props.updateArmourPoints(changeData)}
                    />
                </div>
                <div className="col-12" id="skills">
                    <Skills data={this.props.characterData.skills}
                            advanceBasicSkill={this.props.advanceBasicSkill}
                            advanceAdvancedSkill={this.props.advanceAdvancedSkill}
                    />
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

const mapStateToProps = (state) => {
    return {
        characterData: state.characterData
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        updatePlayer: (changeData) => dispatch({type: UPDATE_PLAYER_ACTION, propertyName: changeData.name, value: changeData.value}),
        updateCharacter: (changeData) => dispatch({type: UPDATE_CHARACTER_ACTION, propertyName: changeData.name, value: changeData.value}),
        updateExperiencePoints: (changeData) => dispatch({type: UPDATE_EXPERIENCE_POINTS_ACTION, propertyName: changeData.name, value: changeData.value}),
        updatePersonalDetails: (changeData) => dispatch({type: UPDATE_PERSONAL_DETAILS_ACTION, propertyName: changeData.name, value: changeData.value}),
        updateCombatMovement: (changeData) => dispatch({type: UPDATE_COMBAT_MOVEMENT_ACTION, propertyName: changeData.name, value: changeData.value}),
        updateCharacterProfile: (changeData, propertyPathPrefix) => dispatch({
            type: UPDATE_CHARACTER_PROFILE_ACTION,
            propertyName: `${propertyPathPrefix}.${changeData.name}`,
            value: changeData.value
        }),
        addWeaponRow: () => dispatch({type: ADD_WEAPON_ROW_ACTION}),
        deleteWeaponRow: (index) => dispatch({type: DELETE_WEAPON_ROW_ACTION, index}),
        updateWeaponRow: (index, changeData) => dispatch({type: UPDATE_WEAPON_ROW_ACTION, index, propertyName: changeData.name, value: changeData.value}),
        addArmourRow: () => dispatch({type: ADD_ARMOUR_ROW_ACTION}),
        deleteArmourRow: (index) => dispatch({type: DELETE_ARMOUR_ROW_ACTION, index}),
        updateArmourRow: (index, changeData) => dispatch({type: UPDATE_ARMOUR_ROW_ACTION, index, propertyName: changeData.name, value: changeData.value}),
        updateBasicArmour: (changeData) => dispatch({type: UPDATE_BASIC_ARMOUR_ACTION, propertyName: changeData.name, value: changeData.value}),
        updateArmourPoints: (changeData) => dispatch({type: UPDATE_ARMOUR_POINTS_ACTION, propertyName: changeData.name, value: changeData.value}),
        advanceBasicSkill: (index, level) => dispatch({type: ADVANCE_BASIC_SKILL_ACTION, index, level}),
        advanceAdvancedSkill: (index, level) => dispatch({type: ADVANCE_ADVANCED_SKILL_ACTION, index, level})
    };
};

CharacterSheet = connect(mapStateToProps, mapDispatchToProps)(CharacterSheet);

export default withAlert(CharacterSheet);