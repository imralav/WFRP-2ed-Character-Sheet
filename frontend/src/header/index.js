import React from 'react';
import {FormattedMessage} from 'react-intl';
import {Link} from "react-router-dom";
import './header.css';

export default (props) => {
    return (
        <div className="row header">
            <div className="col-3">
                <Link to="/">
                    <FormattedMessage id="navigation.home" defaultMessage="Home"/>
                </Link>
            </div>
            <div className="col-9 text-right">
                <a className="localeChangeButton" onClick={() => props.changeLocale('en')}>EN</a>
                <a className="localeChangeButton" onClick={() => props.changeLocale('pl')}>PL</a>
            </div>
        </div>
    );
}