import { hbs } from 'ember-cli-htmlbars';

const template = hbs`<Button {{action onClick}}>{{children}}</Button>`;

export default {
  title: 'Button',
  argTypes: {
    children: { control: 'text' },
  },
  template,
};

export const Text = (context) => ({
  template,
  context,
});
Text.args = {
  children: 'hello',
};

export const Emoji = (context) => ({
  template,
  context,
});
Emoji.args = {
  children: '😀 😎 👍 💯',
};
