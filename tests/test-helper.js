import { setApplication } from '@ember/test-helpers';
import { setupGlobalA11yHooks } from 'ember-a11y-testing/test-support';
import Application from 'ember-playground/app';
import config from 'ember-playground/config/environment';
import { start } from 'ember-qunit';
import setupSinon from 'ember-sinon-qunit';
import * as QUnit from 'qunit';
import { setup } from 'qunit-dom';

// https://github.com/testing-library/dom-testing-library/issues/756
window.global = window.globalThis;

setApplication(Application.create(config.APP));

setup(QUnit.assert);

setupSinon();

setupGlobalA11yHooks(() => true);

start();
