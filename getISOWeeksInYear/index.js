'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getISOWeeksInYear;

var _index = require('../startOfISOYear/index.js');

var _index2 = _interopRequireDefault(_index);

var _index3 = require('../addWeeks/index.js');

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MILLISECONDS_IN_WEEK = 604800000;

/**
 * @name getISOWeeksInYear
 * @category ISO Week-Numbering Year Helpers
 * @summary Get the number of weeks in an ISO week-numbering year of the given date.
 *
 * @description
 * Get the number of weeks in an ISO week-numbering year of the given date.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|String|Number} date - the given date
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Number} the number of ISO weeks in a year
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // How many weeks are in ISO week-numbering year 2015?
 * var result = getISOWeeksInYear(new Date(2015, 1, 11))
 * //=> 53
 */
function getISOWeeksInYear(dirtyDate, dirtyOptions) {
  var thisYear = (0, _index2.default)(dirtyDate, dirtyOptions);
  var nextYear = (0, _index2.default)((0, _index4.default)(thisYear, 60, dirtyOptions), dirtyOptions);
  var diff = nextYear.valueOf() - thisYear.valueOf();
  // Round the number of weeks to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)
  return Math.round(diff / MILLISECONDS_IN_WEEK);
}
module.exports = exports['default'];