/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.onCreateWebpackConfig = ({ stage, rules, loaders, plugins, actions }) => {
  actions.setWebpackConfig({
    module: {
      rules: [
        {
          test: /locales/,
          loader: '@alienfast/i18next-loader',
          options: {
            relativePathAsNamespace: true,
          }
        }
      ]
    }
  })
}
