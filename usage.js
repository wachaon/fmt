/* test
const prettier = require('node_modules/prettier')
const babel = require('node_modules/babel')
*/

const { prettier, babel } = require( '@wachaon/prettier' )

const log = require('log')
// log(()=> prettier.format)

const opt = {
    parser: 'babel',
    plugins: [ babel ]
}
const source = 'function foo(  a,b ){return a +b}'
console.log( prettier.format( source, opt ) )