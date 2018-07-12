import React from 'react';
import {FormattedMessage} from 'react-intl';

export default (props) => {
    return (
        <table>
            <thead>
            <tr>
                <th colSpan="2">
                    <FormattedMessage id="player" defaultMessage="Player"/>
                </th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>
                    <FormattedMessage id="name" defaultMessage="Name"/>:
                </td>
                <td>
                    <FormattedMessage id="game-master" defaultMessage="Game Master"/>:
                </td>
            </tr>
            <tr>
                <td>
                    <FormattedMessage id="campaign" defaultMessage="Campaign"/>:
                </td>
                <td>
                    <FormattedMessage id="campaign-year" defaultMessage="Campaign Year"/>:
                </td>
            </tr>
            </tbody>
        </table>
    );
}