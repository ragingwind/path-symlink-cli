#!/usr/bin/env node
'use strict';
const meow = require('meow');
const unenvify = require('enenvify');
const untildify = require('untildify');
const pathSymlink= require('path-symlink');

const cli = meow(`
	Usage
	  $ path-symlink-cli [path ...dest]

	Options
	  --strip Strip extension string in filename [Default: false]

	Examples
	  $ path-symlink-cli **/*.symlink "$HOME/Google Drive/dotfiles" $HOME
`);

if (cli.input.length < 2) {
	console.error('Invalid arguments');
	process.exit(-1);
}

const dest = cli.input.pop();
pathSymlink(cli.input.map(p => unenvify(untildify(p))), dest, cli.flags).then(links => {
	links.map(link => console.log(`Create a link to ${link}`));
});
