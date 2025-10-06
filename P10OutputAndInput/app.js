/*const doubleNumber = (string1, string2) => {
    return console.log('Welcome' , string1, string2,'!');
}
doubleNumber('Ben','ting')
*/

//Write a function that has no parameters and returns a random number from 0 to 2.
const randomNumber = () => {
    return Math.floor(Math.random()*3);
}
console.log(randomNumber());

//Write a function that has 1 number as a parameter and returnsthe result like this:○Input: 0. Output: A.○Input: 1. Output: B.○Input: 2. Output: C
const numberToLetter = (num) => {
    if (num === 0) {
        return 'A';
    } else if (num === 1) {
        return 'B';
    } else if (num === 2) {
        return 'C';
    } else {
        return 'Input must be 0, 1, or 2';
    }
}
console.log(numberToLetter(2));

//Write a function that has 2 numbers as parameters compares them
const compareNumbers = (num1, num2) => {
    num1 > num2 ? console.log(num1 + ' is greater than ' + num2) : num1 < num2 ?  console.log(num1 + ' is less than to ' + num2): console.log(num1 + ' is equal to ' + num2);
}
compareNumbers(7,7);