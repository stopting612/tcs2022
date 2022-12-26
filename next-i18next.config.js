const path = require('path');


module.exports = {
  i18n: {
    defaultLocale: "zh-CN",
    locales: ["EN", "zh-CN"],
    localeDetection: false,
    localePath: path.resolve('./public/locales'),
    reloadOnPrerender: process.env.NODE_ENV === 'development',    
  },
};