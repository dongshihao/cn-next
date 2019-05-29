'use strict';

exports.__esModule = true;

var _util = require('../util');

var util = _interopRequireWildcard(_util);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 *  Rule for validating a regular expression pattern.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param errors An array of errors that this rule may add
 *  validation errors to.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */
function pattern(rule, value, errors, options) {
    if (rule.pattern) {
        if (rule.pattern instanceof RegExp) {
            if (!rule.pattern.test(value)) {
                errors.push(util.format(options.messages.pattern, rule.field, value, rule.pattern));
            }
        } else if (typeof rule.pattern === 'string') {
            var _pattern = new RegExp(rule.pattern);
            if (!_pattern.test(value)) {
                errors.push(util.format(options.messages.pattern, rule.field, value, rule.pattern));
            }
        }
    }
}

exports.default = pattern;
module.exports = exports['default'];