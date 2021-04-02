import { hbs } from 'ember-cli-htmlbars';

const template = hbs`<Test />`;

export default {
  component: 'Test',
  title: 'Test',
  argTypes: {},
};

export const Test = (context) => ({
  template,
  context,
});
Test.template = template;
