class OldSyntax {
    constructor() {
        this.name = 'Moshe';
        this.getGreeting = this.getGreeting.bind(this);
    }
    getGreeting() {
        return `Hi its ${this.name}`
    }
}

const oldSyntax = new OldSyntax()
const getGreeting = oldSyntax.getGreeting; //here losing binding! - need to use bind(this) to work!
console.log(getGreeting());
//-------------------------------------------------------
class NewSyntax {
    name = 'avi';
    getGreeting = () => {
        return `Hi its ${this.name}`
    }
}

const newSyntax = new NewSyntax();
const newGetGreeting = newSyntax.getGreeting;//here dont lose binding!
console.log(newGetGreeting());