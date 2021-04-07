import { setupRenderingTest } from 'ember-qunit';
import { module, test } from 'qunit';
import {
  a11yAudit,
  renderStory,
  takeSnapshot,
} from 'ember-playground/tests/helpers';

import Story, { TemplateOnly } from './template-only-stories';

module('Integration | Component | template-only', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    const { screen } = await renderStory(this, TemplateOnly);

    const text = await screen.findByText('testing 123');

    assert.ok(text);

    await takeSnapshot(this, Story.title);

    await a11yAudit(this);

    assert.ok(true, 'no a11y errors found!');
  });
});
