import React from 'react';
import {FormattedMessage} from 'react-intl';

export default (props) => {
    return (
        <table>
            <thead>
            <tr>
                <th>
                    <FormattedMessage id="trappings" defaultMessage="Trappings"/>
                </th>
            </tr>
            </thead>
        </table>
    );
}