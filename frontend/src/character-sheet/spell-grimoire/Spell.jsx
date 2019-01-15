import React from 'react';
import {FormattedMessage} from 'react-intl';

export default function Spell(props) {
    return (
        <table>
            <tbody>
            <tr>
                <td colSpan="2">
                    <div>
                        <label className="label-font-size">
                            <FormattedMessage id="spell-name" defaultMessage="Spell name"/>:
                        </label>
                        <input type="text" value={props.data.name} name="name"
                               onChange={event => props.handleChange(event)}
                               className="content-font-size"/>
                    </div>
                </td>
            </tr>
            <tr>
                <td>
                    <div>
                        <label className="label-font-size">
                            <FormattedMessage id="casting-number" defaultMessage="Casting number"/>:
                        </label>
                        <input type="number" value={props.data.castingNumber} name="castingNumber"
                               onChange={event => props.handleChange(event)}
                               className="content-font-size"/>
                    </div>
                </td>
                <td>
                    <div>
                        <label className="label-font-size">
                            <FormattedMessage id="casting-time" defaultMessage="Casting time"/>:
                        </label>
                        <input type="number" value={props.data.castingTime} name="castingTime"
                               onChange={event => props.handleChange(event)}
                               className="content-font-size"/>
                    </div>
                </td>
            </tr>
            <tr>
                <td colSpan="2">
                    <div>
                        <label className="label-font-size">
                            <FormattedMessage id="ingredient" defaultMessage="Ingredient"/>:
                        </label>
                        <input type="text" value={props.data.ingredient} name="ingredient"
                               onChange={event => props.handleChange(event)}
                               className="content-font-size"/>
                    </div>
                </td>
            </tr>
            <tr>
                <td colSpan="2">
                    <div>
                        <label className="label-font-size">
                            <FormattedMessage id="description" defaultMessage="Description"/>:
                        </label>
                        <textarea className="label-font-size" onChange={event => props.handleChange(event)} value={props.data.description} name="description"/>
                    </div>
                </td>
            </tr>
            <tr>
                <td colSpan="2">
                    <div>
                    </div>
                </td>
            </tr>
            </tbody>
        </table>
    )
}

