import React from 'react';
import {FormattedMessage} from 'react-intl';

export default (props) => {
    return (
        <table>
            <thead>
            <tr>
                <th>
                    <FormattedMessage id="skills" defaultMessage="Skills"/>
                </th>
            </tr>
            </thead>
        </table>
    );
}