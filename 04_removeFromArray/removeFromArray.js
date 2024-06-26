const removeFromArray = function() {
    let array = arguments[0];

    let l = array.length;
    for (let i = 0; i < l; i++) {
        for (let e = 0; e < arguments.length; e++) {
            let element = arguments[e];
            if (array[l - i - 1] === element) {
                array.splice(l - i - 1, 1);
                break;
            }
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
