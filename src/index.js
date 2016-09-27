module.exports = (function () {

    function Env(options) {
        var envLocal = options.local || require('../../../../src/env.js'),
            envDefault = options.default || require('../../../../src/env/' + (options.env || envLocal.APP_ENV) + '.js');

        this.data = Object.assign(envDefault, envLocal);
    }

    Env.prototype.get = function (key, def) {
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
        Vue.prototype.$env = new Env(options || {});
    }

})();