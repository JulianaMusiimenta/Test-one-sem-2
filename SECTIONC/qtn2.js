//Implement a function to find the sum of all even numbers in an array. 
//even numbers are numbers that are divisible by 2 without a remainder.

function sumOfEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0).reduce((acc, num) => acc + num, 0);
} 
console.log(sumOfEvenNumbers([1, 2, 3, 4, 5, 6])); // Output: 12
