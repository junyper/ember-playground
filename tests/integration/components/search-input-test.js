import { setupRenderingTest } from 'ember-qunit';
import { module, test } from 'qunit';
import {
  a11yAudit,
  renderStory,
  takeSnapshot,
} from 'ember-playground/tests/helpers';

import Story, { WithValue } from './search-input-stories';

module('Integration | Component | search-input', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders text with an initial value', async function (assert) {
    await renderStory(this, WithValue);

    assert.ok(true);

    await takeSnapshot(this, Story.title);

    await a11yAudit(this);

    assert.ok(true, 'no a11y errors found!');
  });
});
