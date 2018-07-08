import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'
import './index.css';
import ModeSelector from './mode-selector';

class MainContainer extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row row-eq-height">
                    <div className="offset-xs-2 col-xs-8 offset-sm-1 col-sm-5">
                        <ModeSelector text="Create a character" img="create-character.jpg"/>
                    </div>
                    <div className="offset-xs-2 col-xs-8 col-sm-5">
                        <ModeSelector text="Use existing character" img="edit-character.jpg"/>
                    </div>
                </div>
            </div>
        )
    }
}

ReactDOM.render(
    <MainContainer/>,
    document.getElementById('root')
);