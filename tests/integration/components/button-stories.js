import { hbs } from 'ember-cli-htmlbars';

const template = hbs`<Button @onClick={{this.onClick}}>{{this.children}}</Button>`;

export default {
  component: 'Button',
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
  onClick: () => console.log('hello from storybook'),
};

export const Emoji = (context) => ({
  template,
  context,
});
Emoji.template = template;
Emoji.args = {
  children: '😀 😎 👍 💯',
};
