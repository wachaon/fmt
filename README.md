# fmt
This module enables wes to run [prettier](https://github.com/prettier/prettier)

This module updated the corresponding [prettier](https://github.com/prettier/prettier) version to `2.0.5`

## install

```
wes install @wachaon/fmt
```

## usage

When used as a script

```javascript
const prettier = require('@wachaon/fmt')

const option = {
    tabWidth: 2
}
const source = 'function foo(  a,b ){return a +b}'
console.log(prettier.format(source, option))
```

When used as a CLI
```shell
wes @wachaon/fmt usage -w
```

## CLI option

| name      | short name | description                 |
|-----------|------------|-----------------------------|
| `--write` | `-w`       | Overwrite and save the file |