const { readTextFileSync, writeTextFileSync } = require('filesystem')
const { resolve, extname } = require('pathname')

const prettier = require('/node_modules/prettier')
const babel = require('/node_modules/babel')

const defaultOption = {
    parser: 'babel',
    plugins: [babel],
    semi: false,
    singleQuote: true,
    bracketSpacing: true,
    endOfLine: 'crlf',
    tabWidth: 4,
    printWidth: 120,
    trailingComma: 'none'
}

// Whether it was executed directly on the command line
const CLI = wes.Modules[wes.main].path === __filename

// When called as a script from the command line
if (CLI) {
    const { unnamed, named } = require('argv')
    return prettier_format.apply(null, [...unnamed, named].slice(1))
}

// processing
function _isObject(obj) {
    if (obj == null) return false
    return Object.prototype.toString.call(obj) === '[object Object]'
}
function _has(obj, key) {
    return _isObject(obj) && key in obj
}

function normalizeOption(key) {
    return (
        key !== 'engine' ||
        key !== 'debug' ||
        key !== 'monotone' ||
        key !== 'w' ||
        key !== 'write' ||
        key !== 'safe' ||
        key !== 'usual' ||
        key !== 'unsafe' ||
        key !== 'dangerous'
    )
}
function normalizeSpec(spec) {
    const filespec = extname(spec) === '.js' || extname(spec) === '.json' ? spec : `${spec}.js`
    return resolve(process.cwd(), filespec)
}

function prettier_format(spec, opt = {}) {
    const source = CLI ? readTextFileSync(normalizeSpec(spec)) : spec
    const canWritable = _has(opt, 'w') || _has(opt, 'write')

    const _parameter = {}
    Object.keys(opt)
        .filter(normalizeOption)
        .forEach((key) => (_parameter[key] = opt[key]))

    const parameter = Object.assign(defaultOption, _parameter)

    let result
    try {
        result = prettier.format(source, parameter)
    } catch (error) {
        console.log(error)
    }

    if (!CLI) return result
    if (canWritable) {
        const filespec = normalizeSpec(spec)
        writeTextFileSync(filespec, result)
        console.log(`"${filespec}" format completed.`)
    } else console.log(result)
}

module.exports = { format: prettier_format }
