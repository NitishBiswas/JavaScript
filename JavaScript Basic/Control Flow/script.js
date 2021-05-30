//If - else

console.log('if - else');

let a = 1, b = 2, c = 3;

if (a > b) {
    console.log('a > b');
} else if (b > c) {
    console.log('b > c');
} else {
    console.log('c > b > a');
}

//Switch - case

console.log('switch - case');

const n = 5;

switch (n) {
    case 1:
        console.log('n = 1');
        break;
    case 2:
        console.log('n = 1');
        break;
    case 3:
        console.log('n = 1');
        break;
    default:
        console.log('Not matched');
}

//For - loop

console.log('for - loop');

for (let i = 0; i < 5; i += 2) {
    console.log(i);
}

//While - loop (eltry loop)

console.log('while - loop');

let i = 1;

while (i < 5) {
    console.log(i);
    i += 2;
}

//Do - while loop (exit loop)

console.log('do - while loop');

let j = 2, sum = 0;

do {
    sum += j;
    j++;
} while (j < 5);
console.log(sum);

//For - in 

console.log('for - in');

const person = {
    Name: 'Nitish',
    Roll: 05,
};

for (let key in person) {
    console.log(key, person[key]);
}

//For - of

console.log('for - of');

const colors = ['green', 'red', 'blue'];

for (let color of colors) {
    console.log(color);
}

//Break

console.log('break');

for (let i = 0; i < 5; i++) {
    if (i === 3) {
        break;
    }
    console.log(i);
}

//Continue

console.log('continue');

for (let i = 0; i < 5; i++) {
    if (i === 3) {
        continue;
    }
    console.log(i);
}
