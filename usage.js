/* test
const prettier = require('node_modules/prettier')
const babel = require('node_modules/babel')
*/
const prettier = require( '@wachaon/prettier' )

require('log')(()=> wes.Modules[wes.main].path)
const source = 'function foo(  a,b ){return a +b}'

console.log( prettier.format( source ) )