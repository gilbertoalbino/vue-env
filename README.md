# vue-env

A Simple plugin for loading an environment file.


## Install

~~~
> sudo npm install @websanova/vue-env
~~~


## Usage

For the simplest usage just include and the package will look for the local environment in the project root `./.env` and for default environment specific files in  `./src/env/` folder.

~~~
Vue.use(require('@websanova/vue-env'));
~~~

The env plugin will be available immediately after install.

~~~
Vue.env.get('SOME_VAR');
~~~

OR through the Vue instance.

~~~
this.$env.get('SOME_ENV_VAR');
this.$env.get('SOME_ENV_VAR', 'default value');

this.$env.set('key', 'val');
this.$env.set({key: 'val', key2: 'val2'});
~~~


## Setting the Environment

The environment values can be initialized three ways and will override each other.

When setting the environment it must always be a valid JSON object.

### 1. Default on Install

~~~
Vue.use(require('@websanova/vue-env'), {APP_URL: 'https://example.com'});
~~~

### 2. App Presets

~~~
./src/
    ./env/
        ./local.js
        ./staging.js
        ./production.js
~~~

### 3. Local .env File

Must be located at root of project.

Note that this file is named `.env` but should return a valid Javascript object.

~~~
module.exports = {
    APP_URL: 'https://example.com'
};
~~~


## Note

As a side note, it's generally not a good idea to commit the `.env` file. It's best to keep an `example.env` file that is committed instead.
