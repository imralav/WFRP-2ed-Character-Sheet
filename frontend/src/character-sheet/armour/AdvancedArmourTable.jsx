import React, {Fragment, Component} from 'react';
import {FormattedMessage} from 'react-intl';
import AddRowButton from '../buttons/AddRowButton';
import RemoveRowButton from '../buttons/RemoveRowButton';

export default class AdvancedArmourTable extends Component {
    constructor(props) {
        super(props);
        this.state = {isDeleting: false};
    }

    handleChange(index, event) {
        this.props.updateRow(index, {name: event.target.name, value: event.target.value});
    }

    toggleDeletionState = () => {
        this.setState({isDeleting: !this.state.isDeleting});
    };

    attemptToDeleteRow(rowIndex) {
        if(this.state.isDeleting) {
            this.props.deleteRow(rowIndex);
        }
    }

    addArmourRow() {
        this.stopDeleting();
        this.props.addRow();
    }

    stopDeleting() {
        this.setState({isDeleting: false});
    }

    render() {
        const shouldShowRemoveRowButton = this.props.data.length > 0;
        return (
            <Fragment>
                <tr className="armour-section-header-row">
                    <td className="label-font-size" colSpan="4">
                        <FormattedMessage id="advanced-armour" defaultMessage="Advanced Armour"/>
                    </td>
                </tr>
                <tr className="advanced-armour-header-row">
                    <td className="label-font-size w-40p">
                        <FormattedMessage id="armour-type" defaultMessage="Armour Type"/>
                    </td>
                    <td className="label-font-size w-10p">
                        <FormattedMessage id="enc" defaultMessage="Enc"/>
                    </td>
                    <td className="label-font-size w-40p">
                        <FormattedMessage id="locations-covered" defaultMessage="Locations Covered"/>
                    </td>
                    <td className="label-font-size w-10p">
                        <FormattedMessage id="ap" defaultMessage="AP"/>
                    </td>
                </tr>
                {
                    this.props.data.map((armour, index) => {
                        return (
                            <tr key={index} onClick={() => this.attemptToDeleteRow(index)} className={`advanced-armour-row ${this.state.isDeleting ? 'clickable' : ''}`}>
                                <td className="w-40p">
                                    <input type="text" value={armour.type} name="type" onChange={event => this.handleChange(index, event)}
                                           className="content-font-size"/>
                                </td>
                                <td className="w-10p">
                                    <input type="text" value={armour.encurbance} name="encurbance" onChange={event => this.handleChange(index, event)}
                                           className="content-font-size"/>
                                </td>
                                <td className="w-40p">
                                    <input type="text" value={armour.locationsCovered} name="locationsCovered"
                                           onChange={event => this.handleChange(index, event)}
                                           className="content-font-size"/>
                                </td>
                                <td className="w-10p">
                                    <input type="text" value={armour.armourPoints} name="damage" onChange={event => this.handleChange(index, event)}
                                           className="content-font-size"/>
                                </td>
                            </tr>
                        )
                    })
                }
                <tr className="borderless">
                    <td colSpan="4">
                        <AddRowButton onClick={() => this.addArmourRow()}/>
                        {shouldShowRemoveRowButton ? (<RemoveRowButton isActivated={this.state.isDeleting} onClick={this.toggleDeletionState}/>) : ''}
                    </td>
                </tr>
            </Fragment>
        );
    }
}