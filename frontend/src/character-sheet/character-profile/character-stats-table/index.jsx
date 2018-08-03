import React from 'react';
import {FormattedMessage} from 'react-intl';
import CharacterStatsRow from './CharacterStatsRow';
import './character-stats-table.css';

export default function CharacterStatsTable(props) {
    const stats = Object.entries(props.stats);
    return (
        <table className="character-stats-table">
            <thead>
            <tr>
                <th className="no-border w10-p label-font-size">{props.tableName}</th>
                {
                    stats.map(stat => <th className="no-right-border no-top-border label-font-size"><FormattedMessage id={stat[1].id} defaultMessage="X"/></th>)
                }
            </tr>
            </thead>
            <tbody>
                <CharacterStatsRow
                    rowId="starting"
                    rowName={<FormattedMessage id="starting" defaultMessage="Starting"/>}
                    stats={props.stats}
                    onChange={(changeData) => props.onChange(changeData)}
                />
                <CharacterStatsRow
                    rowId="advance"
                    rowName={<FormattedMessage id="advance" defaultMessage="Advance"/>}
                    stats={props.stats}
                    onChange={(changeData) => props.onChange(changeData)}
                />
                <CharacterStatsRow
                    rowId="current"
                    rowName={<FormattedMessage id="current" defaultMessage="Current"/>}
                    stats={props.stats}
                    onChange={(changeData) => props.onChange(changeData)}
                />
            </tbody>
        </table>
    );
}