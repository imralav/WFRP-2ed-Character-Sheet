import React from 'react';
import {FormattedMessage} from 'react-intl';

export default function BasicArmourTable(props) {
    function handleChange(event) {

    }
    return (
        <table>
            <thead>
            <tr>
                <th className="label-font-size" colSpan="2">
                    <FormattedMessage id="basic-armour" defaultMessage="Basic Armour"/>
                </th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>
                    <div>
                        <label className="label-font-size">
                            <FormattedMessage id="armour-type" defaultMessage="Armour Type"/>:
                        </label>
                        <input type="text" value={props.data.armourType} name="armourType" onChange={event => handleChange(event)} className="content-font-size"/>
                    </div>
                </td>
                <td>
                    <div>
                        <label className="label-font-size">
                            <FormattedMessage id="armour-points" defaultMessage="Armour Points"/>:
                        </label>
                        <input type="text" value={props.data.armourPoints} name="armourPoints" onChange={event => handleChange(event)} className="content-font-size"/>
                    </div>
                </td>
            </tr>
            </tbody>
        </table>
    );
}