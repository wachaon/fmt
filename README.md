# prettier
This module enables wes to run [prettier](https://github.com/prettier/prettier)

This module updated the corresponding [prettier](https://github.com/prettier/prettier) version to `2.0.5`

## install

```
wes install @wachaon/prettier
```

## usage

```javascript
const { prettier, babel } = require( '@wachaon/prettier' )
const opt = {
    parser: 'babel',
    plugins: [ babel ]
}
const source = 'var one = { a: 2, "b":1}'
console.log( prettier.format( source, opt ) )
```