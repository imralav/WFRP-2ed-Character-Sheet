import React from 'react';
import {FormattedMessage} from 'react-intl';

export default function Money(props) {
    const handleChange = event => {
        const changeData = {name: event.target.name, value: event.target.value};
        props.onChange(changeData);
    };
    return (
        <table className="section-table">
            <thead>
            <tr>
                <th>
                    <FormattedMessage id="money" defaultMessage="Money"/>
                </th>
            </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <div>
                            <label className="label-font-size">
                                <FormattedMessage id="gold-crowns" defaultMessage="Gold Crowns (gc)"/>:
                            </label>
                            <input type="number" value={props.data.crowns} name="crowns" onChange={event => handleChange(event)} className="content-font-size"/>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div>
                            <label className="label-font-size">
                                <FormattedMessage id="silver-schillings" defaultMessage="Silver Schillings (s)"/>:
                            </label>
                            <input type="number" value={props.data.schillings} name="schillings" onChange={event => handleChange(event)} className="content-font-size"/>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div>
                            <label className="label-font-size">
                                <FormattedMessage id="brass-pennies" defaultMessage="Brass Pennies (p)"/>:
                            </label>
                            <input type="number" value={props.data.pennies} name="pennies" onChange={event => handleChange(event)} className="content-font-size"/>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    );
}