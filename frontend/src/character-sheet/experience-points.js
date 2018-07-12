import React from 'react';
import {FormattedMessage} from 'react-intl';

export default (props) => {
    return (
        <table>
            <thead>
            <tr>
                <th colSpan="2">
                    <FormattedMessage id="experience-points" defaultMessage="Experience Points"/>
                </th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>
                    <FormattedMessage id="current" defaultMessage="Current"/>:
                </td>
                <td>
                    <FormattedMessage id="total" defaultMessage="Total"/>:
                </td>
            </tr>
            </tbody>
        </table>
    );
}