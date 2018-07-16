import React from 'react';
import ModeSelectorTile from './mode-selection-tile';
import { FormattedMessage } from 'react-intl';

import CreateCharacterImg from './create-character.png';
import EditCharacterImg from './edit-character.png';

export default () => {
    return (
        <div className="row">
            <div className="col-12 col-sm col-md-5">
                <ModeSelectorTile
                    text={<FormattedMessage id="create-character" defaultMessage="Create character"/>}
                    img={CreateCharacterImg}
                    link='/character'
                />
            </div>
            <div className="col-12 col-sm offset-md-2 col-md-5 text-right">
                <ModeSelectorTile
                    text={<FormattedMessage id="use-existing-character" defaultMessage="Use existing character"/>}
                    img={EditCharacterImg}
                    link='/character/open'
                />
            </div>
        </div>
    );
}