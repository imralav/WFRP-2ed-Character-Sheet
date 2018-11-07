import React, {Fragment} from 'react';
import {FormattedMessage} from 'react-intl';

export default function BasicArmourTable(props) {
    function handleChange(event) {
        props.updateBasicArmour({name: event.target.name, value: event.target.value});
    }
    return (
        <Fragment>
            <tr className="armour-section-header-row">
                <td className="label-font-size" colSpan="4">
                    <FormattedMessage id="basic-armour" defaultMessage="Basic Armour"/>
                </td>
            </tr>
            <tr className="basic-armour-row">
                <td colSpan="2">
                    <div>
                        <label className="label-font-size">
                            <FormattedMessage id="armour-type" defaultMessage="Armour Type"/>:
                        </label>
                        <input type="text" value={props.data.type} name="type" onChange={event => handleChange(event)}
                               className="content-font-size"/>
                    </div>
                </td>
                <td colSpan="2">
                    <div>
                        <label className="label-font-size">
                            <FormattedMessage id="armour-points" defaultMessage="Armour Points"/>:
                        </label>
                        <input type="text" value={props.data.points} name="points" onChange={event => handleChange(event)}
                               className="content-font-size"/>
                    </div>
                </td>
            </tr>
        </Fragment>
    );
}