import React from 'react';
import MainContainer from './MainContainer';
import TestUtils from './utils/TestUtils';
import Header from './header';

xdescribe('MainContainer', () => {
    let component;
    let componentRoot;
    let tree;
    beforeEach(() => {
        component = TestUtils.buildComponent(
            <MainContainer/>
        ).withRouter().build();
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
            let header = componentRoot.findByType(Header);
            header.props.changeLocale(NEW_LOCALE);
        });
        it('should match snapshot', () => {
            expect(tree).toMatchSnapshot();
        });
        it('should change locale', () => {
            let mainContainer = componentRoot.findByType(MainContainer);
            expect(mainContainer.instance.state.locale).toEqual(NEW_LOCALE);
        });
    });
});
