import React from 'react';

export default function CharacterStatsRow(props) {
    const rowId = props.rowId;
    const rowName = props.rowName;
    const stats = props.stats;
    const handleChange = event => {
        const changeData = {name: `${event.target.name}.${rowId}`, value: event.target.value};
        props.onChange(changeData);
    };
    return (
        <tr>
            <td className="label-font-size">
                {rowName}
            </td>
            {
                Object.keys(stats).map((statName, index) => (
                    <td className="w-10p content-font-size" key={index}>
                        <input type="number" value={stats[statName][rowId]} name={statName} onChange={event => handleChange(event)}
                               className="content-font-size" min="0"/>
                    </td>
                ))
            }
        </tr>
    );
}