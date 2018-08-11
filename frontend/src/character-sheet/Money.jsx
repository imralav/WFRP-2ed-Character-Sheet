import React from 'react';
import {FormattedMessage} from 'react-intl';

export default (props) => {
    return (
        <table className="section-table">
            <thead>
            <tr>
                <th>
                    <FormattedMessage id="money" defaultMessage="Money"/>
                </th>
            </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <FormattedMessage id="gold-crowns" defaultMessage="Gold Crowns (gc)"/>:
                    </td>
                </tr>
                <tr>
                    <td>
                        <FormattedMessage id="silver-schillings" defaultMessage="Silver Schillings (s)"/>:
                    </td>
                </tr>
                <tr>
                    <td>
                        <FormattedMessage id="brass-pennies" defaultMessage="Brass Pennies (p)"/>:
                    </td>
                </tr>
            </tbody>
        </table>
    );
}