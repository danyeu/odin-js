const convertToCelsius = function(f) {
    if (typeof f !== "number") {
        return "ERROR";
    }
    c = (f - 32) * (5 / 9);
    return Number(c.toFixed(1));

};

const convertToFahrenheit = function(c) {
    if (typeof c !== "number") {
            return "ERROR";
        }
        f = 32 + (c * (9 / 5));
        return Number(f.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
