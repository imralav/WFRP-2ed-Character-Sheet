import React, {Fragment, Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import pl from 'react-intl/locale-data/pl';
import en from 'react-intl/locale-data/en';
import {addLocaleData, IntlProvider} from 'react-intl';
import messages from './translations.json';

import 'bootstrap/dist/css/bootstrap.css'
import './index.css';

import ModeSelector from './mode-selector';
import CreateCharacter from './create-character';
import OpenCharacter from './open-character';
import Header from './header';

addLocaleData(pl);
addLocaleData(en);

class MainContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            locale: 'pl',
            messages
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
                        <Route path='/character/create' component={CreateCharacter}/>
                        <Route path='/character/open' component={OpenCharacter}/>
                    </div>
                </Fragment>
            </IntlProvider>
        );
    }
}

ReactDOM.render(
    <Router>
        <MainContainer/>
    </Router>,
    document.getElementById('root')
);