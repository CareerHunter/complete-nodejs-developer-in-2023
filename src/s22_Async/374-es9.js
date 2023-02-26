// Object spread operator
const animals = {
    tiger: 23,
    lion: 5,
    monkey:2,
    bird: 40
}

function objectSpread(p1, p2, p3) {
    console.log(p1);
    console.log(p2);
    console.log(p3);
}

const { tiger, lion, ...rest } = animals;

objectSpread(tiger, lion, rest);