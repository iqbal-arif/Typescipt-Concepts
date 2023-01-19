// Primitive types : number
var lessonsCount = 10;
var total = lessonsCount + 10;
console.log("Total =", total);
// Primitive types : string
// Strings in Typescript and JavaScript are immutable
var title = "Typescript Advanced v3";
var subTitle = "Learn all the Intermediate and Advanced Level of the language";
var fullTitle = title + ":" + subTitle;
console.log(fullTitle);
// fullTitle = 10;
//Boolean
var published = true;
if (published) {
    console.log("The course is completed");
}
//Template literal
var titleCourse = "Typescript Advanced v3";
var subTitleCourse = "Learn all the Intermediate and Advanced Level of the language";
var fullTitleCourse = "".concat(titleCourse, " : ").concat(subTitleCourse);
console.log(fullTitleCourse);
// Type Annotations must be added in functions
var theTitle = "Best Typescript Course";
var theSubTitle = "Beginner to Advance Level";
var theLessonsCount = 30;
function printTheCourse(theTitle, theSubTitle, theLessonsCount) {
    var theFullTitle = theTitle + theSubTitle + "has total of " + theLessonsCount;
}
printTheCourse(theTitle, theSubTitle, theLessonsCount);
/********* PRIMITIVE TYPES: OBJECT *************/
var course = {
    title: "Typescript Bootcamp",
    subtitle: " Learn Typescript fundamentals",
    lessonCount: 20,
    author: {
        firstName: "Arif",
        lastName: "Iqbal"
    }
};
console.log("type of course is " + typeof course);
