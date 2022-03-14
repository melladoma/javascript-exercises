const removeFromArray = function (array, ...elements) {
    let argsArray = elements;
    let length = argsArray.length;

    for (let i = 0; i < length; i++) {
        let index = array.indexOf(argsArray[i]);
        if (index >= 0) {
            array.splice(index, 1);
        }
    }
    return array;
};
// console.log(removeFromArray([1, 2, 3], "1", 3))
// Do not edit below this line
module.exports = removeFromArray;
