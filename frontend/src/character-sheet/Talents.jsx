import React from 'react';
import {FormattedMessage} from 'react-intl';

export default (props) => {
    return (
        <table className="section-table">
            <thead>
            <tr>
                <th>
                    <FormattedMessage id="talents" defaultMessage="Talents"/>
                </th>
            </tr>
            </thead>
        </table>
    );
}