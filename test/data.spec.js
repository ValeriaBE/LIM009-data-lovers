global.window = global;
global.assert = require('chai').assert;
require('../src/data');
require('./data.spec.js');


describe('showArrBoat', () => {
  
  it('debería ser una función', () => {
    assert.equal(typeof showArrBoat, 'function');
  });

  it('debería retornar "example"', () => {
    assert.equal(example(), 'example');
  });
})


