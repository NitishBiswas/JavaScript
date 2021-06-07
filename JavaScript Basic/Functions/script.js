// Function Declaration

walk();

function walk() {
    console.log('Walk');
}

walk();

// Anonymous Function Expression 

const run = function () {
    console.log('Run');
}

run();

const move = run;

move();

// Named Function Expression 

const hello = function helloWorld() {
    console.log('Hello World');
}

hello();

// Arguments

function sum(a, b) {
    let sum = 0;
    for (let value of arguments) {
        sum += value;
    }
    return sum;
}

console.log(sum(1, 2));
console.log(sum(1, 2, 3, 4));

// Rest Operator

function shopping(...args) {
    const sum = args.reduce((a, b) => a + b);
    return sum;
}

console.log(shopping(1, 2, 3, 4, 5));

function discount(disc, ...prices) {
    const sum = prices.reduce((a, b) => a + b);
    return sum * (1 - disc);
}

const res = discount(0.2, 40, 30, 20);

console.log(res);


// Default parameters

function interest1(pricipal, rate, years) {
    rate = rate || 3.5;
    years = years || 5;
    return pricipal * rate / 100 * years;
}

console.log(interest1(10000));

function interest2(pricipal, rate = 3.5, years = 5) {
    return pricipal * rate / 100 * years;
}

console.log(interest2(10000));

// Getters Setters method

const person = {
    firstName: 'Nitish',
    lastName: 'Biswas',

    get fullName() {
        return `${this.firstName} ${this.lastName}`
    },

    set fullName(value) {
        const parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
}

console.log(person.fullName);

person.fullName = 'Hey, Nitish_Biswas';

console.log(person.fullName);