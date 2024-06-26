const sumAll = function(l, r) {
    if (l < 0 || r < 0) {
        return "ERROR";
    }
    if (typeof(l) != "number" || typeof(r) != "number") {
        return "ERROR";
    }
    let sum = 0;

    if (l > r) {
        let r2 = l;
        l = r;
        r = r2;
    }

    for (l; l <= r; l++) {
        sum += l;
    }
    return sum;

};

// Do not edit below this line
module.exports = sumAll;
