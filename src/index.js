const parser = require('fast-xml-parser')

module.exports = function(xliffSource) {
  this.cacheable()
  const allStrings = {}
  const xliffJson = parser.parse(xliffSource, {
    attributeNamePrefix: '_',
    ignoreAttributes: false,
  })
  xliffJson.xliff.file.body['trans-unit'].forEach(unit => {
    allStrings[unit._resname] = unit.target
  })
  return `module.exports = ${JSON.stringify(allStrings, undefined, 2)}`
}
