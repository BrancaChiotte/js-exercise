// Using the following code:
// Exercise
var names = ["João", "Maria", "Andreia", "Hugo", "Ana"];
var grades = [10, 12, 8, 16, 6];
var persons = [];
var positives = [];
var failed = 0;
var numberOfStudents = 0;

function BuildPersonsObject() {


}

BuildPersonsObject();
console.log(positives);
console.log(failed);
console.log(numberOfStudents);

// Create the code for function BuildPersonsObject to fulfill the following objectives:
// 1 – Fill the persons array with objects. You must have an object for each person, and it needs to have to properties (name and grade). This values provided need to come from the names and grades arrays
// 2 - Fill the positive variable with just the name of the students which grade is equal or bigger then 10
// 3 - Fill the variable failed with the number of students which grade is lower than 10
// 4 - Fill the variable numberOfStudents with the number of students that begin with the letter A
// 5 - Create a new function that receives, a name and a grade in a argument, and according to the grade it should return a message (NAME and GRADE should be replaced with the arguments received):
    // - NAME had GRADE, so It was a negative result - 0 to 10 (10 doesn’t count)
    // - NAME had GRADE, so It is a ok result – 10 to 13 (13 doesn’t count)
    // - NAME had GRADE, so It is a good result – 13 to 16 (16 doesn’t count)
    // - NAME had GRADE, so It is a very good result – 16 to 18 (18 doesn’t count)
    // - NAME had GRADE, so It is a excellent result – 18 to 20
// 6 - Call this previous function with a name of your choice, and a random grade between 0 and 20
