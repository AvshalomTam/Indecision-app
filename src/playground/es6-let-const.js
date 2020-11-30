var nameVar = 'Avi';
var nameVar = 'momo';
console.log('nameVar', nameVar); // nameVar momo

let nameLet = 'Jen';
nameLet = 'jojo';
console.log('nameLet', nameLet); // nameLet jojo

const nameConst = 'Frank';
console.log('nameConst', nameConst); // nameConst Frank

// Block scoping
const fullName = 'Avshalom Tam';
let firstName;

if (fullName) {
    firstName = fullName.split(' ')[0];
    console.log(firstName) // Avshalom
}

console.log(firstName) // Avshalom