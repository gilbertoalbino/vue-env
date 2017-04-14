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

The file name should match the environment name.

~~~
./src/
    ./env/
        ./local.js
        ./staging.js
        ./production.js
~~~

The env plugin will be available immediately after install.

~~~
Vue.env.get();
~~~

OR through the Vue instance.

~~~
this.$env.get('SOME_ENV_VAR');
this.$env.get('SOME_ENV_VAR', 'default value');

this.$env.set('key', 'val');
this.$env.set({key: 'val', key2: 'val2'});
~~~


## Note

As a side note, it's generally not a good idea to commit the `.env` file. It's best to keep an `example.env` file that is committed instead.
