import React from 'react';
import {FormattedMessage} from 'react-intl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function AddRowButton(props) {
    return (
        <button className="btn btn-light btn-sm label-font-size" onClick={() => props.onClick()}>
            <span className="plusIconContainer"><FontAwesomeIcon icon="plus"/></span>
            <FormattedMessage id="add-row" defaultMessage="Add new row"/>
        </button>
    );
}