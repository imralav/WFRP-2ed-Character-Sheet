import React from 'react';
import CharacterSheet from '../character-sheet';
import Player from './Player';
import Clipboard from '../utils/Clipboard';
import TestUtils from '../utils/TestUtils';

describe('CharacterSheet', () => {
    let component;
    let componentRoot;
    let characterData;
    let tree;
    let clipboard;
    describe('setup', () => {
        describe('with no character data and no clipboard', () => {
            beforeEach(() => {
                characterData = {
                    player: {
                        name: 'playerName',
                        gameMaster: 'someGameMaster',
                        campaign: 'someCampaign',
                        campaignYear: 'someCampaignYear'
                    },
                    character: {
                        name: 'characterName'
                    }
                };
                clipboard = {
                    copyTextToClipboard: jest.fn()
                };
                component = TestUtils.buildComponent(<CharacterSheet/>).withIntl().build();
                componentRoot = component.root;
                tree = component.toJSON();
            });
            it('should match previous snapshot', () => {
                expect(tree).toMatchSnapshot();
            });
            it('should have correct clipboard set', () => {
                let characterSheet = componentRoot.findByType(CharacterSheet);
                expect(characterSheet.children[0].instance.clipboard).toBe(Clipboard);
            });
        });
        describe('with character data and clipboard', () => {
            let alertMock;
            beforeEach(() => {
                alertMock = {
                    show: jest.fn()
                };
                characterData = {
                    player: {
                        name: 'someName',
                        gameMaster: 'someGameMaster',
                        campaign: 'someCampaign',
                        campaignYear: 'someCampaignYear'
                    },
                    character: {
                        name: 'characterName'
                    },
                    experiencePoints: {
                        current: 50,
                        total: 150
                    }
                };
                alertMock = {
                    show: jest.fn()
                };
                clipboard = {
                    copyTextToClipboard: jest.fn()
                };
                component = TestUtils.buildComponent(<CharacterSheet characterData={characterData} clipboard={clipboard} alert={alertMock}/>).withIntl().build();
                componentRoot = component.root;
                tree = component.toJSON();
            });
            it('should match previous snapshot', () => {
                expect(tree).toMatchSnapshot();
            });
            describe('Copy character to clipboard', () => {
                beforeEach(() => {
                    let containerDiv = componentRoot.findByProps({id: 'character-json'});
                    let button = containerDiv.findByType('button');
                    button.props.onClick();
                });
                it('should copy encoded character data to clipboard', () => {
                    expect(clipboard.copyTextToClipboard).toHaveBeenCalledWith(btoa(JSON.stringify(characterData)));
                });
            });
            describe('Player data change', () => {
                const changeData = {name: 'name', value: 'someNewName'};
                let player;
                beforeEach(() => {
                    player = componentRoot.findByType(Player);
                    player.props.onChange(changeData);
                });
                it('should change state', () => {
                    let characterSheet = componentRoot.findByType(CharacterSheet);
                    expect(characterSheet.children[0].instance.state.characterData.player.name).toEqual(changeData.value);
                });
            });
        });
    });
});
