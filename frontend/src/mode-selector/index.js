import React from 'react';
import ModeSelectorTile from './mode-selection-tile';
import { FormattedMessage } from 'react-intl';

export default () => {
    return (
        <div className="row">
            <div className="col-12 col-sm col-md-5">
                <ModeSelectorTile
                    text={<FormattedMessage id="create-character" defaultMessage="Create character"/>}
                    img="create-character.png"
                    link='/character/create'
                />
            </div>
            <div className="col-12 col-sm offset-md-2 col-md-5 text-right">
                <ModeSelectorTile
                    text={<FormattedMessage id="use-existing-character" defaultMessage="Use existing character"/>}
                    img="edit-character.png"
                    link='/character/open'
                />
            </div>
        </div>
    );
}