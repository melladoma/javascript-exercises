const repeatString = function (string, num) {
    let output = "";
    if (num < 0) {
        output = "ERROR"
    }
    for (let i = 0; i < num; i++) {
        output += string;
    }
    return output;
};
// console.log(repeatString("hey", 3))

// Do not edit below this line
module.exports = repeatString;
