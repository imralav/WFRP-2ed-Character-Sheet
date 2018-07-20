import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import MainContainer from './MainContainer';

ReactDOM.render(
    <Router>
        <MainContainer/>
    </Router>,
    document.getElementById('root')
);