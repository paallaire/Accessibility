const _ = require('lodash');

module.exports = function ({
  addComponents, e, theme, variants,
}) {
  const container = theme('container', {});
  const screens = theme('screens', {});
  const components = _.map(container.units, (value, name) => ({

    [`.${e(`container-${name}`)}`]: {
      maxWidth: `${value}`,
      marginLeft: 'auto',
      marginRight: 'auto',
    },

    [`.${e(`container-${name}-px`)}`]: {
      maxWidth: `${value}`,
      marginLeft: 'auto',
      marginRight: 'auto',
      paddingLeft: theme('container.spacing.sm'),
      paddingRight: theme('container.spacing.sm'),

      // md
      [`@media (min-width: ${screens.md})`]: {
        paddingLeft: theme('container.spacing.md'),
        paddingRight: theme('container.spacing.md'),
      },

      // xl
      [`@media (min-width: ${screens.xl})`]: {
        paddingLeft: theme('container.spacing.xl'),
        paddingRight: theme('container.spacing.xl'),
      },

      // 3xl
      [`@media (min-width: ${screens['3xl']})`]: {
        paddingLeft: theme('container.spacing.3xl'),
        paddingRight: theme('container.spacing.3xl'),
      },

    },
  }));

  addComponents(components, ['responsive']);
};
