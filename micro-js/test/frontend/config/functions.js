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
  }
}
