'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = require('../../isWithinInterval/index.js');

var _index2 = _interopRequireDefault(_index);

var _index3 = require('../_lib/convertToFP/index.js');

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by `scripts/buildFP.js`. Please, don't change it.

var isWithinInterval = (0, _index4.default)(_index2.default, 2);

exports.default = isWithinInterval;
module.exports = exports['default'];