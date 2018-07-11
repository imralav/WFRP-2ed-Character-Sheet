import React from 'react';
import {FormattedMessage} from 'react-intl';
import './character-sheet.css';

export default () => {
    return (
        <div className="row character-sheet">
            <div className="col-12" id="wfrp-logo-container">
                <img src="/wfrp-logo.png" alt="WFRP Logo"/>
            </div>
            <div className="col-12" id="player">
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
            </div>
            <div className="col-12" id="character">
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
            </div>
            <div className="col-12" id="experience-points">
                <table>
                    <thead>
                    <tr>
                        <th colspan="2">
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
            </div>
            <div className="col-12" id="personal-details">
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
            </div>
            <div className="col-12" id="character-profile">
            </div>
            <div className="col-12" id="combat-movement">
            </div>
            <div className="col-12" id="weapons">
            </div>
            <div className="col-12" id="armour">
            </div>
            <div className="col-12" id="armour-points">
            </div>
            <div className="col-12" id="skills">
            </div>
            <div className="col-12" id="talents">
            </div>
            <div className="col-12" id="trappings">
            </div>
            <div className="col-12" id="money">
            </div>
        </div>
    );
}