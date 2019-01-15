import React from 'react';
import {FormattedMessage} from 'react-intl';

export default (props) => {
    const handleChange = event => {
        const changeData = {name: event.target.name, value: event.target.value};
        props.handleChange(changeData);
    };
    return (
        <table className="section-table">
            <thead>
            <tr>
                <th colSpan="6" className="header-font-size">
                    <FormattedMessage id="armour-points" defaultMessage="Armour Points"/>
                </th>
            </tr>
            </thead>
            <tbody>
            <tr className="borderless label-font-size">
                <td><FormattedMessage id="head" defaultMessage="HEAD"/></td>
                <td><FormattedMessage id="right-arm" defaultMessage="RIGHT ARM"/></td>
                <td><FormattedMessage id="left-arm" defaultMessage="LEFT ARM"/></td>
                <td><FormattedMessage id="body" defaultMessage="BODY"/></td>
                <td><FormattedMessage id="right-leg" defaultMessage="RIGHT LEG"/></td>
                <td><FormattedMessage id="left-leg" defaultMessage="LEFT LEG"/></td>
            </tr>
            <tr>
                <td>
                    <div>
                        <input type="number" value={props.data.head} name="head" onChange={event => handleChange(event)} className="content-font-size"/>
                    </div>
                </td>
                <td>
                    <div>
                        <input type="number" value={props.data.rightArm} name="rightArm" onChange={event => handleChange(event)} className="content-font-size"/>
                    </div>
                </td>
                <td>
                    <div>
                        <input type="number" value={props.data.leftArm} name="leftArm" onChange={event => handleChange(event)} className="content-font-size"/>
                    </div>
                </td>
                <td>
                    <div>
                        <input type="number" value={props.data.body} name="body" onChange={event => handleChange(event)} className="content-font-size"/>
                    </div>
                </td>
                <td>
                    <div>
                        <input type="number" value={props.data.rightLeg} name="rightLeg" onChange={event => handleChange(event)} className="content-font-size"/>
                    </div>
                </td>
                <td>
                    <div>
                        <input type="number" value={props.data.leftLeg} name="leftLeg" onChange={event => handleChange(event)} className="content-font-size"/>
                    </div>
                </td>
            </tr>
            <tr className="borderless label-font-size">
                <td>01-15</td>
                <td>16-35</td>
                <td>36-55</td>
                <td>56-80</td>
                <td>81-90</td>
                <td>91-00</td>
            </tr>
            </tbody>
        </table>
    );
}