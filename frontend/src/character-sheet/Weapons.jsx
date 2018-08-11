import React from 'react';
import {FormattedMessage} from 'react-intl';
import './Weapons.css';
import AddRowButton from './AddRowButton';

export default function Weapons(props) {
    function handleChange(index, event) {
        props.handleChange(index, {name: event.target.name, value: event.target.value});
    }
    return (
        <table className="section-table">
            <thead>
            <tr>
                <th colSpan="7" className="header-font-size">
                    <FormattedMessage id="weapons" defaultMessage="Weapons"/>
                </th>
            </tr>
            </thead>
            <tbody>
            <tr className="borderless label-font-size">
                <td><FormattedMessage id="weapons.name" defaultMessage="Name"/></td>
                <td><FormattedMessage id="weapons.encurbance" defaultMessage="Enc"/></td>
                <td><FormattedMessage id="weapons.group" defaultMessage="Group"/></td>
                <td><FormattedMessage id="weapons.damage" defaultMessage="Damage"/></td>
                <td><FormattedMessage id="weapons.range" defaultMessage="Range"/></td>
                <td><FormattedMessage id="weapons.reload" defaultMessage="Reload"/></td>
                <td><FormattedMessage id="weapons.qualities" defaultMessage="Qualities"/></td>
            </tr>
            {
                props.data.map((weapon, index) => {
                    return (
                        <tr key={index}>
                            <td>
                                <input type="text" value={weapon.name} name="name" onChange={event => handleChange(index, event)}
                                       className="content-font-size"/>
                            </td>
                            <td>
                                <input type="text" value={weapon.encurbance} name="encurbance" onChange={event => handleChange(index, event)}
                                       className="content-font-size"/>
                            </td>
                            <td>
                                <input type="text" value={weapon.group} name="group" onChange={event => handleChange(index, event)}
                                       className="content-font-size"/>
                            </td>
                            <td>
                                <input type="text" value={weapon.damage} name="damage" onChange={event => handleChange(index, event)}
                                       className="content-font-size"/>
                            </td>
                            <td>
                                <input type="text" value={weapon.range} name="range" onChange={event => handleChange(index, event)}
                                       className="content-font-size"/>
                            </td>
                            <td>
                                <input type="text" value={weapon.reload} name="reload" onChange={event => handleChange(index, event)}
                                       className="content-font-size"/>
                            </td>
                            <td>
                                <input type="text" value={weapon.qualities} name="qualities" onChange={event => handleChange(index, event)}
                                       className="content-font-size"/>
                            </td>
                        </tr>
                    )
                })
            }
            <tr className="borderless">
                <td colSpan="7"><AddRowButton onClick={() => props.addWeaponRow()}/></td>
            </tr>
            </tbody>
        </table>
    );
}