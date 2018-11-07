import React, {Component} from 'react';
import {FormattedMessage} from 'react-intl';

import './Armour.css';

import BasicArmourTable from './BasicArmourTable';
import AdvancedArmourTable from './AdvancedArmourTable';

export default class Armour extends Component {
    render() {
        return (
            <table className="section-table">
                <thead>
                <tr>
                    <th className="header-font-size" colSpan="4">
                        <FormattedMessage id="armour" defaultMessage="Armour"/>
                    </th>
                </tr>
                </thead>
                <tbody>
                    <BasicArmourTable data={this.props.data.basic}
                                      updateBasicArmour={this.props.updateBasicArmour}
                    />
                    <AdvancedArmourTable data={this.props.data.advanced}
                                         addRow={this.props.addArmourRow}
                                         deleteRow={this.props.deleteArmourRow}
                                         updateRow={this.props.updateArmourRow}
                    />
                </tbody>
            </table>
        );
    }
}