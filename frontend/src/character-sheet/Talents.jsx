import React, {Component} from 'react';
import {FormattedMessage} from 'react-intl';
import './Talents.css';
import AddRowButton from './buttons/AddRowButton';
import RemoveRowButton from './buttons/RemoveRowButton';

export default class Talents extends Component {
    constructor(props) {
        super(props);
        this.state = {isDeleting: false};
    }

    toggleDeletionState = () => {
        this.setState({isDeleting: !this.state.isDeleting});
    };

    attemptToDeleteRow(rowIndex) {
        if(this.state.isDeleting) {
            this.props.deleteTalent(rowIndex);
        }
    }

    addTalent() {
        this.stopDeleting();
        this.props.addTalent();
    }

    stopDeleting() {
        this.setState({isDeleting: false});
    }

    handleChange = (index, event) => {
        this.props.updateTalent(index, {name: event.target.name, value: event.target.value});
    };

    render() {
        const shouldShowRemoveRowButton = this.props.data.length > 0;
        return (
            <table className="section-table">
                <thead>
                <tr>
                    <th colSpan="2">
                        <FormattedMessage id="talents" defaultMessage="Talents"/>
                    </th>
                </tr>
                </thead>
                <tbody>
                <tr className="talents-header">
                    <td>
                        <FormattedMessage id="talent" defaultMessage="Talent"/>
                    </td>
                    <td>
                        <FormattedMessage id="description" defaultMessage="Description"/>
                    </td>
                </tr>
                {
                    this.props.data.map((talent, index) => {
                        return (
                            <tr key={index} onClick={() => this.attemptToDeleteRow(index)} className={`talent-row ${this.state.isDeleting ? 'clickable' : ''}`}>
                                <td>
                                    <input type="text" value={talent.name} name="name"
                                           onChange={event => this.handleChange(index, event)}
                                           className="content-font-size"/>
                                </td>
                                <td>
                                    <input type="text" value={talent.description} name="description"
                                           onChange={event => this.handleChange(index, event)}
                                           className="content-font-size"/>
                                </td>
                            </tr>
                        )
                    })
                }
                <tr>
                    <td colSpan="2">
                        <AddRowButton onClick={() => this.addTalent()}/>
                        {shouldShowRemoveRowButton ? (<RemoveRowButton isActivated={this.state.isDeleting} onClick={this.toggleDeletionState}/>) : ''}
                    </td>
                </tr>
                </tbody>
            </table>
        );
    }
}