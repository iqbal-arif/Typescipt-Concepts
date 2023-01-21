var courseName = 'Typescript Bootcamp v3';
debugger;
printCourseName(courseName);
function printCourseName(name) {
    console.log("The course name is ".concat(name.toUpperCase()));
}
//let  vs const vs var
var courseTitle = 'Typescript Advanced v3';
if (courseTitle) {
    var subTitle_1 = 'Bootcamp Beginner to Advanced Level';
    printCourseTitle(subTitle_1);
}
else {
    var subTitle_2 = 'Typescript Intermediate v2';
    printCourseTitle(subTitle_2);
}
// var is a global variable where is let and const is block variable
// printCourseTitle(courseSubTitle);
function printCourseTitle(name) {
    debugger;
    console.log("The course title is ".concat(name.toUpperCase()));
}
