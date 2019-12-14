# prettier
prettier running on wes

## install

```
wes install @wachaon/prettier
```

## usage

```javascript
const { prettier, babylon } = require( '@wachaon/prettier' )
const opt = {
    parser: 'babel',
    plugins: [ babylon ]
}
const source = 'var one = { a: 2, "b":1}'
console.log( prettier.format( source, opt ) )
```