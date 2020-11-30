const add = (a, b) => {
    return a+b;
};
console.log(add(55, 1, 1001))
// this keyword - no longer bound

const user = {
    name: 'Andrew',
    cities: ['Philadelphia', 'New York', 'Dublin'],
    printPlacesLived() {
        this.cities.forEach((city) => {
            console.log(this.name + ' has lived in ' + city);
        });
    }
};

user.printPlacesLived()

const user2 = {
    name: 'Avshalom',
    cities: ['Israel', 'French', 'Sinay'],
    printPlacesLived() {
        return this.cities.map((city) => this.name + ' was in  ' + city + '!')
    }
};

user2.printPlacesLived().forEach((c) => {
    console.log(c)
})

////////////////////////////////////////////////////////////

const multiplier = {
    numbers: [1,2,3],
    multiplyBy: 2,
    multiply() { 
        return this.numbers.map((number) => number*this.multiplyBy) 
    }
};

console.log(multiplier.multiply()); // [1,2,3] 2 => [2,4,6]
// multiplier.multiply()