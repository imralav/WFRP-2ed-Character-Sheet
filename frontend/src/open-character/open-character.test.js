import React from 'react';
import ReactDOM from 'react-dom';
import OpenCharacter from './';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<OpenCharacter />, div);
});