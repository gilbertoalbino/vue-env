# vue-env

A Simple plugin for loading an environment file.


## Install

~~~
> sudo npm install @websanova/vue-store
~~~


## Usage

Not that all the options have defaults (values below) and should not have to be set if following the convention.

~~~
Vue.use(require('../src/index.js'), {
    env: process.env.NODE_ENV,
    envVar: 'APP_ENV',
    envFilePath: '../../env.js',
    envFolderPath: '../../src/env'
});
~~~

After that just use the `get()` method to fetch environment constants.

~~~
this.$env.get('SOME_ENV_VAR');
this.$env.get('SOME_ENV_VAR', 'default value');

this.$env.set('key', 'val');
this.$env.set({key: 'val', key2: 'val2'});
~~~


## Options

### env

Allows you to set the environment from the local node process. Useful when deploying to multiple machines.

### envVar

If `env` is not set it will auto load the `env.js` file and try to get the environment form there. The default is 'APP_ENV`.

### envFilePath

The default will check for the `env.js` file in the route, but you this allows you to specify an alternate route.

Note that this is a strict local config file and should NOT be committed. For any environment variables to be shared among machines or developers set them in the appropriate file in the `envFolderPath`.

### envFolderPath

The folder to store your environment specific files. The file name matches the environment name. This is the base file and any value in `envFilePath` will override the values form the file here.


## Note

As a side note, it's generally not a good idea to commit the `env.js` file. It's best to keep an `example.env.js` file that is committed instead.