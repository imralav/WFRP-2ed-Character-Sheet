import React, {Component} from 'react';
import {FormattedMessage} from 'react-intl';
import './Skills.css';
import AddRowButton from './buttons/AddRowButton';
import RemoveRowButton from './buttons/RemoveRowButton';

export default class Skills extends Component {
    constructor(props) {
        super(props);
        this.state = {isDeleting: false};
    }

    toggleDeletionState = () => {
        this.setState({isDeleting: !this.state.isDeleting});
    };

    attemptToDeleteRow(rowIndex) {
        if(this.state.isDeleting) {
            this.props.deleteAdvancedSkillRow(rowIndex);
        }
    }

    addAdvancedSkillRow() {
        this.stopDeleting();
        this.props.addAdvancedSkillRow();
    }

    stopDeleting() {
        this.setState({isDeleting: false});
    }

    advanceBasicSkill = (event, index, level) => {
        let newLevel = level;
        if(!event.target.checked) {
            newLevel--;
        }
        this.props.advanceBasicSkill(index, newLevel);
    };

    advanceAdvancedSkill = (event, index, level) => {
        let newLevel = level;
        if (!event.target.checked) {
            newLevel--;
        }
        this.props.advanceAdvancedSkill(index, newLevel);
    };

    handleBasicSkillChange = (index, event) => {
        this.props.updateBasicSkill(index, {name: event.target.name, value: event.target.value});
    };

    handleAdvancedSkillChange = (index, event) => {
        this.props.updateAdvancedSkill(index, {name: event.target.name, value: event.target.value});
    };

    render() {
        const shouldShowRemoveRowButton = this.props.data.advanced.length > 0;
        return (
            <table className="section-table">
                <thead>
                <tr>
                    <th colSpan="5">
                        <FormattedMessage id="skills" defaultMessage="Skills"/>
                    </th>
                </tr>
                </thead>
                <tbody>
                <tr className="font-weight-bold">
                    <td className="w-40p">
                        <FormattedMessage id="basic-skills" defaultMessage="Basic Skills (Characteristic)"/>
                    </td>
                    <td className="w-5p">
                        <FormattedMessage id="taken" defaultMessage="Taken"/>
                    </td>
                    <td className="w-5p">
                        +10%
                    </td>
                    <td className="w-5p">
                        +20%
                    </td>
                    <td>
                        <FormattedMessage id="related-talents" defaultMessage="Related Talents"/>
                    </td>
                </tr>
                {
                    this.props.data.basic.map((basicSkill, index) => {
                        return (
                            <tr key={index}>
                                <td>
                                    <FormattedMessage id={basicSkill.name} defaultMessage={basicSkill.name}/>
                                </td>
                                <td className="checkbox-container">
                                    <input type="checkbox" checked={basicSkill.level > 0} name="taken"
                                           onChange={event => this.advanceBasicSkill(event, index, 1)}
                                           className="content-font-size"/>
                                </td>
                                <td className="checkbox-container">
                                    <input type="checkbox" checked={basicSkill.level > 1} name="advanced10"
                                           onChange={event => this.advanceBasicSkill(event, index, 2)}
                                           className="content-font-size"/>
                                </td>
                                <td className="checkbox-container">
                                    <input type="checkbox" checked={basicSkill.level > 2} name="advanced20"
                                           onChange={event => this.advanceBasicSkill(event, index, 3)}
                                           className="content-font-size"/>
                                </td>
                                <td>
                                    <input type="text" value={basicSkill.relatedTalents} name="relatedTalents"
                                           onChange={event => this.handleBasicSkillChange(index, event)}
                                           className="content-font-size"/>
                                </td>
                            </tr>
                        )
                    })
                }
                <tr className="font-weight-bold">
                    <td className="w-40p">
                        <FormattedMessage id="advanced-skills" defaultMessage="Advanced Skills (Char.)"/>
                    </td>
                    <td className="w-5p">
                        <FormattedMessage id="taken" defaultMessage="Taken"/>
                    </td>
                    <td className="w-5p">
                        +10%
                    </td>
                    <td className="w-5p">
                        +20%
                    </td>
                    <td>
                        <FormattedMessage id="related-talents" defaultMessage="Related Talents"/>
                    </td>
                </tr>
                {
                    this.props.data.advanced.map((advancedSkill, index) => {
                        return (
                            <tr key={index} onClick={() => this.attemptToDeleteRow(index)} className={this.state.isDeleting ? 'clickable' : ''}>
                                <td>
                                    <input type="text" value={advancedSkill.name} name="name"
                                           onChange={event => this.handleAdvancedSkillChange(index, event)}
                                           className="content-font-size"/>
                                </td>
                                <td className="checkbox-container">
                                    <input type="checkbox" checked={advancedSkill.level > 0} name="taken"
                                           onChange={event => this.advanceAdvancedSkill(event, index, 1)}
                                           className="content-font-size"/>
                                </td>
                                <td className="checkbox-container">
                                    <input type="checkbox" checked={advancedSkill.level > 1} name="advanced10"
                                           onChange={event => this.advanceAdvancedSkill(event, index, 2)}
                                           className="content-font-size"/>
                                </td>
                                <td className="checkbox-container">
                                    <input type="checkbox" checked={advancedSkill.level > 2} name="advanced20"
                                           onChange={event => this.advanceAdvancedSkill(event, index, 3)}
                                           className="content-font-size"/>
                                </td>
                                <td>
                                    <input type="text" value={advancedSkill.relatedTalents} name="relatedTalents"
                                           onChange={event => this.handleAdvancedSkillChange(index, event)}
                                           className="content-font-size"/>
                                </td>
                            </tr>
                        )
                    })
                }
                <tr>
                    <td colSpan="5">
                        <AddRowButton onClick={() => this.addAdvancedSkillRow()}/>
                        {shouldShowRemoveRowButton ? (<RemoveRowButton isActivated={this.state.isDeleting} onClick={this.toggleDeletionState}/>) : ''}
                    </td>
                </tr>
                </tbody>
            </table>
        );
    }
}