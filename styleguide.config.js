const path = require('path')

module.exports = {
  sections: [
    {
      name: 'Introduction',
      content: 'docs/introduction.md',
    },
    {
      name: 'Documentation',
      sections: [
        {
          name: 'Installation',
          content: 'docs/installation.md',
          description: 'The description for the installation section',
        },
        {
          name: 'Configuration',
          content: 'docs/configuration.md',
        },
        {
          name: 'Live Demo',
          external: true,
          href: 'http://example.com',
        },
      ],
    },
    {
      name: 'UI Components',
      content: 'docs/ui.md',
      components: 'src/components/**/[A-Z]*.js',
      exampleMode: 'expand',
      usageMode: 'expand',
    },
  ],
  styleguideComponents: {
    Wrapper: path.join(__dirname, 'src/rsg-components/Wrapper'),
  },
  ignore: [
    'src/components/hoc/**',
    'src/components/templates/**',
    'src/components/pages/**',
    'src/components/App.js',
    'src/components/Root.js',
    'src/components/Routes.js',
    '**/__tests__/**',
    '**/*.test.{js,jsx,ts,tsx}',
    '**/*.spec.{js,jsx,ts,tsx}',
    '**/*.d.ts',
  ],
}
