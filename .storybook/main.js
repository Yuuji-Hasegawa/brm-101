/** @type { import('@storybook/html-vite').StorybookConfig } */

const config = {
	stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
	staticDirs: ['../public'],
  addons: [
    '@storybook/manager-api',
    '@storybook/preview-api',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
		'@storybook/addon-interactions',
		'@storybook/addon-themes',
	],
  framework: {
    name: '@storybook/html-vite',
    options: {},
  },
}
export default config
