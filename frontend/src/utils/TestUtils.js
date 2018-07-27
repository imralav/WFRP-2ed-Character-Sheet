import React, {Fragment} from 'react';

import en from 'react-intl/locale-data/en';
import {addLocaleData, IntlProvider} from 'react-intl';
import renderer from 'react-test-renderer';

import {BrowserRouter as Router, Route} from 'react-router-dom';

addLocaleData(en);

class ComponentBuilder {
    constructor(component) {
        this.component = component;
    }

    withIntl() {
        this.component = (
            <IntlProvider locale="en" messages={{}}>
                <Fragment>
                {this.component}
                </Fragment>
            </IntlProvider>
        );
        return this;
    }

    withRouter() {
        this.component = (
            <Router>
                <Fragment>
                    {this.component}
                </Fragment>
            </Router>
        );
        return this;
    }

    build() {
        return renderer.create(this.component);
    }
}

export default class TestUtils {
    static buildComponent(component) {
        return new ComponentBuilder(component);
    }
}