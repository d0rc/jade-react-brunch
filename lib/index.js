// Generated by CoffeeScript 1.9.1
var JadeReactCompiler, anymatch, jade;

jade = require('react-jade');

anymatch = require('anymatch');

module.exports = JadeReactCompiler = (function() {
  JadeReactCompiler.prototype.brunchPlugin = true;

  JadeReactCompiler.prototype.type = 'template';

  JadeReactCompiler.prototype.extension = 'jreact';

  JadeReactCompiler.prototype.pattern = /\.jreact/;

  function JadeReactCompiler(config) {
    this.config = config;
    this._setOptions(this.config);
  }

  JadeReactCompiler.prototype.compile = function(params, callback) {
    var data, e, error, exclude, result;
    error = null;
    result = null;
    exclude = this._shouldExcludeFile(params.path);
    if (!exclude) {
      try {
        data = "module.exports = " + jade.compileClient(params.data, {
          globalReact: true
        });
        result = {
          data: data
        };
      } catch (_error) {
        e = _error;
        console.log("ERROR", e);
        error = e;
      }
    }
    return callback(error, result);
  };

  JadeReactCompiler.prototype._setOptions = function() {
    var base, ref;
    this.options = ((ref = this.config.plugins) != null ? ref.jadeReact : void 0) || {};
    (base = this.options).exclude || (base.exclude = false);
    if (!Array.isArray(this.options.exclude)) {
      return this.options.exclude = [this.options.exclude];
    }
  };

  JadeReactCompiler.prototype._shouldExcludeFile = function(path) {
    return anymatch(this.options.exclude, path);
  };

  return JadeReactCompiler;

})();
