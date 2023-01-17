const courseName = "Typescript Bootcamp v3";

printCourseName(courseName);


function printCourseName(name:string) {
    console.log(`The course name is ${name}`.toUpperCase())

}

//let  vs const vs var

const courseTitle = "Typescript Advanced v3";

if (courseTitle){
    var subtitle = "Bootcamp Beginner to Advanced Level"
} else {
    let courseSubTitle = "Typescript Intermediate v2";
}
printCourseTitle(subtitle);
// var is a global variable where is let and const is block variable

// printCourseTitle(courseSubTitle);

function printCourseTitle(name:string) {
    console.log(`The course title is ${name}`.toUpperCase())

}
