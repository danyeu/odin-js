const repeatString = function(string, repeats) {
    if (repeats < 0) {
        return "ERROR";
    }
    let s = "";
    for (let i = 0; i < repeats; i++) {
        s += string;
    }
    return s;
};

// Do not edit below this line
module.exports = repeatString;
