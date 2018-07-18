import React from 'react';
import Header from '../header';
import TestUtils from '../utils/TestUtils';

describe('Header', () => {
    let component;
    let componentRoot;
    let tree;
    let changeLocaleFunction;
    beforeEach(() => {
        changeLocaleFunction = jest.fn();
        component = TestUtils.createComponentWithDefaultIntlAndRouter(
            <Header changeLocale={locale => changeLocaleFunction(locale)}/>
        );
        componentRoot = component.root;
        tree = component.toJSON();
    });
    it('should match previous snapshot', () => {
        expect(tree).toMatchSnapshot();
    });
    describe('changing locale', () => {
        [{label: 'EN', locale: 'en'}, {label: 'PL', locale: 'pl'}].forEach(localeData => {
            describe(`for ${localeData.label}`, () => {
                let button;
                beforeEach(() => {
                    button = componentRoot.findByProps({children: localeData.label});
                    button.props.onClick();
                });
                it(`should change locale to ${localeData.locale}`, () => {
                    expect(changeLocaleFunction).toHaveBeenCalledWith(localeData.locale);
                });
            });
        });
    });
});
