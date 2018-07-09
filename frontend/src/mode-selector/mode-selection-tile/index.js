import React from 'react';
import './mode-selector.css';
import {Link} from "react-router-dom";

export default function ModeSelectionTile(props) {
    return (
        <Link to={props.link} className="modeSelectorTile text-center border border-dark rounded d-flex flex-column">
            <div>
                <img src={props.img} alt=""/>
            </div>
            <div>
                <span>{props.text}</span>
            </div>
        </Link>
    );
}