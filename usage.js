const { prettier, babylon } = require( '@wachaon/prettier' )

console.log( prettier.format( 'var one = { a: 2, "one":1}', { parser: 'babel', plugins: [ babylon ] } ) )