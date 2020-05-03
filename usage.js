const { prettier, babylon } = require( '@wachaon/prettier' )
const opt = {
    parser: 'babel',
    plugins: [ babylon ]
}
const source = 'function foo(  a,b ){return a +b}'
console.log( prettier.format( source, opt ) )