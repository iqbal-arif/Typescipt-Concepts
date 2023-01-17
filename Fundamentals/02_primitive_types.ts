// Primitive types : number

const lessonsCount =  10;

const total = lessonsCount + 10;

console.log("Total =", total);

// Primitive types : string
// Strings in Typescript and JavaScript are immutable
const title = "Typescript Advanced v3";
let subTitle = "Learn all the Intermediate and Advanced Level of the language";

const fullTitle = title + ":" + subTitle;
console.log(fullTitle)

// fullTitle = 10;

//Boolean

const published  = true;

if(published){
    console.log("The course is completed")
}

//Template literal

const titleCourse = "Typescript Advanced v3";
let subTitleCourse = "Learn all the Intermediate and Advanced Level of the language";

const fullTitleCourse = `${titleCourse} : ${subTitleCourse}`;
console.log(fullTitleCourse)


// Type Annotations must be added in functions

const theTitle = "Best Typescript Course";
const theSubTitle = "Beginner to Advance Level";
const theLessonsCount = 30;
function printTheCourse(theTitle:string,theSubTitle:string,theLessonsCount:number) {
    let theFullTitle = theTitle + theSubTitle + "has total of " + theLessonsCount;
}

printTheCourse(theTitle,theSubTitle,theLessonsCount)

/********* PRIMITIVE TYPES: OBJECT *************/

const course = {
    title: "Typescript Bootcamp",
    subtitle: " Learn Typescript fundamentals",
    lessonCount:20,
    author : {
        firstName: "Arif",
        lastName: "Iqbal"
    }
}

console.log("type of course is " + typeof course)