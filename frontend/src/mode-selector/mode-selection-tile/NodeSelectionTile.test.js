import React from 'react';
import NodeSelectionTile from '../mode-selection-tile';
import TestUtils from '../../utils/TestUtils';
import CreateCharacterImg from '../create-character.png';

describe('NodeSelectionTile', () => {
    const SOME_LINK = "/characterSheet";
    const SOME_TEXT = "someText";
    let component;
    let componentRoot;
    let tree;
    let changeLocaleFunction;
    beforeEach(() => {
        changeLocaleFunction = jest.fn();
        component = TestUtils.buildComponent(
            <NodeSelectionTile img={CreateCharacterImg} link={SOME_LINK} text={SOME_TEXT}/>
        ).withIntl().withRouter().build();
        componentRoot = component.root;
        tree = component.toJSON();
    });
    it('should match previous snapshot', () => {
        expect(tree).toMatchSnapshot();
    });
    it('should have correct text', () => {
        expect(componentRoot.findByType('span').props.children).toEqual(SOME_TEXT);
    });
    it('should have correct link', () => {
        expect(componentRoot.findByType('a').props.href).toEqual(SOME_LINK);
    });
});
