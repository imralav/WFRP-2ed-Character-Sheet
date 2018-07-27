import React from 'react';
import OpenCharacter from '../open-character';
import TestUtils from '../utils/TestUtils';

describe('OpenCharacter', () => {
    const CHARACTER_DATA = {player: {name: 'playerName'}, character: {name: 'characterName'}};
    const CHARACTER_DATA_JSON = JSON.stringify(CHARACTER_DATA);
    const ENCODED_CHARACTER_DATA = btoa(CHARACTER_DATA_JSON);
    const CORRUPTED_CHARACTER_DATA = 'someCorruptedData';
    const characterLoadValidator = {isValid: jest.fn()};
    let component;
    let componentRoot;
    let tree;
    beforeEach(() => {
        component = TestUtils.buildComponent(
            <OpenCharacter characterLoadValidator={characterLoadValidator}/>
        ).withIntl().build();
        componentRoot = component.root;
        tree = component.toJSON();
    });
    it('should match previous snapshot', () => {
        expect(tree).toMatchSnapshot();
    });
    describe('uncorrupted character data change', () => {
        beforeEach(() => {
            componentRoot.findByType('textarea').props.onChange({
                target: {
                    value: ENCODED_CHARACTER_DATA
                }
            });
        });
        it('should add unparsed character data to state', () => {
            expect(componentRoot.findByType(OpenCharacter).instance.state.unparsedCharacterData).toEqual(ENCODED_CHARACTER_DATA);
        });
        describe('loadCharacterData', () => {
            describe('on passed validation character data load', () => {
                beforeEach(() => {
                    characterLoadValidator.isValid.mockImplementation(() => true);
                    componentRoot.findByType('button').props.onClick();
                });
                it('should parse character data and set it on state', () => {
                    expect(componentRoot.findByType(OpenCharacter).instance.state.characterData).toEqual(CHARACTER_DATA);
                });
                it('should match snapshot', () => {
                    expect(component.toJSON()).toMatchSnapshot();
                });
            });
            describe('on failed validation character data load', () => {
                beforeEach(() => {
                    characterLoadValidator.isValid.mockImplementation(() => false);
                    componentRoot.findByType('button').props.onClick();
                });
                it('should not parse character data and set it on state', () => {
                    expect(componentRoot.findByType(OpenCharacter).instance.state.characterData).not.toBeDefined();
                });
                it('should match snapshot', () => {
                    expect(component.toJSON()).toMatchSnapshot();
                });
            });
        });
    });
    describe('corrupted character data change', () => {
        beforeEach(() => {
            componentRoot.findByType('textarea').props.onChange({
                target: {
                    value: CORRUPTED_CHARACTER_DATA
                }
            });
        });
        it('should add unparsed character data to state', () => {
            expect(componentRoot.findByType(OpenCharacter).instance.state.unparsedCharacterData).toEqual(CORRUPTED_CHARACTER_DATA);
        });
        describe('loadCharacterData', () => {
            describe('on decoding errors', () => {
                beforeEach(() => {
                    componentRoot.findByType('button').props.onClick();
                });
                it('should not parse character data and set it on state', () => {
                    expect(componentRoot.findByType(OpenCharacter).instance.state.characterData).not.toBeDefined();
                });
                it('should set invalid state', () => {
                    expect(componentRoot.findByType(OpenCharacter).instance.state.isValid).toEqual(false);
                });
                it('should match snapshot', () => {
                    expect(component.toJSON()).toMatchSnapshot();
                });
            });
        });
    });
});
