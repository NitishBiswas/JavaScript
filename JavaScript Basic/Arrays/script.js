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