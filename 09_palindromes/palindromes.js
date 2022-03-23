const palindromes = function (str) {
    let punctuationless = str.replace(/[.,!\s]/g, "").toLowerCase();
    let splitstr = punctuationless.split("").reverse().join("");
    return punctuationless === splitstr
};

// Do not edit below this line
module.exports = palindromes;
