import React from 'react';
import './mode-selector.css';
import ModeSelectionTile from './mode-selection-tile';
import { FormattedMessage } from 'react-intl';

export default () => {
    return (
        <div className="row row-eq-height">
            <div className="offset-xs-2 col-xs-8 offset-sm-1 col-sm-5">
                <ModeSelectionTile
                    text={<FormattedMessage id="create-character" default="Create character"/>}
                    img="create-character.jpg"
                    link='/character/create'
                />
            </div>
            <div className="offset-xs-2 col-xs-8 col-sm-5">
                <ModeSelectionTile
                    text={<FormattedMessage id="use-existing-character" default="Use existing character"/>}
                    img="edit-character.jpg"
                    link='/character/open'
                />
            </div>
        </div>
    );
}