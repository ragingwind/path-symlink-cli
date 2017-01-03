# path-symlink-cli [![Build Status](https://travis-ci.org/ragingwind/path-symlink-cli.svg?branch=master)](https://travis-ci.org/ragingwind/path-symlink-cli)

> CLI for path-symlink


## Install

```
$ npm install --save path-symlink-cli
```


## Usage

```js
const pathSymlinkCli = require('path-symlink-cli');

pathSymlinkCli('unicorns');
//=> 'unicorns & rainbows'
```


## API

### pathSymlinkCli(input, [options])

#### input

Type: `string`

Lorem ipsum.

#### options

##### foo

Type: `boolean`<br>
Default: `false`

Lorem ipsum.


## CLI

```
$ npm install --global path-symlink-cli
```

```
$ path-symlink-cli --help

  Usage
    path-symlink-cli [input]

  Options
    --foo  Lorem ipsum [Default: false]

  Examples
    $ path-symlink-cli
    unicorns & rainbows
    $ path-symlink-cli ponies
    ponies & rainbows
```


## License

MIT © [ragingwind](http://ragingwind.me)
