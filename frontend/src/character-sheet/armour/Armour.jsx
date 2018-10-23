import React, {Component} from 'react';
import {FormattedMessage} from 'react-intl';

import BasicArmourTable from './BasicArmourTable';
import AdvancedArmourTable from './AdvancedArmourTable';

export default class Armour extends Component {
    render() {
        return (
            <table className="section-table">
                <thead>
                <tr>
                    <th className="header-font-size">
                        <FormattedMessage id="armour" defaultMessage="Armour"/>
                    </th>
                </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <BasicArmourTable data={this.props.data.basic}/>
                            <AdvancedArmourTable data={this.props.data.advanced}/>
                        </td>
                    </tr>
                </tbody>
            </table>
        );
    }
}