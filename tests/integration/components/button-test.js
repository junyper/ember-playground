import { setupRenderingTest } from 'ember-qunit';
import { config, module, test } from 'qunit';
import { renderStory, takeSnapshot } from '../../helpers';
import Component, { Emoji, Text } from './button-stories';

module('Integration | Component | button', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders text', async function (assert) {
    await renderStory(this, Text.template, Text.args);

    assert.equal(this.element.textContent.trim(), Text.args.children);

    await takeSnapshot(Component, config.current.testName);
  });

  test('it renders emojis', async function (assert) {
    await renderStory(this, Emoji.template, Emoji.args);

    assert.equal(this.element.textContent.trim(), Emoji.args.children);

    await takeSnapshot(Component, config.current.testName);
  });
});
