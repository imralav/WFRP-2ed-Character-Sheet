import React from 'react';
import CharacterSheet from '../character-sheet';
import Player from './Player';
import Clipboard from '../utils/clipboard';
import renderer from 'react-test-renderer';

import en from 'react-intl/locale-data/en';
import {addLocaleData, IntlProvider} from 'react-intl';

addLocaleData(en);

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
                        name: 'someName',
                        gameMaster: 'someGameMaster',
                        campaign: 'someCampaign',
                        campaignYear: 'someCampaignYear'
                    }
                };
                clipboard = {
                    copyTextToClipboard: jest.fn()
                };
                component = renderer.create(
                    <IntlProvider locale="en" messages={{}}>
                        <CharacterSheet/>
                    </IntlProvider>
                );
                componentRoot = component.root;
                tree = component.toJSON();
            });
            it('should match previous snapshot', () => {
                expect(tree).toMatchSnapshot();
            });
            it('should have correct clipboard set', () => {
                expect(componentRoot.findByType(CharacterSheet).instance.clipboard).toBe(Clipboard);
            });
        });
        describe('with character data and clipboard', () => {
            beforeEach(() => {
                characterData = {
                    player: {
                        name: 'someName',
                        gameMaster: 'someGameMaster',
                        campaign: 'someCampaign',
                        campaignYear: 'someCampaignYear'
                    }
                };
                clipboard = {
                    copyTextToClipboard: jest.fn()
                };
                component = renderer.create(
                    <IntlProvider locale="en" messages={{}}>
                        <CharacterSheet characterData={characterData} clipboard={clipboard}/>
                    </IntlProvider>
                );
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
                    expect(componentRoot.findByType(CharacterSheet).instance.state.characterData.player.name).toEqual(changeData.value);
                });
            });
        });
    });
});
