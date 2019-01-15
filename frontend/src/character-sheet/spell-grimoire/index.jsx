import React, {Component} from 'react';
import {FormattedMessage} from 'react-intl';

import './spell-grimoire.css';

import Spell from './Spell';
import AddRowButton from '../buttons/AddRowButton';
import RemoveRowButton from '../buttons/RemoveRowButton';

export default class SpellGrimoire extends Component {
    constructor(props) {
        super(props);
        this.state = {isDeleting: false};
    }

    toggleDeletionState = () => {
        this.setState({isDeleting: !this.state.isDeleting});
    };

    handleChange = (index, event) => {
        this.props.updateSpell(index, {name: event.target.name, value: event.target.value});
    };

    attemptToDeleteRow(rowIndex) {
        if (this.state.isDeleting) {
            this.props.deleteSpell(rowIndex);
        }
    }

    addSpell() {
        this.stopDeleting();
        this.props.addSpell();
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
                    <th>
                        <FormattedMessage id="spell-grimoire" defaultMessage="Spell Grimoire"/>
                    </th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>
                        <div className="row">
                            {
                                this.props.data.map((spell, index) => {
                                    return (
                                        <div className={`col-12 col-lg-6 ${this.state.isDeleting ? 'clickable' : ''}`} key={index}
                                             onClick={() => this.attemptToDeleteRow(index)}>
                                            <Spell data={spell} handleChange={(event) => this.handleChange(index, event)}/>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <AddRowButton onClick={() => this.addSpell()}/>
                        {shouldShowRemoveRowButton ? (<RemoveRowButton isActivated={this.state.isDeleting} onClick={this.toggleDeletionState}/>) : ''}
                    </td>
                </tr>
                </tbody>
            </table>
        );
    }
}