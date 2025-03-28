//1. Write a function to reverse a given string. 
// reverse a string is to read it backward.


function reverseString(str) {
    return str.split('').reverse().join('');
}
console.log(reverseString("hello")); // Output: "olleh"