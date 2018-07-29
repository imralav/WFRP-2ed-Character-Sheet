import React from 'react';
import {FormattedMessage} from 'react-intl';

export default (props) => {
    const handleChange = event => {
        const changeData = {name: event.target.name, value: event.target.value};
        props.onChange(changeData);
    };
    return (
        <table>
            <thead>
            <tr>
                <th colSpan="2" className="header-font-size">
                    <FormattedMessage id="experience-points" defaultMessage="Experience Points"/>
                </th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>
                    <div>
                        <label className="label-font-size">
                            <FormattedMessage id="current" defaultMessage="Current"/>:
                        </label>
                        <input type="number" value={props.data.current} name="current" onChange={event => handleChange(event)} className="content-font-size"/>
                    </div>
                </td>
                <td>
                    <div>
                        <label className="label-font-size">
                            <FormattedMessage id="total" defaultMessage="Total"/>:
                        </label>
                        <input type="number" value={props.data.total} name="total" onChange={event => handleChange(event)} className="content-font-size"/>
                    </div>
                </td>
            </tr>
            </tbody>
        </table>
    );
}