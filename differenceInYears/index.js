'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = differenceInYears;

var _index = require('../toDate/index.js');

var _index2 = _interopRequireDefault(_index);

var _index3 = require('../differenceInCalendarYears/index.js');

var _index4 = _interopRequireDefault(_index3);

var _index5 = require('../compareAsc/index.js');

var _index6 = _interopRequireDefault(_index5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name differenceInYears
 * @category Year Helpers
 * @summary Get the number of full years between the given dates.
 *
 * @description
 * Get the number of full years between the given dates.
 *
 * @param {Date|String|Number} dateLeft - the later date
 * @param {Date|String|Number} dateRight - the earlier date
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Number} the number of full years
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // How many full years are between 31 December 2013 and 11 February 2015?
 * var result = differenceInYears(
 *   new Date(2015, 1, 11),
 *   new Date(2013, 11, 31)
 * )
 * //=> 1
 */
function differenceInYears(dirtyDateLeft, dirtyDateRight, dirtyOptions) {
  var dateLeft = (0, _index2.default)(dirtyDateLeft, dirtyOptions);
  var dateRight = (0, _index2.default)(dirtyDateRight, dirtyOptions);

  var sign = (0, _index6.default)(dateLeft, dateRight, dirtyOptions);
  var difference = Math.abs((0, _index4.default)(dateLeft, dateRight, dirtyOptions));
  dateLeft.setFullYear(dateLeft.getFullYear() - sign * difference);

  // Math.abs(diff in full years - diff in calendar years) === 1 if last calendar year is not full
  // If so, result must be decreased by 1 in absolute value
  var isLastYearNotFull = (0, _index6.default)(dateLeft, dateRight, dirtyOptions) === -sign;
  return sign * (difference - isLastYearNotFull);
}
module.exports = exports['default'];