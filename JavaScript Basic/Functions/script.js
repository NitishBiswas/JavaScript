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