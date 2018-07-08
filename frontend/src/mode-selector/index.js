import React from 'react';
import './mode-selector.css';

export default function ModeSelector(props) {
    return (
        <div className="modeSelectorTile text-center border border-dark rounded d-flex flex-column">
            <div>
                <img src={props.img} alt=""/>
            </div>
            <div>
                <span>{props.text}</span>
            </div>
        </div>
    );
}