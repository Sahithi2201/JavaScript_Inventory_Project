// Assignment 4: Loop Control Structures
// 1. for loop: Print the multiplication table of 5
console.log("Multiplication Table of 5:");

for (let i = 1; i <= 10; i++) {
    console.log(`5 x ${i} = ${5 * i}`);
}

// 2. while loop with break: Find the first number greater than 10
// that is divisible by 6
console.log("First number greater than 10 divisible by 6:");

let number = 11;

while (number > 10) {
    if (number % 6 === 0) {
        console.log(number);
        break;
    }

    number++;
}

// 3. do...while loop with continue
console.log("Numbers from 1 to 10, skipping even numbers:");

let count = 0;

do {
    count++;

    if (count % 2 === 0) {
        continue;
    }

    console.log(count);
} while (count < 10);

