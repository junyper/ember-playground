import { waitUntil } from '@ember/test-helpers';
import { setupRenderingTest } from 'ember-qunit';
import { module, test } from 'qunit';
import sinon from 'sinon';
import { a11yAudit, renderStory, takeSnapshot } from '../../helpers';
import Story, { Emoji, Text } from './button-stories';

module('Integration | Component | button', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders text', async function (assert) {
    Text.args.onClick = sinon.spy();

    const { screen, userEvent } = await renderStory(this, Text);

    const button = await screen.getByRole('button');

    assert.equal(button.textContent.trim(), Text.args.children);

    userEvent.click(button);

    await waitUntil(() => Text.args.onClick.calledOnce);

    await waitUntil(() => Text.args.onClick.calledWith(1));

    await takeSnapshot(this, Story);

    await a11yAudit(this);

    assert.ok(true, 'no a11y errors found!');
  });

  test('it renders emojis', async function (assert) {
    const { screen } = await renderStory(this, Emoji);

    const button = await screen.getByRole('button');

    assert.equal(button.textContent.trim(), Emoji.args.children);

    await takeSnapshot(this, Story);

    await a11yAudit(this);

    assert.ok(true, 'no a11y errors found!');
  });
});
