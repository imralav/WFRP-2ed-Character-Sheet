import React from 'react';
import './mode-selector.css';
import ModeSelectionTile from './mode-selection-tile';
import { FormattedMessage } from 'react-intl';

export default () => {
    return (
        <div className="row">
            <div className="col-12 col-sm col-md-5">
                <ModeSelectionTile
                    text={<FormattedMessage id="create-character" default="Create character"/>}
                    img="create-character.jpg"
                    link='/character/create'
                />
            </div>
            <div className="col-12 col-sm offset-md-2 col-md-5">
                <ModeSelectionTile
                    text={<FormattedMessage id="use-existing-character" default="Use existing character"/>}
                    img="edit-character.jpg"
                    link='/character/open'
                />
            </div>
        </div>
    );
}