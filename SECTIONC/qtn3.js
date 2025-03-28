// Create a function that takes two numbers. If the numbers are the same, return 
//their product. If they are different, return their sum.


function calculate(a, b) {
    if (a === b) {
        return a * b;
    } else {
        return a + b;
    }
}
console.log(calculate(5, 5)); // Output: 25
console.log(calculate(5, 10)); // Output: 15
 