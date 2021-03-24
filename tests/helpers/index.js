import { render } from '@ember/test-helpers';
import percySnapshot from '@percy/ember';

export const renderStory = async (context, template, args = {}) => {
  Object.keys(args).forEach((key) => {
    context.set(key, args[key]);
  });

  await render(template);
};

export const takeSnapshot = async (Component, name, options) => {
  await percySnapshot(`${Component.title}_${name}`, options);
};
