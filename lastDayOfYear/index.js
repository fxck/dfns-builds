'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = lastDayOfYear;

var _index = require('../toDate/index.js');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name lastDayOfYear
 * @category Year Helpers
 * @summary Return the last day of a year for the given date.
 *
 * @description
 * Return the last day of a year for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|String|Number} date - the original date
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Date} the last day of a year
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // The last day of a year for 2 September 2014 11:55:00:
 * var result = lastDayOfYear(new Date(2014, 8, 2, 11, 55, 00))
 * //=> Wed Dec 31 2014 00:00:00
 */
function lastDayOfYear(dirtyDate, dirtyOptions) {
  var date = (0, _index2.default)(dirtyDate, dirtyOptions);
  var year = date.getFullYear();
  date.setFullYear(year + 1, 0, 0);
  date.setHours(0, 0, 0, 0);
  return date;
}
module.exports = exports['default'];