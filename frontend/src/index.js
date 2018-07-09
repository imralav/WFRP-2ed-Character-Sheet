import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import pl from 'react-intl/locale-data/pl';
import en from 'react-intl/locale-data/en';
import {IntlProvider, addLocaleData} from 'react-intl';
import 'bootstrap/dist/css/bootstrap.css'
import './index.css';
import ModeSelector from './mode-selector';
import CreateCharacter from './create-character';
import OpenCharacter from './open-character';
import messages from './translations.json';

addLocaleData(pl);
addLocaleData(en);

class MainContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            locale: 'pl',
            messages
        }
    }
    render() {
        return (
            <IntlProvider locale={this.state.locale} messages={this.state.messages[this.state.locale]}>
                <div className="container-fluid">
                    <Route exact path='/' component={ModeSelector}/>
                    <Route path='/character/create' component={CreateCharacter}/>
                    <Route path='/character/open' component={OpenCharacter}/>
                </div>
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