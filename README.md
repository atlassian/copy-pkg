# copy-pkg

> Copy a `package.json`

## Install

```sh
yarn add copy-pkg
```

## Usage

```sh
copy-pkg package.json dist/package.json --only name,version
```

```js
const copyPkg = require('copy-pkg');

copyPkg('package.json', 'dist/package.json', {
  ignore: ['devDependencies'],
});

copyPkg.sync('package.json', 'dist/package.json', {
  normalize: true,
});
```

**Options**

- `opts.normalize` (`--normalize`, `-n`) - Normalize the package.json contents (boolean)
- `opts.ignore` (`--ignore`, `-i`) - Select keys to copy (array)
- `opts.only` (`--only`, `-o`) - Select keys not to copy (array)

## Related

- [read-pkg](https://github.com/sindresorhus/read-pkg)
- [write-pkg](https://github.com/sindresorhus/write-pkg)
