module.exports = (function () {

    function _set(params, key, val) {
        var i;

        if ( ! key) { return; }

        params = params || {};

        if (typeof key === 'object') {
            for (i in key) {
                params[i] = key[i];
            }
        }
        else {
            params[key] = val;
        }

        return params;
    }

    function Env(env, conf) {
        if ( ! env) {
            try {
                env = require('../../env.js');
            }
            catch(e) {
                env = {};
            }
        }

        this.params = _set(env, conf);
    }

    Env.prototype.get = function (key, def) {
        return this.params[key] || def;
    };

    Env.prototype.set = function (key, val) {
        this.params = _set(this.params, key, val);
    };

    return function install(Vue, env, conf) {
        Vue.prototype.$env = new Env(env, conf);
    }

})();