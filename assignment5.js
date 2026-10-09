
// Assignment 5: Function Architecture and Scope

// 1. Regular function with default parameters
function calculateArea(length = 5, width = 4) {
    return length * width;
}

console.log(`Standard Rectangle Area: ${calculateArea()}`);

// 2. Arrow function with parameters
const calculateCustomArea = (length, width) => length * width;

console.log(`Custom Rectangle Area: ${calculateCustomArea(10, 3)}`);

// 3. Function scope
function demonstrateFunctionScope() {
    var functionVar = "I am function-scoped";
    console.log(functionVar);
}

demonstrateFunctionScope();

// 4. Block scope
{
    let blockVar = "I am block-scoped";
    console.log(blockVar);
}

// Demonstrate that blockVar cannot be accessed outside its block
try {
    console.log(blockVar);
} catch (error) {
    console.log(`${error.name}: ${error.message}`);
}

