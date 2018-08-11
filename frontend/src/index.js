import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import MainContainer from './MainContainer';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlus, faTimes } from '@fortawesome/free-solid-svg-icons'

library.add(faPlus);
library.add(faTimes);

ReactDOM.render(
    <Router>
        <MainContainer/>
    </Router>,
    document.getElementById('root')
);