var should = require('should');
var rMath = require('./../index');

describe('Testing calc function for arithmatic operations on Roman Numbers', function(){
  it('calc function should return xx for x + x', function(){
      (rMath.calc('X','+','X')).should.be.exactly('XX').and.be.a.String();
  })
  it('calc function should return C for x * x', function(){
      (rMath.calc('X','*','X')).should.be.exactly('C').and.be.a.String();
  })
  it('calc function should return I for x / x', function(){
      (rMath.calc('X','/','X')).should.be.exactly('I').and.be.a.String();
  })
  it('calc function should return x for C / x', function(){
      (rMath.calc('C','/','X')).should.be.exactly('X').and.be.a.String();
  })
  it('calc function should return x for xX - x', function(){
      (rMath.calc('Xx','-','X')).should.be.exactly('X').and.be.a.String();
  })
});