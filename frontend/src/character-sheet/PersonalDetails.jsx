import React from 'react';
import {FormattedMessage} from 'react-intl';

export default function PersonalDetails(props) {
    const handleChange = event => {
        const changeData = {name: event.target.name, value: event.target.value};
        props.onChange(changeData);
    };
    return (
        <table className="section-table">
            <thead>
            <tr>
                <th colSpan="2" className="header-font-size">
                    <FormattedMessage id="personal-details" defaultMessage="Personal Details"/>
                </th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>
                    <div>
                        <label className="label-font-size">
                            <FormattedMessage id="age" defaultMessage="Age"/>:
                        </label>
                        <input type="number" value={props.data.age} name="age" onChange={event => handleChange(event)} className="content-font-size"/>
                    </div>
                </td>
                <td>
                    <div>
                        <label className="label-font-size">
                            <FormattedMessage id="gender" defaultMessage="Gender"/>:
                        </label>
                        <input type="text" value={props.data.gender} name="gender" onChange={event => handleChange(event)}
                               className="content-font-size"/>
                    </div>
                </td>
            </tr>
            <tr>
                <td>
                    <div>
                        <label className="label-font-size">
                            <FormattedMessage id="eye-color" defaultMessage="Eye Color"/>:
                        </label>
                        <input type="text" value={props.data.eyeColor} name="eyeColor" onChange={event => handleChange(event)}
                               className="content-font-size"/>
                    </div>
                </td>
                <td>
                    <div>
                        <label className="label-font-size">
                            <FormattedMessage id="weight" defaultMessage="Weight"/>:
                        </label>
                        <input type="number" value={props.data.weight} name="weight" onChange={event => handleChange(event)}
                               className="content-font-size"/>
                    </div>
                </td>
            </tr>
            <tr>
                <td>
                    <div>
                        <label className="label-font-size">
                            <FormattedMessage id="hair-color" defaultMessage="Hair Color"/>:
                        </label>
                        <input type="text" value={props.data.hairColor} name="hairColor" onChange={event => handleChange(event)}
                               className="content-font-size"/>
                    </div>
                </td>
                <td>
                    <div>
                        <label className="label-font-size">
                            <FormattedMessage id="height" defaultMessage="Height"/>:
                        </label>
                        <input type="number" value={props.data.height} name="height" onChange={event => handleChange(event)}
                               className="content-font-size"/>
                    </div>
                </td>
            </tr>
            <tr>
                <td>
                    <div>
                        <label className="label-font-size">
                            <FormattedMessage id="star-sign" defaultMessage="Star Sign"/>:
                        </label>
                        <input type="text" value={props.data.starSign} name="starSign" onChange={event => handleChange(event)}
                               className="content-font-size"/>
                    </div>
                </td>
                <td>
                    <div>
                        <label className="label-font-size">
                            <FormattedMessage id="number-of-siblings" defaultMessage="Number of Siblings"/>:
                        </label>
                        <input type="number" value={props.data.numberOfSiblings} name="numberOfSiblings" onChange={event => handleChange(event)}
                               className="content-font-size"/>
                    </div>
                </td>
            </tr>
            <tr>
                <td colSpan="2">
                    <div>
                        <label className="label-font-size">
                            <FormattedMessage id="birthplace" defaultMessage="Birthplace"/>:
                        </label>
                        <input type="text" value={props.data.birthplace} name="birthplace" onChange={event => handleChange(event)}
                               className="content-font-size"/>
                    </div>
                </td>
            </tr>
            <tr>
                <td colSpan="2">
                    <div>
                        <label className="label-font-size">
                            <FormattedMessage id="distinguishing-marks" defaultMessage="Distinguishing Marks"/>:
                        </label>
                        <input type="text" value={props.data.distinguishingMarks} name="distinguishingMarks" onChange={event => handleChange(event)}
                               className="content-font-size"/>
                    </div>
                </td>
            </tr>
            </tbody>
        </table>
    );
}