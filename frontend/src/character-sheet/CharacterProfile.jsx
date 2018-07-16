import React from 'react';
import {FormattedMessage} from 'react-intl';

export default (props) => {
    return (
        <table>
            <thead>
            <tr>
                <th>
                    <FormattedMessage id="character-profile" defaultMessage="Character Profile"/>
                </th>
            </tr>
            </thead>
        </table>
    );
}