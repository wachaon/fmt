const prettier = require('@wachaon/prettier')

const source = 'function foo(  a,b ){return a +b}'
console.log(prettier.format(source))
