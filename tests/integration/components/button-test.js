import { waitUntil } from '@ember/test-helpers';
import { setupRenderingTest } from 'ember-qunit';
import { module, test } from 'qunit';
import sinon from 'sinon';
import { a11yAudit, renderStory, takeSnapshot } from '../../helpers';
import Component, { Emoji, Text } from './button-stories';

module('Integration | Component | button', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders text', async function (assert) {
    Text.args.onClick = sinon.spy();

    const { screen, userEvent } = await renderStory(this, Text);

    assert.equal(
      screen.getByRole('button').textContent.trim(),
      Text.args.children
    );

    userEvent.click(screen.getByRole('button'));

    await waitUntil(() => Text.args.onClick.calledOnce);

    await waitUntil(() => Text.args.onClick.calledWith(1));

    await takeSnapshot(this, Component);

    await a11yAudit(this);

    assert.ok(true, 'no a11y errors found!');
  });

  test('it renders emojis', async function (assert) {
    const { screen } = await renderStory(this, Emoji);

    assert.equal(
      screen.getByRole('button').textContent.trim(),
      Emoji.args.children
    );

    await takeSnapshot(this, Component);

    await a11yAudit(this);

    assert.ok(true, 'no a11y errors found!');
  });
});
