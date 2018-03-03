var _dot = require('@websanova/vue-dot');

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

        this.watch = new options.Vue({
            data: function () {
                return {
                    data: {}
                };
            }
        });

        _dot.merge(this.watch.data, envDefault);
        _dot.merge(this.watch.data, envApp);
        _dot.merge(this.watch.data, envLocal);
    }

    Env.prototype.get = function (key, def) {
        return _dot.get(key, this.watch.data) || def;
    };

    Env.prototype.set = function (key, val) {
        _dot.set(key, val, this.watch.data);
    };

    return function install(Vue, options) {
        var env;

        options = options || {};

        options.Vue = Vue;

        env = new Env(options);

        Vue.env = env;

        Vue.prototype.$env = env;

        Object.defineProperties(Vue.prototype, {
            $env: {
                get: function() {
                    return env;
                }
            }
        });
    }
})();