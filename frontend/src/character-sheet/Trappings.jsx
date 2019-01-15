import React, {Component} from 'react';
import {FormattedMessage} from 'react-intl';
import './Trappings.css';
import AddRowButton from './buttons/AddRowButton';
import RemoveRowButton from './buttons/RemoveRowButton';

export default class Trappings extends Component {
    constructor(props) {
        super(props);
        this.state = {isDeleting: false};
    }

    toggleDeletionState = () => {
        this.setState({isDeleting: !this.state.isDeleting});
    };

    attemptToDeleteRow(rowIndex) {
        if(this.state.isDeleting) {
            this.props.deleteTrapping(rowIndex);
        }
    }

    addTrapping() {
        this.stopDeleting();
        this.props.addTrapping();
    }

    stopDeleting() {
        this.setState({isDeleting: false});
    }

    handleChange = (index, event) => {
        this.props.updateTrapping(index, {name: event.target.name, value: event.target.value});
    };

    render() {
        const shouldShowRemoveRowButton = this.props.data.length > 0;
        return (
            <table className="section-table">
                <thead>
                <tr>
                    <th colSpan="3">
                        <FormattedMessage id="trappings" defaultMessage="Trappings"/>
                    </th>
                </tr>
                </thead>
                <tbody>
                <tr className="trappings-header">
                    <td className="w-40p">
                        <FormattedMessage id="item" defaultMessage="Item"/>
                    </td>
                    <td className="w-5p">
                        <FormattedMessage id="encurbance" defaultMessage="Enc"/>
                    </td>
                    <td className="w-50p">
                        <FormattedMessage id="description" defaultMessage="Description"/>
                    </td>
                </tr>
                {
                    this.props.data.map((trapping, index) => {
                        return (
                            <tr key={index} onClick={() => this.attemptToDeleteRow(index)} className={`trappings-row ${this.state.isDeleting ? 'clickable' : ''}`}>
                                <td>
                                    <input type="text" value={trapping.item} name="item"
                                           onChange={event => this.handleChange(index, event)}
                                           className="content-font-size"/>
                                </td>
                                <td>
                                    <input type="text" value={trapping.encurbance} name="encurbance"
                                           onChange={event => this.handleChange(index, event)}
                                           className="content-font-size"/>
                                </td>
                                <td>
                                    <input type="text" value={trapping.description} name="description"
                                           onChange={event => this.handleChange(index, event)}
                                           className="content-font-size"/>
                                </td>
                            </tr>
                        )
                    })
                }
                <tr>
                    <td colSpan="3">
                        <AddRowButton onClick={() => this.addTrapping()}/>
                        {shouldShowRemoveRowButton ? (<RemoveRowButton isActivated={this.state.isDeleting} onClick={this.toggleDeletionState}/>) : ''}
                    </td>
                </tr>
                </tbody>
            </table>
        );
    }
}