module.exports =
    (function () {
        var romanLiteralToDecimal = function (r) {
            switch (r.toUpperCase()) {
                case "I":
                    return 1;
                case "V":
                    return 5;
                case "X":
                    return 10;
                case "L":
                    return 50;
                case "C":
                    return 100;
                case "D":
                    return 500;
                case "M":
                    return 1000;
                default:
                    throw 'Invalid Literal ' + r;
            }
        };
        var getChunks = function (r) {
            let chunks = 0;
            let iChar = 0;
            let tChar = 0;
            let chunk = 0;
            for (let i = r.length - 1; i >= 0; i--) {
                if (tChar == 0) {
                    tChar = romanLiteralToDecimal(r[i]);
                    chunk = tChar;
                    if (i == 0)
                        chunks = chunks + chunk;
                    continue;
                }
                if (iChar == 0) {
                    iChar = romanLiteralToDecimal(r[i]);
                }
                if (iChar < tChar) {
                    chunk = chunk - iChar;
                    iChar = 0;
                    if (i == 0)
                        chunks = chunks + chunk;
                    continue;
                }
                if (iChar >= tChar || i == 0) {
                    chunk = chunk + iChar;
                    chunks = chunks + chunk;
                    tChar = 0;
                    iChar = 0;
                    chunk = 0;
                    continue;
                }
            }
            return chunks;
        };

        return {
            rToD: function (r) {
                let fNumber = 0;
                let rlen = r.length;
                if (rlen == 1) {
                    fNumber = romanLiteralToDecimal(r[0]);
                    return fNumber;
                }
                else if (rlen > 1) {
                    fNumber = getChunks(r);
                    return fNumber;
                }
                else {
                    throw 'Invalid Roman number ' + r;
                }
            },

            dToR: function (d) {
                let r = '';
                while (d > 0) {
                    if (d >= 1000) {
                        d = d - 1000;
                        r = r + 'M';
                    }
                    else if (d < 1000 && d >= 900) {
                        d = d - 900;
                        r = r + 'CM';
                    }
                    else if (d >= 500) {
                        d = d - 500;
                        r = r + 'D';
                    }
                    else if (d < 500 && d >= 400) {
                        d = d - 400;
                        r = r + 'CD';
                    }
                    else if (d >= 100) {
                        d = d - 100;
                        r = r + 'C';
                    }
                    else if (d < 100 && d >= 90) {
                        d = d - 90;
                        r = r + 'XC';
                    }
                    else if (d >= 50) {
                        d = d - 50;
                        r = r + 'L';
                    }
                    else if (d < 50 && d >= 40) {
                        d = d - 40;
                        r = r + 'XL';
                    }
                    else if (d >= 10) {
                        d = d - 10;
                        r = r + 'X';
                    }
                    else if (d < 10 && d >= 9) {
                        d = d - 9;
                        r = r + 'IX';
                    }
                    else if (d >= 5) {
                        d = d - 5;
                        r = r + 'V';
                    }
                    else if (d <= 5 && d >= 4) {
                        d = d - 4;
                        r = r + 'IV';
                    }
                    else if (d >= 1) {
                        d = d - 1;
                        r = r + 'I';
                    }
                    else {
                        throw 'Invalid Decimal number ' + d;
                    }
                }
                return r;
            }
        };
    })();