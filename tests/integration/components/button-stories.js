import { hbs } from 'ember-cli-htmlbars';

const template = hbs`<Button @onClick={{this.onClick}}>{{this.children}}</Button>`;
const Story = (context) => ({
  template,
  context,
});

export default {
  component: 'Button',
  title: 'Button',
  argTypes: {
    children: { control: 'text' },
  },
};

export const Text = Story.bind(null);
Text.args = {
  children: 'hello',
  onClick: () => console.log('hello from storybook'),
};

export const Emoji = Story.bind(null);
Emoji.args = {
  children: '😀 😎 👍 💯',
};
