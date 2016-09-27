var Vue = require('vue');

var _envLocal = require('../tests/env.js'),
    _envDefault = require('../tests/env/' + _envLocal.APP_ENV + '.js');

Vue.use(require('../src/index.js'), {
    env: process.env.NODE_ENV,
    local: _envLocal,
    default: _envDefault
});

var _vue = new Vue;

console.log(_vue.$env);