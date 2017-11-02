#!/usr/bin/env node
// @flow
'use strict';

const meow = require('meow');
const pkgCopy = require('./');

const cli = meow(`
	Usage
	  $ pkg-copy <source> <dest>

  Options
    --only, -o        Select keys to copy
    --ignore, -i      Select keys not to copy
    --normalize, -n   Normalize the package.json

	Example
	  $ pkg-copy package.json dist/package.json --only name,version
`, {
  flags: {
    only: {
      type: 'string',
      alias: 'o'
    },
    ignore: {
      type: 'string',
      alias: 'i'
    },
    normalize: {
      type: 'boolean',
      alias: 'n'
    }
  }
});

const [source, dest] = cli.input;
const {only, ignore, normalize} = cli.flags;

pkgCopy.sync(source, dest, {
  only: only ? only.split(',') : null,
  ignore: ignore ? ignore.split(',') : null,
  normalize,
});
