const { parse } = require('fast-xml-parser')
const { decode } = require('he')

module.exports = function(xliffSource) {
  this.cacheable()
  const allStrings = {}
  const xliffJson = parse(xliffSource, {
    attributeNamePrefix: '_',
    ignoreAttributes: false,
    tagValueProcessor: s => decode(s),
  })
  xliffJson.xliff.file.body['trans-unit'].forEach(unit => {
    allStrings[unit._resname] = unit.target
  })
  return `module.exports = ${JSON.stringify(allStrings, undefined, 2)}`
}
