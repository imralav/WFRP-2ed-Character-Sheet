import React, {Component} from 'react';
import {FormattedMessage} from 'react-intl';

import CharacterLoadValidator from './CharacterLoadValidator';
import CharacterSheet from '../character-sheet';

import './open-character.css';

export default class OpenCharacter extends Component {
    loadCharacterData = () => {
        let characterData = this.decodeCharacterData(this.state.unparsedCharacterData);
        if(characterData === undefined) {
            this.handleCharacterDataDecodeError();
        }
        const isDataValid = this.characterLoadValidator.isValid(characterData);
        let newState = {...this.state, isValid: isDataValid};
        if (isDataValid) {
            newState = {...newState, characterData};
        }
        this.setState(newState);
    };

    handleCharacterDataDecodeError() {
        this.setState({...this.state, isValid: false});
    }

    clearValidationError = () => {
        this.setState({...this.state, isValid: true});
    };

    handleCharacterDataChange = (event) => {
        this.setState({...this.state, unparsedCharacterData: event.target.value});
    };

    constructor(props) {
        super(props);
        this.state = {isValid: true};
        this.characterLoadValidator = props.characterLoadValidator || new CharacterLoadValidator();
    }

    decodeCharacterData(unparsedCharacterData) {
        try {
            let decodedCharacterData = atob(unparsedCharacterData);
            return JSON.parse(decodedCharacterData);
        } catch(error) {
            return undefined;
        }
    }

    render() {
        if(this.state.characterData) {
            return (
                <CharacterSheet characterData={this.state.characterData}/>
            );
        } else {
            const validationError = this.getValidationError();
            return (
                <div>
                    <div className="row">
                        <div className="col-12 offset-sm-2 col-sm-8">
                            <label className="label-font-size"><FormattedMessage id="paste-character-data" defaultMessage="Paste character data below"/></label>
                            {validationError}
                            <textarea id="character-data-input" className="content-font-size" onChange={this.handleCharacterDataChange} onFocus={this.clearValidationError}/>
                            <button className="btn btn-dark btn-sm content-font-size" onClick={this.loadCharacterData}>
                                <FormattedMessage id="open-pasted-character" defaultMessage="Open pasted character"/>
                            </button>
                        </div>
                    </div>
                </div>
            );
        }
    }

    getValidationError() {
        if (this.state.isValid) {
            return '';
        }
        return (
            <div className="text-danger">
                <FormattedMessage
                    id="error.corrupted.character.data"
                    defaultMessage="Provided character data is incorrect. Make sure to paste the exact same text as was provided by the application."
                />
            </div>
        )
    }
}