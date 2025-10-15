/* Print 13 difefrent random numbers upto 6*/
console.log('Print 13 difefrent random numbers upto 6')
for (let i = 0; i <= 13; i++) {
    let randomNumber = Math.floor(Math.random() * 7); /*give range to generate numbers*/

    console.log(randomNumber);
}

/* start at 1, multiply the number of each iteration by 2 and stop after 1024.*/
console.log('multiply the number of each iteration by 2 ')
for (let i = 1; i <= 1024; i *= 2) {

    console.log(i);

}

/*start at 10 and count down until 0.*/
console.log('start at 10 and count down until 0.')
for (let i = 10; i >= 0; i--) {

    console.log(i);
}

/*write a function that has 2 numbers as parameters and return the first number to the power of the second number*/
console.log('write a function that has 2 numbers as parameters');
const power = (number1, number2) => {
    // let exponent = number1 ** number2;
    let result = 1;
    for (let i = 1; i <= number2; i++) {
       result *= number1;
    }
    return console.log(number1, number2,result);

}

power(4, 3);