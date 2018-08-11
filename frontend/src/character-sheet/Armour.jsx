import React from 'react';
import {FormattedMessage} from 'react-intl';

export default (props) => {
    return (
        <table className="section-table">
            <thead>
            <tr>
                <th>
                    <FormattedMessage id="armour" defaultMessage="Armour"/>
                </th>
            </tr>
            </thead>
        </table>
    );
}