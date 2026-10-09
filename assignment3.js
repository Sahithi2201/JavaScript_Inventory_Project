// Assignment 3: Conditional Logic Implementation

const score = 85;
let grade;

// Use if...else to determine the grade
if (score >= 90) {
    grade = "A";
} else if (score >= 80) {
    grade = "B";
} else if (score >= 70) {
    grade = "C";
} else if (score >= 60) {
    grade = "D";
} else {
    grade = "F";
}

// Use switch to display a message for the grade
let gradeMessage;

switch (grade) {
    case "A":
        gradeMessage = "Excellent";
        break;
    case "B":
        gradeMessage = "Good";
        break;
    case "C":
        gradeMessage = "Average";
        break;
    case "D":
        gradeMessage = "Needs Improvement";
        break;
    default:
        gradeMessage = "Failed";
}

// Use the ternary operator to determine pass/fail status
const status = score >= 50 ? "Passed" : "Failed";

// Display the results
console.log(`Score: ${score}`);
console.log(`Grade: ${grade}`);
console.log(`Status: ${status}`);

