'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = max;

var _index = require('../toDate/index.js');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name max
 * @category Common Helpers
 * @summary Return the latest of the given dates.
 *
 * @description
 * Return the latest of the given dates.
 *
 * @param {Date[]|String[]|Number[]} datesArray - the dates to compare
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Date} the latest of the dates
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Which of these dates is the latest?
 * var result = max(
 *  [
 *    new Date(1989, 6, 10),
 *    new Date(1987, 1, 11),
 *    new Date(1995, 6, 2),
 *    new Date(1990, 0, 1)
 *  ]
 * )
 * //=> Sun Jul 02 1995 00:00:00
 */
function max(datesArray, dirtyOptions) {
  var dates = datesArray.map(function (dirtyDate) {
    return (0, _index2.default)(dirtyDate, dirtyOptions);
  });
  var latestTimestamp = Math.max.apply(null, dates);
  return new Date(latestTimestamp);
}
module.exports = exports['default'];