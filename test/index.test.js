const compiler = require('./compiler')

async function snapshotTestXliffFile(xliffPath) {
  const stats = await compiler(xliffPath)
  const output = stats.toJson().modules[0].source
  expect(output).toMatchSnapshot()
}

test('Transpiles simple xliff', () => snapshotTestXliffFile('./simple.xlf'))
test('Transpiles unicode xliff', () => snapshotTestXliffFile('./unicode.xlf'))
test('Transpiles special character xliff', () => snapshotTestXliffFile('./specialChars.xlf'))
test('Decodes HTML entities', () => snapshotTestXliffFile('./entities.xlf'))
