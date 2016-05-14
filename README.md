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

After that just use the `get()` method to fetch environment constants.

~~~
this.$env.get('SOME_ENV_VAR');
this.$env.get('SOME_ENV_VAR', 'default value');
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