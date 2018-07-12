import React from 'react';

import Player from './player';
import Character from './character';
import ExperiencePoints from './experience-points';
import PersonalDetails from './personal-details';
import CharacterProfile from './character-profile';
import CombatMovement from './combat-movement';
import Weapons from './weapons';
import Armour from './armour';
import ArmourPoints from './armour-points';
import Skills from './skills';
import Talents from './talents';
import Trappings from './trappings';
import Money from './money';

import './character-sheet.css';

export default () => {
    return (
        <div className="row character-sheet">
            <div className="col-12" id="wfrp-logo-container">
                <img src="/wfrp-logo.png" alt="WFRP Logo"/>
            </div>
            <div className="col-12" id="player">
                <Player/>
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