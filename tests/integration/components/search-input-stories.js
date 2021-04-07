import { hbs } from 'ember-cli-htmlbars';

export default {
  title: 'SearchInput',
  argTypes: {},
};

export const WithValue = (context) => ({
  template: hbs`<SearchInput
    @label={{this.label}}
    @value={{this.value}}
    @onSearch={{this.onSearch}}
  />`,
  context,
});
WithValue.args = {
  label: 'Search',
  value: 'hello',
  onSearch: (event) => console.log(event),
};
