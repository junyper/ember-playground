import { hbs } from 'ember-cli-htmlbars';

const template = hbs`<Button {{action onClick}}>{{children}}</Button>`;

export default {
  title: 'Button',
  argTypes: {
    children: { control: 'text' },
  },
};

export const Text = (context) => ({
  template,
  context,
});
Text.template = template;
Text.args = {
  children: 'hello',
};

export const Emoji = (context) => ({
  template,
  context,
});
Emoji.template = template;
Emoji.args = {
  children: '😀 😎 👍 💯',
};
