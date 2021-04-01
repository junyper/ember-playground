import { render } from '@ember/test-helpers';
import percySnapshot from '@percy/ember';
import { getQueriesForElement, waitFor } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import { a11yAudit as a11yAuditBase } from 'ember-a11y-testing/test-support';
import { config } from 'qunit';

export const renderStory = async (context, Story) => {
  if (Story.args) {
    Object.keys(Story.args).forEach((key) => {
      context.set(key, Story.args[key]);
    });
  }

  await render(Story.template);

  return {
    element: getQueriesForElement(context.element),
  };
};

export const takeSnapshot = async (context, Story, options) => {
  await percySnapshot(
    `${Story.title || Story.component}_${config.current.testName}`,
    options
  );
};

export const a11yAudit = async (context, options) => {
  await a11yAuditBase(context.element, options);
};

export { waitFor, userEvent };
