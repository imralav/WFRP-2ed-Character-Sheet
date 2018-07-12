import React from 'react';
import {FormattedMessage} from 'react-intl';

export default (props) => {
    return (
        <table>
            <thead>
            <tr>
                <th>
                    <FormattedMessage id="character" defaultMessage="Character"/>
                </th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>
                    <FormattedMessage id="name" defaultMessage="Name"/>:
                </td>
            </tr>
            <tr>
                <td>
                    <FormattedMessage id="race" defaultMessage="Race"/>:
                </td>
            </tr>
            <tr>
                <td>
                    <FormattedMessage id="current-career" defaultMessage="Current Career"/>:
                </td>
            </tr>
            <tr>
                <td>
                    <FormattedMessage id="previous-careers" defaultMessage="Previous Careers"/>:
                </td>
            </tr>
            </tbody>
        </table>
    );
}