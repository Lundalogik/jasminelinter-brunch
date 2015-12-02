function JasmineLinter(config) {
  var cfg = config.plugins.jasminelinter;
  this.pattern = cfg.pattern || new RegExp( /^(test|spec)[\\/]/, 'i');
  this.logMessage = config.env.indexOf( 'production' ) > -1 ?
  	function(msg) { return msg; } :
  	function(msg) { return 'warn: ' + msg; };
}

JasmineLinter.prototype.brunchPlugin = true;

JasmineLinter.prototype.lint = function(data, path, callback) {
  var self = this;
  if( this.pattern.test(path) && data.match(/(iit|ddescribe)\s*\(/)) {
    callback(this.logMessage( 'Found iit or ddescribe in ' + path));
    return;
  }
  callback();
};

module.exports = JasmineLinter;