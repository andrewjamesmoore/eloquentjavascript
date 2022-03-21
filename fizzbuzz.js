"use strict";

/*
print numbers from 1 to 100. Multiples of three should print “Fizz”; multiples of 5 should print "Buzz"; multiples of 3 and 5 should print “FizzBuzz”.
*/

for (let n = 1; n < 101; n++) {
  if (n % 3 === 0 && n % 5 === 0) {
    console.log("FizzBuzz");
  } else if (n % 3 === 0) {
    console.log("Fizz");
  } else if (n % 5 === 0) {
    console.log("Buzz");
  } else console.log(n);
}
