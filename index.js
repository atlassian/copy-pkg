// @flow
'use strict';

const readPkg = require('read-pkg');
const writePkg = require('write-pkg');

/*::
type Options = {
  only?: Array<string> | null,
  ignore?: Array<string> | null,
  normalize?: boolean,
};
*/

function selectKeys(pkg, keys) {
  let res = {};
  keys.forEach(key => {
    if (typeof pkg[key] !== 'undefined') {
      res[key] = pkg[key]
    }
  });
  return res;
}

function dropKeys(pkg, keys) {
  let res = {};
  Object.keys(pkg).forEach(key => {
    if (!keys.includes(key)) {
      res[key] = pkg[key];
    }
  });
  return res;
}

function filter(pkg, opts) {
  let filtered = pkg;
  if (opts.only) filtered = selectKeys(filtered, opts.only);
  if (opts.ignore) filtered = dropKeys(filtered, opts.ignore);
  return filtered;
}

module.exports = (source /*: string */, dest /*: string */, opts /*: Options */ = {}) => {
  return readPkg(source, {
    normalize: opts.normalize || false,
  }).then(pkg => {
    let filtered = filter(pkg, opts);
    return writePkg(dest, filtered);
  });
};

module.exports.sync = (source /*: string */, dest /*: string */, opts /*: Options */ = {}) => {
  let pkg = readPkg.sync(source, {
    normalize: opts.normalize || false,
  });
  let filtered = filter(pkg, opts);
  writePkg.sync(dest, filtered);
};
