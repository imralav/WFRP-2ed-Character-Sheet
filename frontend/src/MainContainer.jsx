import React, {Component, Fragment} from 'react';
import {Route} from 'react-router-dom';

import OpenCharacter from './open-character';
import TranslationsProvider from './translations/TranslationsProvider';
import CharacterSheet from './character-sheet';
import ModeSelector from './mode-selector';
import Header from './header';

import {Provider as AlertProvider} from 'react-alert'
import BasicAlertTemplate from 'react-alert-template-basic'

import 'bootstrap/dist/css/bootstrap.css'
import './index.css';

import pl from 'react-intl/locale-data/pl';
import en from 'react-intl/locale-data/en';
import {addLocaleData, IntlProvider} from 'react-intl';

addLocaleData(pl);
addLocaleData(en);

const alertOptions = {
    position: 'top center',
    timeout: 2000,
    offset: '100px',
    transition: 'fade',
    type: 'success'
};

export default class MainContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            locale: 'pl',
            messages: TranslationsProvider.get()
        }
    }

    changeLocale(locale) {
        this.setState({...this.state, locale});
    }

    render() {
        return (
            <IntlProvider locale={this.state.locale} messages={this.state.messages[this.state.locale]}>
                <AlertProvider template={BasicAlertTemplate} {...alertOptions}>
                    <Fragment>
                        <div className="container-fluid">
                            <Header changeLocale={locale => this.changeLocale(locale)}/>
                            <Route exact path='/' component={ModeSelector}/>
                            <Route exact path='/character' component={CharacterSheet}/>
                            <Route exact path='/character/open' component={OpenCharacter}/>
                        </div>
                    </Fragment>
                </AlertProvider>
            </IntlProvider>
        );
    }
}