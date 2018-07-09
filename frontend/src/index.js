import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css'
import './index.css';
import ModeSelector from './mode-selector';
import CreateCharacter from './create-character';
import OpenCharacter from './open-character';

class MainContainer extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <Route exact path='/' component={ModeSelector}/>
                <Route path='/character/create' component={CreateCharacter}/>
                <Route path='/character/open' component={OpenCharacter}/>
            </div>
        );
    }
}

ReactDOM.render(
    <Router>
        <MainContainer/>
    </Router>,
    document.getElementById('root')
);