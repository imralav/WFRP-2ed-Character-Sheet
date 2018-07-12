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
                    <div>
                        <label className>
                            <FormattedMessage id="name" defaultMessage="Name"/>:
                        </label>
                        <input type="text"/>
                    </div>
                </td>
                <td className="w-40p">
                    <div>
                        <label>
                            <FormattedMessage id="game-master" defaultMessage="Game Master"/>:
                        </label>
                        <input type="text"/>
                    </div>
                </td>
            </tr>
            <tr>
                <td>
                    <div>
                        <label>
                            <FormattedMessage id="campaign" defaultMessage="Campaign"/>:
                        </label>
                        <input type="text"/>
                    </div>
                </td>
                <td>
                    <div>
                        <label>
                            <FormattedMessage id="campaign-year" defaultMessage="Campaign Year"/>:
                        </label>
                        <input type="text"/>
                    </div>
                </td>
            </tr>
            </tbody>
        </table>
    );
}