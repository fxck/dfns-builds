'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isSunday;

var _index = require('../toDate/index.js');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name isSunday
 * @category Weekday Helpers
 * @summary Is the given date Sunday?
 *
 * @description
 * Is the given date Sunday?
 *
 * @param {Date|String|Number} date - the date to check
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Boolean} the date is Sunday
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Is 21 September 2014 Sunday?
 * var result = isSunday(new Date(2014, 8, 21))
 * //=> true
 */
function isSunday(dirtyDate, dirtyOptions) {
  return (0, _index2.default)(dirtyDate, dirtyOptions).getDay() === 0;
}
module.exports = exports['default'];