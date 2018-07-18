import React from 'react';
import Player from './Player';
import TestUtils from '../utils/TestUtils';

describe('Player', () => {
    let component;
    let componentRoot;
    let characterData;
    let tree;
    let onChangeFunction;
    beforeEach(() => {
        characterData = {
            name: 'someName',
            gameMaster: 'someGameMaster',
            campaign: 'someCampaign',
            campaignYear: 'someCampaignYear'
        };
        onChangeFunction = jest.fn();
        component = TestUtils.createComponentWithDefaultIntl(
            <Player data={characterData} onChange={changeData => onChangeFunction(changeData)}/>
        );
        componentRoot = component.root;
        tree = component.toJSON();
    });
    afterEach(() => {
        characterData = null;
        component = null;
        componentRoot = null;
        tree = null;
    });
    it('should match previous snapshot', () => {
        expect(tree).toMatchSnapshot();
    });
    ['name', 'gameMaster', 'campaign', 'campaignYear'].forEach(propertyName => {
        let input;
        beforeEach(() => {
            input = componentRoot.findByProps({name: propertyName});
        });
        afterEach(() => {
            input = null;
        });
        it(`should have correct ${propertyName}`, () => {
            expect(input.props.value).toEqual(characterData[propertyName]);
        });
        describe('on changed input value', () => {
            const event = {
                target: {
                    name: 'eventName',
                    value: 'someValue'
                }
            };
            beforeEach(() => {
                input.props.onChange(event);
            });
            it('should call function from props with correct arguments', () => {
                expect(onChangeFunction).toHaveBeenCalledWith({name: event.target.name, value: event.target.value});
            });
        });
    });
});
