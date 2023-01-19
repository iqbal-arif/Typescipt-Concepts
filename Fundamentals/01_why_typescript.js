var courseName = 'Typescript Bootcamp v3';
printCourseName(courseName);
function printCourseName(name) {
    console.log("The course name is ".concat(name.toUpperCase()));
}
//let  vs const vs var
var courseTitle = 'Typescript Advanced v3';
if (courseTitle) {
    var subTitle = 'Bootcamp Beginner to Advanced Level';
    printCourseTitle(subTitle);
}
else {
    var subTitle = 'Typescript Intermediate v2';
    printCourseTitle(subTitle);
}
// var is a global variable where is let and const is block variable
// printCourseTitle(courseSubTitle);
function printCourseTitle(name) {
    console.log("The course title is ".concat(name.toUpperCase()));
}
