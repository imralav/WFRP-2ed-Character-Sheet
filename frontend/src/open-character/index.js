import React, {Component} from 'react';
import { FormattedMessage } from 'react-intl';

import CharacterSheet from '../character-sheet';

import './open-character.css';

export default class OpenCharacter extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    handleCharacterDataChange(event) {
        this.setState({...this.state, unparsedCharacterData: event.target.value});
    }

    loadCharacterData() {
        //TODO: add validation
        let decodedCharacterData = atob(this.state.unparsedCharacterData);
        let characterData = JSON.parse(decodedCharacterData);
        this.setState({...this.state, characterData});
    }

    render() {
        if(this.state.characterData) {
            return (
                <CharacterSheet characterData={this.state.characterData}/>
            );
        } else {
            return (
                <div>
                    <div className="row">
                        <div className="col-12 offset-sm-2 col-sm-8">
                            <label className="label-font-size"><FormattedMessage id="paste-character-data" defaultMessage="Paste character data below"/></label>
                            <textarea id="character-data-input" className="content-font-size" onChange={event => this.handleCharacterDataChange(event)}/>
                            <button className="btn btn-dark btn-sm content-font-size" onClick={() => this.loadCharacterData()}>
                                <FormattedMessage id="open-pasted-character" defaultMessage="Open pasted character"/>
                            </button>
                        </div>
                    </div>
                </div>
            );
        }
    }
}