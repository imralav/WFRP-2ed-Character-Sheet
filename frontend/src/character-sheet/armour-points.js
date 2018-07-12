import React from 'react';
import {FormattedMessage} from 'react-intl';

export default (props) => {
    return (
        <table>
            <thead>
            <tr>
                <th>
                    <FormattedMessage id="armour-points" defaultMessage="Armour Points"/>
                </th>
            </tr>
            </thead>
        </table>
    );
}