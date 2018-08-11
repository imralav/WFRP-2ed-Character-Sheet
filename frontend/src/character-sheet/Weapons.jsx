import React, {Component} from 'react';
import {FormattedMessage} from 'react-intl';
import './Weapons.css';
import AddRowButton from './AddRowButton';
import RemoveRowButton from './RemoveRowButton';

export default class Weapons extends Component {
    constructor(props) {
        super(props);
        this.state = {isDeleting: false};
    }

    handleChange(index, event) {
        this.props.handleChange(index, {name: event.target.name, value: event.target.value});
    }

    toggleDeletionState = () => {
       this.setState({isDeleting: !this.state.isDeleting});
    };

    attemptToDeleteRow(rowIndex) {
        if(this.state.isDeleting) {
            this.props.deleteWeapon(rowIndex);
        }
    }

    addWeaponRow() {
        this.stopDeleting();
        this.props.addWeaponRow();
    }

    stopDeleting() {
        this.setState({isDeleting: false});
    }

    render() {
        const shouldShowRemoveRowButton = this.props.data.length > 0;
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
                    this.props.data.map((weapon, index) => {
                        return (
                            <tr key={index} onClick={() => this.attemptToDeleteRow(index)} className={this.state.isDeleting ? 'clickable' : ''}>
                                <td>
                                    <input type="text" value={weapon.name} name="name" onChange={event => this.handleChange(index, event)}
                                           className="content-font-size"/>
                                </td>
                                <td>
                                    <input type="text" value={weapon.encurbance} name="encurbance" onChange={event => this.handleChange(index, event)}
                                           className="content-font-size"/>
                                </td>
                                <td>
                                    <input type="text" value={weapon.group} name="group" onChange={event => this.handleChange(index, event)}
                                           className="content-font-size"/>
                                </td>
                                <td>
                                    <input type="text" value={weapon.damage} name="damage" onChange={event => this.handleChange(index, event)}
                                           className="content-font-size"/>
                                </td>
                                <td>
                                    <input type="text" value={weapon.range} name="range" onChange={event => this.handleChange(index, event)}
                                           className="content-font-size"/>
                                </td>
                                <td>
                                    <input type="text" value={weapon.reload} name="reload" onChange={event => this.handleChange(index, event)}
                                           className="content-font-size"/>
                                </td>
                                <td>
                                    <input type="text" value={weapon.qualities} name="qualities" onChange={event => this.handleChange(index, event)}
                                           className="content-font-size"/>
                                </td>
                            </tr>
                        )
                    })
                }
                <tr className="borderless">
                    <td colSpan="7">
                        <AddRowButton onClick={() => this.addWeaponRow()}/>
                        { shouldShowRemoveRowButton ? (<RemoveRowButton isActivated={this.state.isDeleting} onClick={this.toggleDeletionState}/>) : ''}
                    </td>
                </tr>
                </tbody>
            </table>
        );
    }
}