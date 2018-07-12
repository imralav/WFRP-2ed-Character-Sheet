import React from 'react';
import {FormattedMessage} from 'react-intl';

export default (props) => {
    return (
        <table>
            <thead>
            <tr>
                <th colSpan="2">
                    <FormattedMessage id="personal-details" defaultMessage="Personal Details"/>
                </th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>
                    <FormattedMessage id="age" defaultMessage="Age"/>:
                </td>
                <td>
                    <FormattedMessage id="gender" defaultMessage="Gender"/>:
                </td>
            </tr>
            <tr>
                <td>
                    <FormattedMessage id="eye-color" defaultMessage="Eye Color"/>:
                </td>
                <td>
                    <FormattedMessage id="weight" defaultMessage="Weight"/>:
                </td>
            </tr>
            <tr>
                <td>
                    <FormattedMessage id="hair-color" defaultMessage="Hair Color"/>:
                </td>
                <td>
                    <FormattedMessage id="height" defaultMessage="Height"/>:
                </td>
            </tr>
            <tr>
                <td>
                    <FormattedMessage id="star-sign" defaultMessage="Star Sign"/>:
                </td>
                <td>
                    <FormattedMessage id="number-of-siblings" defaultMessage="Number of Siblings"/>:
                </td>
            </tr>
            <tr>
                <td colSpan="2">
                    <FormattedMessage id="birthplace" defaultMessage="Birthplace"/>:
                </td>
            </tr>
            <tr>
                <td colSpan="2">
                    <FormattedMessage id="distinguishing-marks" defaultMessage="Distinguishing Marks"/>:
                </td>
            </tr>
            </tbody>
        </table>
    );
}