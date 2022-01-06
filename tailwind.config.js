/* eslint-disable global-require */
// tailwind.config.js
const defaultTheme = require('tailwindcss/defaultTheme');
const spacingUnits = require('./assets/tailwindcss/units/generateUnitByMultiplicator')(4, 100);
const fontSizeUnit = require('./assets/tailwindcss/units/generateUnitByMultiplicator')(2, 50);

module.exports = {
  mode: 'jit',
  purge: [
    './assets/**/*.js',
    './assets/**/*.jsx',
    './assets/**/*.ts',
    './assets/**/*.vue',
    './docs/*.html',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      spacing: {
        sm: '20px',
        md: '30px',
        xl: '60px',
        '3xl': '120px',
      },
      units: {
        860: '860px',
        1000: '1000px',
        1060: '1060px',
        1100: '1100px',
        1280: '1280px',
        1360: '1360px',
        1380: '1380px',
        1660: '1660px',
        1920: '1920px',
        fluid: '100%',
      },
    },
    screens: {
      xs: '375px',
      sm: '500px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1440px',
      '3xl': '1920px',
    },
    lineHeight: {
      none: '1',
      tight: '1.2',
      snug: '1.3',
      normal: '1.5',
      relaxed: '1.625',
      loose: '2',
    },
    spacing: {
      0: '0',
      gutter: '10px',
      '1px': '1px',
      '2px': '2px',
      '3px': '3px',
      '4px': '4px',
      '6px': '6px',
      '7px': '7px',
      '8px': '8px',
      '9px': '9px',
      '1/2': '50%',
      '1/3': '33.333333%',
      '2/3': '66.666667%',
      '1/4': '25%',
      '2/4': '50%',
      '3/4': '75%',
      '1/5': '20%',
      '2/5': '40%',
      '3/5': '60%',
      '4/5': '80%',
      '1/6': '16.666667%',
      '2/6': '33.333333%',
      '3/6': '50%',
      '4/6': '66.666667%',
      '5/6': '83.333333%',
      '1/12': '8.333333%',
      '2/12': '16.666667%',
      '3/12': '25%',
      '4/12': '33.333333%',
      '5/12': '41.666667%',
      '6/12': '50%',
      '7/12': '58.333333%',
      '8/12': '66.666667%',
      '9/12': '75%',
      '10/12': '83.333333%',
      '11/12': '91.666667%',
      ...spacingUnits,
      ...defaultTheme.width,
    },
    fontFamily: {
      inter: ['Inter', 'sans-serif'],
    },
    fill: {
      current: 'currentColor',
      transparent: 'transparent',
    },
    extend: {
      maxWidth: {
        ...spacingUnits,
      },
      minWidth: {
        ...spacingUnits,
      },
      maxHeight: {
        ...spacingUnits,
      },
      minHeight: {
        ...spacingUnits,
      },
      zIndex: {
        '-1': '-1',
        1: 1,
        10: 10,
        20: 20,
        30: 30,
        40: 40,
        50: 50,
        60: 60,
        70: 70,
        80: 80,
        90: 90,
        100: 100,
        overlay: 200,
        modal: 201,
        navmobile: 202,
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        fadeOut: {
          '0%': { opacity: 1 },
          '100%': { opacity: 0 },
        },
      },
      animation: {
        fadeIn: 'fadeIn 200ms ease forwards',
        fadeOut: 'fadeOut 200ms ease forwards',
      },
      transitionProperty: {
        height: 'height',
        maxHeight: 'max-height',
      },
      transitionDuration: {
        fast: '200ms',
        medium: '400ms',
        slow: '600ms',
      },
      typography: {
        DEFAULT: {
          css: {
            color: 'currentColor',
            maxWidth: 'none',
            a: {
              color: '#03030E',
              textDecoration: 'underline',
              '&:hover': {
                color: '#03030E',
                textDecoration: 'none',
              },
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography')({
      className: 'wysiwyg',
    }),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms')({
      strategy: 'class',
    }),
    require('./assets/tailwindcss/plugins/debug-screens'),
    require('./assets/tailwindcss/plugins/container'),
    require('tailwind-css-variables')(
      {
        colors: false,
        screens: 'screen',
        fontFamily: false,
        fontSize: false,
        fontWeight: false,
        lineHeight: false,
        letterSpacing: false,
        backgroundSize: false,
        borderWidth: false,
        borderRadius: false,
        width: false,
        height: false,
        minWidth: false,
        minHeight: false,
        maxWidth: false,
        maxHeight: false,
        padding: false,
        margin: false,
        boxShadow: false,
        zIndex: false,
        opacity: false,
      },
      {
        postcssEachVariables: true,
      },
    ),
  ],
  corePlugins: {
    container: false,
  },
};
