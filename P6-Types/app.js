/*let numberOfBottles = 10;
const string = 'green bottles hanging on the wall';
console.log(numberOfBottles, string,',' ,numberOfBottles, string);
--numberOfBottles;
console.log('and if one green bottle, should accidentally fall, there will be', numberOfBottles, string,'.');*/

// with loop
/*let numberOfBottles = 10;
const string = 'green bottles hanging on the wall';
const string2 = 'and if one green bottle, should accidentally fall, there will be';
for (let i = numberOfBottles; i > 0; i--) {
    console.log(i, string, ',', i, string, '.', string2, i - 1);
}*/

// P-7 Boolean

/*function check(birthYear) {
    let age = 2025 - birthYear;
    /*if (age <= 10) {
        return console.log('you are a child');
    } else if (age >= 11 && age <= 17) {
        return console.log('you are a teenager');
    } else
        return console.log('you are an adult');
    let isChild = age <= 10;
    let isTeenager = age >= 11 && age <= 17;
    let isAdult = age >= 18
    console.log('you are a child', isChild);
    console.log('you are a teenager', isTeenager);
    console.log('you are an adult', isAdult);

}
*/

let birthYear;
let favouriteNumber;
function conditionalBranching(birthYear, favouriteNumber){
    let age = 2025 - birthYear;
    age >= 18 ? console.log('You are an adult') : age >= 11 && age <= 17 ? console.log('you are a teenager') : console.log('you are a baby');
    age > favouriteNumber ? console.log('the greater number is', age) : age < favouriteNumber ? console.log('the greater number is', favouriteNumber) : console.log('both are equal');
    favouriteNumber % 2 == 0 ? console.log('your favourite number is an odd number') : console.log('your favourite number is not an odd number');

}
conditionalBranching(2015,21)






// Exercise P8







