var should = require('should');
var rlib = require('./../rlib/rLib');

describe('Testing rToD function for Roman to Decimal Conversion', function(){
  it('rToD function should return 1 for I', function(){
      (rlib.rToD('i')).should.be.exactly(1).and.be.a.Number();
  })
  it('rToD function should return 5 for V', function(){
      (rlib.rToD('v')).should.be.exactly(5).and.be.a.Number();
  })
  it('rToD function should return 10 for X', function(){
      (rlib.rToD('X')).should.be.exactly(10).and.be.a.Number();
  })
  it('rToD function should return 50 for L ', function(){
      (rlib.rToD('l')).should.be.exactly(50).and.be.a.Number();
  })
  it('rToD function should return 100 for C', function(){
      (rlib.rToD('c')).should.be.exactly(100).and.be.a.Number();
  })
  it('rToD function should return 500 for D', function(){
      (rlib.rToD('D')).should.be.exactly(500).and.be.a.Number();
  })
  it('rToD function should return 1000 for M', function(){
      (rlib.rToD('m')).should.be.exactly(1000).and.be.a.Number();
  })
  it('rToD function should return 4 for IV', function(){
      (rlib.rToD('IV')).should.be.exactly(4).and.be.a.Number();
  })
  it('rToD function should return 3 for III', function(){
      (rlib.rToD('III')).should.be.exactly(3).and.be.a.Number();
  })
  it('rToD function should return 2896 for MMDCCCXCVI', function(){
      (rlib.rToD('MMDCCCXCVI')).should.be.exactly(2896).and.be.a.Number();
  })
 it('rToD function should return 85 for XXVC', function(){
      (rlib.rToD('XVC')).should.be.exactly(85).and.be.a.Number();
  })
  it('rToD function should return 8 for iiiiiiii', function(){
      (rlib.rToD('iiiiiiii')).should.be.exactly(8).and.be.a.Number();
  })
});