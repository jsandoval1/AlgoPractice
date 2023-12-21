// My own attempt at FizzBuzz, on 12/21/23

function FizzBuzz(num) {
    // num is the number to count up to and check for FizzBuzz conditions
    for (i = 0; i <= num; i++) {
        // These are sorted in order of importance
        if (i % 3 === 0 && i % 5 === 0) {
            console.log(`${i} - FizzBuzz`);
        } else if (i % 3 === 0) { // only 3
            console.log(`${i} - Fizz`);
        } else if (i % 5 === 0) { // only 5
            console.log(`${i} - Buzz`);
        } else if (i % 7 === 0) {
            console.log(`${i} - Bazz`);
        } else {
            console.log(i); // only the number
        }
    }
}

// Should print out 1-100 with Fizz, Buzz, FizzBuzz, or the number itself
FizzBuzz(100);
console.log("");

// Should print out 1-50 with Fizz, Buzz, FizzBuzz, or the number itself
FizzBuzz(50);
console.log("");

