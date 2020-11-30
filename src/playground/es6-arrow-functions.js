//ES5
function square_old(x) {
    return x*x;
};

const square = function (x) {
    return x*x;
};

//ES6
const square_es6 = (x) => {
    return x*x;
};

const square_es6_short = (x) => x*x;

// console.log(square_old(3))
// console.log(square(4))
// console.log(square_es6(5))
// console.log(square_es6_short(6))

const getFirstName = (fullName) => {
    return fullName.split(' ')[0]
};

const getFirstName_short = (fullName) => fullName.split(' ')[0];

console.log(getFirstName('andrew mead'));
console.log(getFirstName_short('andy momo'));