// Assignment 2: Operators, Expressions, and Input Handling

// Get input from the user
const billAmount = Number(prompt("Enter the bill amount:"));
const tipPercentage = Number(prompt("Enter the tip percentage:"));

// Calculate the tip amount
const tipAmount = billAmount * (tipPercentage / 100);

// Calculate the total using the assignment operator
let totalBill = billAmount;
totalBill += tipAmount;

// Display the results
console.log(`Subtotal: $${billAmount}`);
console.log(`Tip: ${tipPercentage}%`);
console.log(`Calculated Tip: $${tipAmount}`);
console.log(`Total: $${totalBill}`);

