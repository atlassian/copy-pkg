# copy-pkg

[![Atlassian license](https://img.shields.io/badge/license-Apache%202.0-blue.svg?style=flat-square)](LICENSE) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](CONTRIBUTING.md)

Copy a `package.json`

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

## Installation

```sh
yarn add copy-pkg
```


**Options**

- `opts.normalize` (`--normalize`, `-n`) - Normalize the package.json contents (boolean)
- `opts.ignore` (`--ignore`, `-i`) - Select keys not to copy (array)
- `opts.only` (`--only`, `-o`) - Select keys to copy (array)

## Contributions

Contributions to [Project name] are welcome! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for details. 

## License

Copyright (c) 2017 - 2022 Atlassian and others.
Apache 2.0 licensed, see [LICENSE](LICENSE) file.

## Related

- [read-pkg](https://github.com/sindresorhus/read-pkg)
- [write-pkg](https://github.com/sindresorhus/write-pkg)

[![With Thanks! from Atlassian](https://raw.githubusercontent.com/atlassian-internal/oss-assets/master/banner-with-thanks-light.png)](https://www.atlassian.com)

