import { hbs } from 'ember-cli-htmlbars';

export default {
  title: 'TemplateOnly',
  argTypes: {},
};

export const TemplateOnly = (context) => ({
  template: hbs`<TemplateOnly />`,
  context,
});
TemplateOnly.argTypes = {};
