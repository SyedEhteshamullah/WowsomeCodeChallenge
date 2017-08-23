var rlib = require('./rlib/rLib');

module.exports =
    (function () {
        return {
            calc: function (r1, o, r2) {
                d1 = rlib.rToD(r1);
                d2 = rlib.rToD(r2);
                switch (o) {
                    case "+":
                        return rlib.dToR(d1 + d2);
                    case "-":
                        return rlib.dToR(d1 - d2);
                    case "*":
                        return rlib.dToR(d1 * d2);
                    case "/":
                        return rlib.dToR(d1 / d2);
                    default:
                        throw 'Invalid Operator ' + r;
                }
            }
        };
    })();