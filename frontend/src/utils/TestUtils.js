import React, {Fragment} from 'react';

import en from 'react-intl/locale-data/en';
import {addLocaleData, IntlProvider} from 'react-intl';
import renderer from 'react-test-renderer';

import {BrowserRouter as Router, Route} from 'react-router-dom';

addLocaleData(en);

export default class TestUtils {
    static createComponentWithDefaultIntl(component) {
        return renderer.create(
            <IntlProvider locale="en" messages={{}}>
                {component}
            </IntlProvider>
        );
    }

    static createComponentWithDefaultIntlAndRouter(component) {
        return TestUtils.createComponentWithDefaultIntl(
            <Router>
                <Fragment>
                {component};
                </Fragment>
            </Router>
        );
    }
}