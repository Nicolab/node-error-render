/**
 * @name error-render
 * @author Nicolas Tallefourtane <dev@nicolab.net>
 * @link https://github.com/Nicolab/node-error-render
 * @license MIT https://github.com/Nicolab/node-error-render/blob/master/LICENSE
 */

'use strict';

require('longjohn');

var prettyjson  = require('prettyjson');
var PrettyError = require('pretty-error');

function prettyJson(data, options, indentation) {
  return prettyjson.render(data, options, indentation);
}


/*----------------------------------------------------------------------------*\
  Expose
\*----------------------------------------------------------------------------*/

/**
 * Render object to pretty JSON
 * @type {function}
 * @see https://github.com/rafeca/prettyjson
 */
module.exports.prettyJson = prettyJson;

/**
 * Errors with less clutter
 * @constructor
 * @see https://github.com/AriaMinaei/pretty-error
 */
module.exports.PrettyError = PrettyError;

/**
 * Render the details of an error
 * @return {string}
 */
module.exports.details = function details(error) {

  // remove longjohn properties that break prettyjson
  delete error.__cached_trace__;
  delete error.__previous__;

  var pe        = new PrettyError();
  var metadata  = '    ' + prettyJson(error).split('\n').join('\n    ');
  var message   = pe.render(error) + '\n';

  if (metadata.trim() !== '') {
    message += '  Metadata:\n' + metadata;
  }

  return message;
};

/**
 * Display the details with console.error()
 * @param  {Error} error
 */
module.exports.log = function log(error) {
  console.error(this.details(error));
};