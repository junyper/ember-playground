import { setJSONDoc } from '@storybook/addon-docs/ember';
import json from '../dist/storybook-docgen/index.json';

setJSONDoc(json);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}
