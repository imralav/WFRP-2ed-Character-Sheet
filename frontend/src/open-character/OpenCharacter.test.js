import React from 'react';
import OpenCharacter from '../open-character';
import TestUtils from '../utils/TestUtils';

describe('OpenCharacter', () => {
    const CHARACTER_DATA = {player: {name: 'someName'}};
    const CHARACTER_DATA_JSON = JSON.stringify(CHARACTER_DATA);
    const ENCODED_CHARACTER_DATA = btoa(CHARACTER_DATA_JSON);
    let component;
    let componentRoot;
    let tree;
    beforeEach(() => {
        component = TestUtils.createComponentWithDefaultIntl(
            <OpenCharacter/>
        );
        componentRoot = component.root;
        tree = component.toJSON();
    });
    it('should match previous snapshot', () => {
        expect(tree).toMatchSnapshot();
    });
    describe('character data change', () => {
        const event = {
            target: {
                value: ENCODED_CHARACTER_DATA
            }
        };
        beforeEach(() => {
            componentRoot.findByType('textarea').props.onChange(event);
        });
        it('should add unparsed character data to state', () => {
            expect(componentRoot.findByType(OpenCharacter).instance.state.unparsedCharacterData).toEqual(ENCODED_CHARACTER_DATA);
        });
        describe('character data load', () => {
            beforeEach(() => {
                componentRoot.findByType('button').props.onClick();
            });
            it('should parse character data and set it on state', () => {
                expect(componentRoot.findByType(OpenCharacter).instance.state.characterData).toEqual(CHARACTER_DATA);
            });
            it('should match snapshot', () => {
                expect(component.toJSON()).toMatchSnapshot();
            });
        });
    });
});
