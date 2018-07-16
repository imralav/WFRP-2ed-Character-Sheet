import React from 'react';
import './mode-selector-tile.css';
import {Link} from "react-router-dom";

export default function ModeSelectorTile(props) {
    return (
        <Link to={props.link} className="modeSelectorTile text-center border border-dark rounded d-inline-flex flex-column">
            <div>
                <img src={props.img} alt=""/>
            </div>
            <div>
                <span>{props.text}</span>
            </div>
        </Link>
    );
}