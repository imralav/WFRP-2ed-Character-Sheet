import React, {Fragment, Component} from 'react';
import {Route} from 'react-router-dom';

import OpenCharacter from './open-character';
import TranslationsProvider from './translations/TranslationsProvider';
import CharacterSheet from './character-sheet';
import ModeSelector from './mode-selector';
import Header from './header';

import 'bootstrap/dist/css/bootstrap.css'
import './index.css';

import pl from 'react-intl/locale-data/pl';
import en from 'react-intl/locale-data/en';
import {addLocaleData, IntlProvider} from 'react-intl';

addLocaleData(pl);
addLocaleData(en);


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
                <Fragment>
                    <div className="container-fluid">
                        <Header changeLocale={locale => this.changeLocale(locale)}/>
                        <Route exact path='/' component={ModeSelector}/>
                        <Route exact path='/character' component={CharacterSheet}/>
                        <Route exact path='/character/open' component={OpenCharacter}/>
                    </div>
                </Fragment>
            </IntlProvider>
        );
    }
}