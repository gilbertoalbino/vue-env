function Env(params) {
    if ( ! params) {
        try {
            params = require('../../env.js');
        }
        catch(e) {
            params = {};
        }
    }

    this.params = params;
}

Env.prototype.get = function (key, def) {
    return this.params[key] || def;
}

function install(Vue, params) {
    Vue.prototype.$env = new Env(params);
}

module.exports = install;