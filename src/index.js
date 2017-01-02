module.exports = (function () {

    function Env(options) {
        var APP_ENV = null,
            _env = {},
            envLocal = {},
            envApp = {},
            envDefault = options.default || {},
            envFallback = {APP_ENV: 'production'};

        try { envLocal = require('../../../../.env'); } catch(e) { e; }
        
        APP_ENV = envLocal.APP_ENV || envDefault.APP_ENV || envFallback.APP_ENV;

        try { envApp = require('../../../../src/env/' + APP_ENV + '.js'); } catch(e) { e; }

        this.data = Object.assign(envDefault, envApp, envLocal);
    }

    Env.prototype.get = function (key, def) {
        if ( ! key) {
            return this.data;
        }

        return this.data[key] || def;
    };

    Env.prototype.set = function (key, val) {
        var i;

        if (typeof key === 'object') {
            for (i in key) {
                this.data[i] = key[i];
            }
        }
        else {
            this.data[key] = val;
        }
    };

    return function install(Vue, options) {
        var _env = new Env(options || {});

        Vue.env = _env;

        Vue.prototype.$env = _env;
    }

})();