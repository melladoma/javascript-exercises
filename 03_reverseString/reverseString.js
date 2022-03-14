const reverseString = function (string) {
    let myArr = string.split("");
    let myArrSorted = "";
    let length = myArr.length;
    for (let i = 0; i < length; i++) {
        myArrSorted += myArr.pop()
    }
    return myArrSorted
};

// console.log(reverseString('hello there'));
// Do not edit below this line
module.exports = reverseString;
