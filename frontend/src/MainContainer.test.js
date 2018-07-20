import React from 'react';
import MainContainer from './MainContainer';
import TestUtils from './utils/TestUtils';
import Header from './header';

describe('MainContainer', () => {
    let component;
    let componentRoot;
    let tree;
    beforeEach(() => {
        component = TestUtils.createComponentWithDefaultIntlAndRouter(
            <MainContainer/>
        );
        componentRoot = component.root;
        tree = component.toJSON();
    });
    it('should match previous snapshot', () => {
        expect(tree).toMatchSnapshot();
    });
    it('should start with polish locale', () => {
        expect(componentRoot.findByType(MainContainer).instance.state.locale).toEqual('pl');
    });
    describe('after locale is changed', () => {
        const NEW_LOCALE = 'en';
        beforeEach(() => {
            componentRoot.findByType(Header).props.changeLocale(NEW_LOCALE);
        });
        it('should match snapshot', () => {
            expect(tree).toMatchSnapshot();
        });
        it('should change locale', () => {
            expect(componentRoot.findByType(MainContainer).instance.state.locale).toEqual(NEW_LOCALE);
        });
    });
});
