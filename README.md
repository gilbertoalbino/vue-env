# vue-env

A Simple plugin for loading an environment file.


## Install

~~~
> sudo npm install @websanova/vue-store
~~~


## Usage

For the simplest usage just include and the package will look for the local environment in `./src/env.js` and for default environment specific files in  `./src/env/` folder.

~~~
Vue.use(require('@websanova/vue-env'));
~~~

The file name should match the environment name.

~~~
./src/
    ./env/
        ./local.js
        ./staging.js
        ./production.js
~~~

Because of limitations on webpack, if a different path is required it will need to a `require`. This is because the way polyfill's in webpack work.

~~~
var _envLocal = require('../tests/env.js'),
    _envDefault = require('../tests/env/' + _envLocal.APP_ENV + '.js');

Vue.use(require('@websanova/vue-env'), {
    local: _envLocal,
    default: _envDefault
});
~~~

If convention in the plugin is being followed then an `env` option can also be set if the environment is coming from the system.

Vue.use(require('@websanova/vue-env'), {
    env: process.env.NODE_ENV,
});

After that just use the `get()` method to fetch environment constants.

~~~
this.$env.get('SOME_ENV_VAR');
this.$env.get('SOME_ENV_VAR', 'default value');

this.$env.set('key', 'val');
this.$env.set({key: 'val', key2: 'val2'});
~~~


## Note

As a side note, it's generally not a good idea to commit the `env.js` file. It's best to keep an `example.env.js` file that is committed instead.