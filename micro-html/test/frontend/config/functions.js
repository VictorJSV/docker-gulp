/**
 * Contiene todos las funciones globales de las tareas gulp
 *
 * @module Functions
 * @extends Plugins
 * @author Victor Sandoval
 */

const util = require("gulp-util");

module.exports = {
  isProduction : function (){
    return !util.env.dev;
  },
  isGzip : function (){
    return util.env.gzip;
  },
  pugAdapter : function (pug){
    pug.runtime.attr = function (key, val, escaped, terse) {
      if (key == "__") {
        return ' ' + val;
      }

      if (val === false || val == null || !val && (key === 'class' || key === 'style')) {
        return '';
      }
      if (val === true) {
        return ' ' + (terse ? key : key + '="' + key + '"');
      }
      if (typeof val.toJSON === 'function') {
        val = val.toJSON();
      }
      if (typeof val !== 'string') {
        val = JSON.stringify(val);
        if (!escaped && val.indexOf('"') !== -1) {
          return ' ' + key + '=\'' + val.replace(/'/g, '&#39;') + '\'';
        }
      }
      if (escaped) val = pug.runtime.escape(val);
      return ' ' + key + '="' + val + '"';
    };
    return pug;
  }
}
