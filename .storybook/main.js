module.exports = {
  stories: [
    "../tests/**/*-stories.[tj]s"
  ],
  addons: [
    '@storybook/addon-postcss',
    {
      name: '@storybook/addon-docs',
      options: {
        sourceLoaderOptions: null,
      },
    },
    "@storybook/addon-controls",
    "@storybook/addon-a11y",
    "@storybook/addon-backgrounds",
    "@storybook/addon-toolbars",
    "@storybook/addon-viewport"
  ]
};
