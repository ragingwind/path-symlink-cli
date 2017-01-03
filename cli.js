#!/usr/bin/env node
'use strict';
const meow = require('meow');
const pathSymlinkCli = require('./');

const cli = meow(`
	Usage
	  $ path-symlink-cli [path ...dest]

	Options
	  --strip Strip extension string in filename [Default: true]

	Examples
	  $ path-symlink-cli **/*.symlink "Google Drive/dotfiles" $HOME
`);

if (cli.input.length < 2) {
	console.error('Invalid arguments');
	process.exit(-1);
}

const dest = cli.input.pop();

console.log(cli);
// console.log(pathSymlinkCli(cli.input, dest));
