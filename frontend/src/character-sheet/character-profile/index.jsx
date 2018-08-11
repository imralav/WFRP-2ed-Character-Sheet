import React from 'react';
import {FormattedMessage} from 'react-intl';
import CharacterStatsTable from './character-stats-table/index';

export default (props) => {
    return (
        <table className="section-table">
            <thead>
            <tr>
                <th className="header-font-size">
                    <FormattedMessage id="character-profile" defaultMessage="Character Profile"/>
                </th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td className="padding-20px">
                    <CharacterStatsTable
                        tableName={<FormattedMessage id="main" defaultMessage="Main"/>}
                        stats={props.stats.main}
                        onChange={changeData => props.onChange(changeData, 'main')}
                    />
                    <CharacterStatsTable
                        tableName={<FormattedMessage id="secondary" defaultMessage="Secondary"/>}
                        stats={props.stats.secondary}
                        onChange={changeData => props.onChange(changeData, 'secondary')}
                    />
                </td>
            </tr>
            </tbody>
        </table>
    );
}