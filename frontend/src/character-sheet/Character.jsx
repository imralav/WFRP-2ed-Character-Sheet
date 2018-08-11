import React from 'react';
import {FormattedMessage} from 'react-intl';

export default function Character(props) {
    const handleChange = event => {
        const changeData = {name: event.target.name, value: event.target.value};
        props.onChange(changeData);
    };
    return (
        <table className="section-table">
            <thead>
            <tr>
                <th className="header-font-size">
                    <FormattedMessage id="character" defaultMessage="Character"/>
                </th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>
                    <div>
                        <label className="label-font-size">
                            <FormattedMessage id="name" defaultMessage="Name"/>:
                        </label>
                        <input type="text" value={props.data.name} name="name" onChange={event => handleChange(event)} className="content-font-size"/>
                    </div>
                </td>
            </tr>
            <tr>
                <td>
                    <div>
                        <label className="label-font-size">
                            <FormattedMessage id="race" defaultMessage="Race"/>:
                        </label>
                        <input type="text" value={props.data.race} name="race" onChange={event => handleChange(event)} className="content-font-size"/>
                    </div>
                </td>
            </tr>
            <tr>
                <td>
                    <div>
                        <label className="label-font-size">
                            <FormattedMessage id="current-career" defaultMessage="Current Career"/>:
                        </label>
                        <input type="text" value={props.data.currentCareer} name="currentCareer" onChange={event => handleChange(event)} className="content-font-size"/>
                    </div>
                </td>
            </tr>
            <tr>
                <td>
                    <div>
                        <label className="label-font-size">
                            <FormattedMessage id="previous-careers" defaultMessage="Previous Careers"/>:
                        </label>
                        <input type="text" value={props.data.previousCareers} name="previousCareers" onChange={event => handleChange(event)} className="content-font-size"/>
                    </div>
                </td>
            </tr>
            </tbody>
        </table>
    );
}