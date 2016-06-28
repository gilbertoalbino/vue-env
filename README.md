# vue-env

A Simple plugin for loading an environment file.

## Usage

Just make sure there is an `env.js` file in the project root.

~~~
Vue.use(require('vue-env'));
~~~

There is also an optional parameter to specify the file to use.

~~~
Vue.use(require('vue-env'), require('./env.js'));
~~~

A secondary parameter can be set right away also for environment specific config.

~~~
import _env from './env.js';
Vue.use(require('vue-env'), _env, require('./config/' + _env.APP_ENV + '.js'));
~~~


After that just use the `get()` method to fetch environment constants.

~~~
this.$env.get('SOME_ENV_VAR');
this.$env.get('SOME_ENV_VAR', 'default value');

this.$env.set('key', 'val');
this.$env.set({key: 'val', key2: 'val2'});
~~~

## Sample

Here is a sample of what the `env.js` file should look like.

~~~
module.exports = {
    DEBUG: true,
    APP_ENV: 'local',

    ...
};
~~~


## Note

As a side note, it's generally not a good idea to commit the `env.js` file. It's best to keep an `example.env.js` file that is committed instead.