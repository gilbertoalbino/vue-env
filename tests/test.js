var Vue = require('vue');

Vue.use(require('../src/index.js'), {
    env: process.env.NODE_ENV,
    envVar: 'APP_ENV',
    envFilePath: '../tests/env.js',
    envFolderPath: '../tests/env'
});

var _vue = new Vue;

console.log(_vue.$env);