'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = min;

var _index = require('../toDate/index.js');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name min
 * @category Common Helpers
 * @summary Return the earliest of the given dates.
 *
 * @description
 * Return the earliest of the given dates.
 *
 * @param {Date[]|String[]|Number[]} datesArray - the dates to compare
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Date} the earliest of the dates
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Which of these dates is the earliest?
 * var result = min(
 *  [
 *    new Date(1989, 6, 10),
 *    new Date(1987, 1, 11),
 *    new Date(1995, 6, 2),
 *    new Date(1990, 0, 1)
 *  ]
 * )
 * //=> Wed Feb 11 1987 00:00:00
 */
function min(datesArray, dirtyOptions) {
  var dates = datesArray.map(function (dirtyDate) {
    return (0, _index2.default)(dirtyDate, dirtyOptions);
  });
  var earliestTimestamp = Math.min.apply(null, dates);
  return new Date(earliestTimestamp);
}
module.exports = exports['default'];