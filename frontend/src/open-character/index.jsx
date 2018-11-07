import React, {Component} from 'react';
import {FormattedMessage} from 'react-intl';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

import { Base64 } from 'js-base64';

import './open-character.css';

export const LOAD_CHARACTER_DATA_ACTION = 'LOAD_CHARACTER_DATA';

class OpenCharacter extends Component {
    loadCharacterData = () => {
        let characterData = this.decodeCharacterData(this.state.unparsedCharacterData);
        if(characterData === undefined) {
            this.handleCharacterDataDecodeError();
        } else {
            this.props.loadCharacterData(characterData);
            this.props.history.push('/character');
        }
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
    }

    decodeCharacterData(unparsedCharacterData) {
        try {
            const decodedCharacterData = Base64.decode(unparsedCharacterData);
            return JSON.parse(decodedCharacterData);
        } catch(error) {
            return undefined;
        }
    }

    render() {
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

const mapDispatchToProps = (dispatch) => {
    return {
        loadCharacterData: (characterData) => dispatch({type: LOAD_CHARACTER_DATA_ACTION, characterData})
    };
};

OpenCharacter = connect(null, mapDispatchToProps)(OpenCharacter);
export default withRouter(OpenCharacter);