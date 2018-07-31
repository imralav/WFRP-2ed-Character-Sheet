import React from 'react';
import {FormattedMessage} from 'react-intl';

export default function CombatMovement(props) {
    const handleChange = event => {
        const changeData = {name: event.target.name, value: event.target.value};
        props.onChange(changeData);
    };
    return (
        <table>
            <thead>
            <tr>
                <th colSpan="3" className="header-font-size">
                    <FormattedMessage id="combat-movement" defaultMessage="Combat Movement"/>
                </th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td className="w-33p">
                    <div>
                        <label className="label-font-size">
                            <FormattedMessage id="move-disengage" defaultMessage="Move/Disengage"/>:
                        </label>
                        <input type="number" value={props.data.moveDisengage} name="moveDisengage" onChange={event => handleChange(event)}
                               className="content-font-size"/>
                    </div>
                </td>
                <td className="w-33p">
                    <div>
                        <label className="label-font-size">
                            <FormattedMessage id="charge-attack" defaultMessage="Charge Attack"/>:
                        </label>
                        <input type="number" value={props.data.chargeAttack} name="chargeAttack" onChange={event => handleChange(event)}
                               className="content-font-size"/>
                    </div>
                </td>
                <td className="w-33p">
                    <div>
                        <label className="label-font-size">
                            <FormattedMessage id="run" defaultMessage="Run"/>:
                        </label>
                        <input type="number" value={props.data.run} name="run" onChange={event => handleChange(event)} className="content-font-size"/>
                    </div>
                </td>
            </tr>
            </tbody>
        </table>
    );
}