import React from 'react';
import ModeSelector from '../mode-selector';
import TestUtils from '../utils/TestUtils';

describe('ModeSelector', () => {
    let component;
    let componentRoot;
    let tree;
    beforeEach(() => {
        component = TestUtils.buildComponent(
            <ModeSelector/>
        ).withIntl().withRouter().build();
        componentRoot = component.root;
        tree = component.toJSON();
    });
    it('should match previous snapshot', () => {
        expect(tree).toMatchSnapshot();
    });
});
