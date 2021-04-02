import { setupRenderingTest } from 'ember-qunit';
import { module, test } from 'qunit';
import {
  a11yAudit,
  renderStory,
  takeSnapshot,
} from 'ember-playground/tests/helpers';

import Story, { Test } from './test-stories';

module('Integration | Component | test', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    const { element } = await renderStory(this, Test);

    const text = await element.findByText('testing 123');

    assert.ok(text);

    await takeSnapshot(this, Story);

    await a11yAudit(this);

    assert.ok(true, 'no a11y errors found!');
  });
});
