/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const componentGenerator = require('./generators/component')
const pageGenerator = require('./generators/page')

module.exports = (plop) => {
  componentGenerator(plop)
  pageGenerator(plop)
}
