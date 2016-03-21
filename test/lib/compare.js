var Inky = require('../../lib/inky');
var cheerio = require('cheerio');
var htmlEqual = require('assert-html-equal');

/**
 * Takes HTML input, runs it through the Inky parser, and compares the output to what's expected.
 * @param {string} input - HTML input.
 * @param {string} expected - Expected HTML output.
 * @throws {Error} Throws an error if the output is not identical.
 */
module.exports = function compare(input, expected) {
  var inky = new Inky();
  var $ = cheerio.load(input);
  var output = inky.releaseTheKraken($).xml();

  htmlEqual(output, expected);
}
