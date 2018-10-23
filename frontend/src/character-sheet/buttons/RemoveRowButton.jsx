import React from 'react';
import {FormattedMessage} from 'react-intl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function RemoveRowButton(props) {
    return (
        <button className={`btn btn-sm label-font-size ${props.isActivated ? 'btn-dark' : 'btn-light'}`} onClick={() => props.onClick()}>
            <span className="plusIconContainer"><FontAwesomeIcon icon="times"/></span>
            <FormattedMessage id="remove-row" defaultMessage="Remove selected row"/>
        </button>
    );
}