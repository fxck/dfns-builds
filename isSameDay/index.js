'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isSameDay;

var _index = require('../startOfDay/index.js');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name isSameDay
 * @category Day Helpers
 * @summary Are the given dates in the same day?
 *
 * @description
 * Are the given dates in the same day?
 *
 * @param {Date|String|Number} dateLeft - the first date to check
 * @param {Date|String|Number} dateRight - the second date to check
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Boolean} the dates are in the same day
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Are 4 September 06:00:00 and 4 September 18:00:00 in the same day?
 * var result = isSameDay(
 *   new Date(2014, 8, 4, 6, 0),
 *   new Date(2014, 8, 4, 18, 0)
 * )
 * //=> true
 */
function isSameDay(dirtyDateLeft, dirtyDateRight, dirtyOptions) {
  var dateLeftStartOfDay = (0, _index2.default)(dirtyDateLeft, dirtyOptions);
  var dateRightStartOfDay = (0, _index2.default)(dirtyDateRight, dirtyOptions);

  return dateLeftStartOfDay.getTime() === dateRightStartOfDay.getTime();
}
module.exports = exports['default'];