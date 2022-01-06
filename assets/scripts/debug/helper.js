const searchTermsDev = ['local', 'dev', 'stage', 'test'];

const elHtml = document.querySelector('html');
const lang = elHtml.getAttribute('lang') !== null ? elHtml.getAttribute('lang') : 'en';
const isDev = searchTermsDev.some((el) => window.location.href.includes(el));

const screens = {};
const screensUnits = getComputedStyle(document.documentElement).getPropertyValue('--screens').split(',');

screensUnits.forEach((el, index) => {
  const name = el.replace(/\s/g, '');
  const value = parseInt(getComputedStyle(document.documentElement).getPropertyValue(`--screen-${el}`).replace(/\s/g, '').replace('px', ''), 10);

  screens[name] = Number.isNaN(value) ? 0 : value;
});

export { lang, isDev, screens };
