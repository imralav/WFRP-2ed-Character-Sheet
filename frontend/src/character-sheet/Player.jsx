import React from 'react';
import {FormattedMessage} from 'react-intl';

export default function Player(props) {
    const handleChange = event => {
       const changeData = {name: event.target.name, value: event.target.value};
       props.onChange(changeData);
    };
    return (
        <table>
            <thead>
            <tr>
                <th colSpan="2" className="header-font-size">
                    <FormattedMessage id="player" defaultMessage="Player"/>
                </th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>
                    <div>
                        <label className="label-font-size">
                            <FormattedMessage id="name" defaultMessage="Name"/>:
                        </label>
                        <input type="text" value={props.data.name} name="name" onChange={event => handleChange(event)} className="content-font-size"/>
                    </div>
                </td>
                <td className="w-40p">
                    <div>
                        <label className="label-font-size">
                            <FormattedMessage id="game-master" defaultMessage="Game Master"/>:
                        </label>
                        <input type="text" value={props.data.gameMaster} name="gameMaster" onChange={event => handleChange(event)} className="content-font-size"/>
                    </div>
                </td>
            </tr>
            <tr>
                <td>
                    <div>
                        <label className="label-font-size">
                            <FormattedMessage id="campaign" defaultMessage="Campaign"/>:
                        </label>
                        <input type="text" value={props.data.campaign} name="campaign" onChange={event => handleChange(event)} className="content-font-size"/>
                    </div>
                </td>
                <td>
                    <div>
                        <label className="label-font-size">
                            <FormattedMessage id="campaign-year" defaultMessage="Campaign Year"/>:
                        </label>
                        <input type="text" value={props.data.campaignYear} name="campaignYear" onChange={event => handleChange(event)} className="content-font-size"/>
                    </div>
                </td>
            </tr>
            </tbody>
        </table>
    );
}