// Write a function that checks if a given word is a palindrome.
// A palindrome is a word that reads the same backward as forward.
function isPalindrome(word) { 
    const reversedWord = word.split('').reverse().join('');
    return word === reversedWord;
}
console.log(isPalindrome("madam")); // Output: true
console.log(isPalindrome("racecar")); // Output: true
console.log(isPalindrome("hello")); // Output: false