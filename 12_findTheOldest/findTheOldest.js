const findTheOldest = function (obj) {
    const sorted = obj.sort(function (a, b) {
        const ageA = isNaN(a.yearOfDeath - a.yearOfBirth) ? 2022 - a.yearOfBirth : a.yearOfDeath - a.yearOfBirth;
        const ageB = isNaN(b.yearOfDeath - b.yearOfBirth) ? 2022 - b.yearOfBirth : b.yearOfDeath - b.yearOfBirth;
        if (ageA < ageB) {
            return 1;
        }
        if (ageA > ageB) {
            return -1;
        }
        return 0;
    })
    return sorted[0];
};

const people = [
    {
        name: "Carly",
        yearOfBirth: 1942,
        yearOfDeath: 1970,
    },
    {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
    },
    {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
    },
]

const people2 = [
    {
        name: "Carly",
        yearOfBirth: 2018,
    },
    {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
    },
    {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
    },
]
console.log(findTheOldest(people2));

// Do not edit below this line
module.exports = findTheOldest;
