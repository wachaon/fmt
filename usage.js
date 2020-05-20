const prettier = require('@wachaon/prettier')

const option = {
    tabWidth: 2
}
const source = 'function foo(  a,b ){return a +b}'
console.log(prettier.format(source, option))