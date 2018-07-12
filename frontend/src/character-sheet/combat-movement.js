import React from 'react';
import {FormattedMessage} from 'react-intl';

export default (props) => {
    return (
        <table>
            <thead>
            <tr>
                <th colSpan="3">
                    <FormattedMessage id="combat-movement" defaultMessage="Combat Movement"/>
                </th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>
                    <FormattedMessage id="move-disengage" defaultMessage="Move/Disengage"/>:
                </td>
                <td>
                    <FormattedMessage id="charge-attack" defaultMessage="Charge Attack"/>:
                </td>
                <td>
                    <FormattedMessage id="run" defaultMessage="Run"/>:
                </td>
            </tr>
            </tbody>
        </table>
    );
}