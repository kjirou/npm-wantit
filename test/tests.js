var assert = require('assert');

var wantit = require('../index');


describe('wantit', function(){

  it('Module definition', function(){
    assert(typeof wantit === 'function');
  });

  it('Should be able to import module that exists', function(){
    assert(wantit('util') === require('util'));
  });

  it('Should return null if the module that does not exist', function(){
    assert(wantit('module_does_not_exist') === null);
  });

  it('Should throw a error if the module throw a Not MODULE_NOT_EXIST error', function(){
    assert.throws(function(){
      wantit(__dirname + '/data/runtime-error-module');
    }, /Runtime Error/);
  });

  it('Should throw a error if the module throw a syntax error', function(){
    assert.throws(function(){
      wantit(__dirname + '/data/syntax-error-module');
    }, /SyntaxError/);
  });
});
