const reverseString = function(s) {
    let ans = "";
    for (let i = 0; i < s.length; i++) {
        ans += s.at(s.length - i - 1);
    }
    return ans;

};

// Do not edit below this line
module.exports = reverseString;
