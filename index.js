function JasmineLinter(config) {
  var cfg = config.plugins.jasminelinter;
  this.pattern = cfg.pattern || new RegExp( /^(test|spec)[\\/]/, 'i');
}

JasmineLinter.prototype.brunchPlugin = true;
JasmineLinter.prototype.defaultEnv = 'production';

JasmineLinter.prototype.lint = function(data, path, callback) {
  var self = this;
  if( this.pattern.test(path) && data.match(/(iit|ddescribe)\s*\(/)) {
    callback('Found iit or ddescribe in ' + path);
    return;
  }
  callback();
};

module.exports = JasmineLinter;