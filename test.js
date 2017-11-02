// @flow
'use strict';
const copyPkg = require('./');
const path = require('path');
const readPkg = require('read-pkg');
const {createTempDirSync} = require('jest-fixtures');

const PKG_PATH = path.join(__dirname, 'package.json');
const PKG = require('./package.json');

test('copies a package.json', () => {
  let tmpDir = createTempDirSync();
  let tmpPath = path.join(tmpDir, 'package.json');

  return copyPkg(PKG_PATH, tmpPath).then(() => {
    return readPkg(tmpPath, { normalize: false });
  }).then(pkg => {
    expect(pkg).toEqual(PKG);
  });
});

test('normalize', () => {
  let tmpDir = createTempDirSync();
  let tmpPath = path.join(tmpDir, 'package.json');

  return copyPkg(PKG_PATH, tmpPath, { normalize: true }).then(() => {
    return readPkg(tmpPath, { normalize: false });
  }).then(pkg => {
    expect(pkg).toHaveProperty('_id');
  });
});

test('only', () => {
  let tmpDir = createTempDirSync();
  let tmpPath = path.join(tmpDir, 'package.json');

  return copyPkg(PKG_PATH, tmpPath, { only: ['name', 'version'] }).then(() => {
    return readPkg(tmpPath, { normalize: false });
  }).then(pkg => {
    expect(Object.keys(pkg)).toEqual(['name', 'version']);
  });
});

test('ignore', () => {
  let tmpDir = createTempDirSync();
  let tmpPath = path.join(tmpDir, 'package.json');

  return copyPkg(PKG_PATH, tmpPath, { ignore: ['name'] }).then(() => {
    return readPkg(tmpPath, { normalize: false });
  }).then(pkg => {
    expect(pkg).not.toHaveProperty('name');
  });
});
