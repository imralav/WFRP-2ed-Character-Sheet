import React from 'react';
import {FormattedMessage} from 'react-intl';

export default (props) => {
    const handleChange = event => {
       const changeData = {name: event.target.name, value: event.target.value};
       props.onChange(changeData);
    };
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
                        <input type="text" value={props.data.name} name="name" onChange={event => handleChange(event)}/>
                    </div>
                </td>
                <td className="w-40p">
                    <div>
                        <label>
                            <FormattedMessage id="game-master" defaultMessage="Game Master"/>:
                        </label>
                        <input type="text" value={props.data.gameMaster} name="gameMaster" onChange={event => handleChange(event)}/>
                    </div>
                </td>
            </tr>
            <tr>
                <td>
                    <div>
                        <label>
                            <FormattedMessage id="campaign" defaultMessage="Campaign"/>:
                        </label>
                        <input type="text" value={props.data.campaign} name="campaign" onChange={event => handleChange(event)}/>
                    </div>
                </td>
                <td>
                    <div>
                        <label>
                            <FormattedMessage id="campaign-year" defaultMessage="Campaign Year"/>:
                        </label>
                        <input type="text" value={props.data.campaignYear} name="campaignYear" onChange={event => handleChange(event)}/>
                    </div>
                </td>
            </tr>
            </tbody>
        </table>
    );
}