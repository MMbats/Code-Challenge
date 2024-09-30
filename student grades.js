
//  student grade based on marks
function getStudentGrade(marks) {
    if (marks > 100 || marks < 0) {
        return "Invalid marks! Please enter a number between 0 and 100.";
    } else if (marks > 79) {
        return "Grade: A";
    } else if (marks >= 60 && marks <= 79) {
        return "Grade: B";
    } else if (marks >= 49 && marks <= 59) {
        return "Grade: C";
    } else if (marks >= 40 && marks <= 49) {
        return "Grade: D";
    } else {
        return "Grade: E";
    }
}


const marks = prompt("Enter the student's marks (0 - 100):");

// Convertion of input to number
const numericMarks = parseInt(marks);

// Grade based on the input
const grade = getStudentGrade(numericMarks);

// Results
console.log(grade);
alert(grade);
