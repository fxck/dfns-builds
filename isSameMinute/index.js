'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isSameMinute;

var _index = require('../startOfMinute/index.js');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name isSameMinute
 * @category Minute Helpers
 * @summary Are the given dates in the same minute?
 *
 * @description
 * Are the given dates in the same minute?
 *
 * @param {Date|String|Number} dateLeft - the first date to check
 * @param {Date|String|Number} dateRight - the second date to check
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Boolean} the dates are in the same minute
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Are 4 September 2014 06:30:00 and 4 September 2014 06:30:15
 * // in the same minute?
 * var result = isSameMinute(
 *   new Date(2014, 8, 4, 6, 30),
 *   new Date(2014, 8, 4, 6, 30, 15)
 * )
 * //=> true
 */
function isSameMinute(dirtyDateLeft, dirtyDateRight, dirtyOptions) {
  var dateLeftStartOfMinute = (0, _index2.default)(dirtyDateLeft, dirtyOptions);
  var dateRightStartOfMinute = (0, _index2.default)(dirtyDateRight, dirtyOptions);

  return dateLeftStartOfMinute.getTime() === dateRightStartOfMinute.getTime();
}
module.exports = exports['default'];