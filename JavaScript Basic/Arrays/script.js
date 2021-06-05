// Add elements
const numbers = [2, 3];

// Add elements at the beginning
numbers.unshift(1);
console.log(numbers);

// Add elements at the middle 
numbers.splice(1, 0, 'Nitish');
console.log(numbers);

// Add elements at the end
numbers.push(4, 5);
console.log(numbers);

// Find elements
console.log(numbers.indexOf('Nitish'));
console.log(numbers.find(num => num === 'Nitish'));

const students = [
    { roll: 1, name: 'Joy' },
    { roll: 5, name: 'Nitish' },
    { roll: 6, name: 'Rikta' }
];

const student = students.find(stu => stu.name === 'Nitish');
console.log(student);

// Remove elements from the beginning
numbers.shift(1);
console.log(numbers);

// Remove elements from the middle
numbers.splice(2, 1);
console.log(numbers);

// Remove elements from the end 
numbers.pop(3);
console.log(numbers);


// Empty elements
const num = [1, 2, 3, 4];
const empty = num;

num.length = 0;
console.log(empty);

// Combining and slicing
const num1 = [1, 2, 3];
const num2 = [4, 5, 6];

const combining = num1.concat(num2);

console.log(combining);

const combined = num1 + ',' + num2;
console.log(combined);

// Spread Operator
const combined2 = [...num1, 'Nitish', ...num2];
console.log(combined2);

// Slice
const copy = combined2.slice();
console.log(copy);

const slicing = combined2.slice(3, 4);
console.log(slicing);

// Iterating an Array
const array = [1, 2, 3, 4];
for (var n of array)
    console.log(n);

array.forEach((element, index) => {
    console.log(index, element);
});

// Joining arrays
const newArray = [1, 2, 3, 4, 5];
const newN = newArray.join(',');
console.log(newN);

const loves = 'I love my country';
const splitString = loves.split(' ');
console.log(splitString);

const jopined = splitString.join('_');
console.log(jopined);

// Sorting Arrays

const arrays = [3, 2, 4, 1];

const ascending = arrays.sort();
console.log(ascending);

const descending = arrays.reverse();
console.log(descending);

const students1 = [
    { roll: 1, name: 'Joy' },
    { roll: 5, name: 'Nitish' },
    { roll: 6, name: 'Rikta' },
    { roll: 10, name: 'Musha' }
];

const result = students1.sort((a, b) => {
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();
    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;
})

console.log(result);

// Every

const elements = [1, 2, 3, -1, 4, 5];
const positive = elements.every(item => item > 0);
console.log(positive);

// Some

const negative = elements.some(value => value < 0);
console.log(negative);

// Filter

const positiveNum = elements.filter(value => value > 0);
console.log(positiveNum);

// Map

const obj = elements.map(value => ({ value }));
console.log(obj);

// Filter & Map 

const positiveObj = elements
    .filter(value => value > 0)
    .map(value => ({ value }));

console.log(positiveObj);


// Reduce 

const sum = elements.reduce((previousValue, currentValue) => previousValue += currentValue)

console.log(sum);