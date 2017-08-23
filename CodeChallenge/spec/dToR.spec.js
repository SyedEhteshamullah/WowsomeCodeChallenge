var should = require('should');
var rlib = require('./../rlib/rLib');

describe('Testing dToR function for Decimal to Roman Conversion', function () {
    it('dToR function should return III for 3', function () {
        (rlib.dToR(3)).should.be.exactly('III').and.be.a.String();
    })
    it('dToR function should return VIII for 8', function () {
        (rlib.dToR(8)).should.be.exactly('VIII').and.be.a.String();
    })
    it('dToR function should return MMC for 2100', function () {
        (rlib.dToR(2100)).should.be.exactly('MMC').and.be.a.String();
    })
    it('dToR function should return MDCLXVI for 1666', function () {
        (rlib.dToR(1666)).should.be.exactly('MDCLXVI').and.be.a.String();
    })
    it('dToR function should return MMDCCCXCVI for 2896', function () {
        (rlib.dToR(2896)).should.be.exactly('MMDCCCXCVI').and.be.a.String();
    })
});