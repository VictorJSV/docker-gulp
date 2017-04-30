var path = {};
path.base     = "/usr/local/app";
path.frontend = path.base + "/frontend";
path.output   = path.base + "/public";

path.config   = path.frontend + "/config";
path.input    = path.frontend + "/source";
module.exports = path;