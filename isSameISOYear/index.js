'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isSameISOYear;

var _index = require('../startOfISOYear/index.js');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name isSameISOYear
 * @category ISO Week-Numbering Year Helpers
 * @summary Are the given dates in the same ISO week-numbering year?
 *
 * @description
 * Are the given dates in the same ISO week-numbering year?
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|String|Number} dateLeft - the first date to check
 * @param {Date|String|Number} dateRight - the second date to check
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Boolean} the dates are in the same ISO week-numbering year
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Are 29 December 2003 and 2 January 2005 in the same ISO week-numbering year?
 * var result = isSameISOYear(
 *   new Date(2003, 11, 29),
 *   new Date(2005, 0, 2)
 * )
 * //=> true
 */
function isSameISOYear(dirtyDateLeft, dirtyDateRight, dirtyOptions) {
  var dateLeftStartOfYear = (0, _index2.default)(dirtyDateLeft, dirtyOptions);
  var dateRightStartOfYear = (0, _index2.default)(dirtyDateRight, dirtyOptions);

  return dateLeftStartOfYear.getTime() === dateRightStartOfYear.getTime();
}
module.exports = exports['default'];