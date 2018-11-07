import React from 'react';
import {FormattedMessage} from 'react-intl';
import './Skills.css';

export default (props) => {
    const setLevel = (event, index, level) => {
        let newLevel = level;
        if(!event.target.checked) {
            newLevel--;
        }
        props.advanceBasicSkill(index, newLevel);
    };
    const handleChange = (index, event) => {
        console.log('Setting change on ', index, event);
    };
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
                props.data.basic.map((basicSkill, index) => {
                    return (
                        <tr key={index}>
                            <td>
                                <FormattedMessage id={basicSkill.name} defaultMessage={basicSkill.name}/>
                            </td>
                            <td>
                                <input type="checkbox" checked={basicSkill.level > 0} name="taken" onChange={(event) => setLevel(event, index, 1)}
                                       className="content-font-size"/>
                            </td>
                            <td>
                                <input type="checkbox" checked={basicSkill.level > 1} name="advanced10" onChange={(event) => setLevel(event, index, 2)}
                                       className="content-font-size"/>
                            </td>
                            <td>
                                <input type="checkbox" checked={basicSkill.level > 2} name="advanced20" onChange={(event) => setLevel(event, index, 3)}
                                       className="content-font-size"/>
                            </td>
                            <td>
                                <input type="text" value={basicSkill.relatedTalents} name="relatedTalents" onChange={event => handleChange(index, event)}
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
                props.data.advanced.map((advancedSkill, index) => {
                    return (
                        <tr key={index}>
                            <td>
                                <input type="text" value={advancedSkill.name} name="name" onChange={event => this.handleChange(index, event)}
                                       className="content-font-size"/>
                            </td>
                            <td>
                                <input type="checkbox" checked={advancedSkill.level > 0} name="taken" onChange={() => setLevel(index, 1)}
                                       className="content-font-size"/>
                            </td>
                            <td>
                                <input type="checkbox" checked={advancedSkill.level > 1} name="advanced10" onChange={() => setLevel(index, 2)}
                                       className="content-font-size"/>
                            </td>
                            <td>
                                <input type="checkbox" checked={advancedSkill.level > 2} name="advanced20" onChange={() => setLevel(index, 3)}
                                       className="content-font-size"/>
                            </td>
                            <td>
                                <input type="text" value={advancedSkill.relatedTalents} name="relatedTalents" onChange={event => this.handleChange(index, event)}
                                       className="content-font-size"/>
                            </td>
                        </tr>
                    )
                })
            }
            </tbody>
        </table>
    );
}