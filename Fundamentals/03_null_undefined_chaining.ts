// Null and Undefined
// Undefinned is a runtime value given by JavaScript
// NULL should be used explicitly in most cases to avoid confusion.
// JavaScript does not assign the value by default

let title = null;

console.log("title =" + title);

if(!title){
    console.log("The value of title is not known yet.")
}

//Optional Chaining

let books = {
    title:"The Typescript Language",
}

if (books && books.title) {
    console.log(`The title is ${books.title}`);
}

let cds = null;
// && operator checks if variable cds has a value then it moves to next check
if (cds && cds.title) {
    console.log(`The title is ${cds.title}`);
}

let banner = {
    headerField:{
        title:"The Banner Title is Typescript Language Bootcamp",
    }
};

if (banner?.headerField?.title) {
    console.log(`${banner.headerField.title}`);
}

// Null Coalescing Operator

let magazine = {
    cover:{
        coverTitle:"The Magazine Title is Typescript Language Bootcamp",
    }
};


if (banner?.headerField?.title) {
    console.log(`${magazine.cover.coverTitle}`);
}

let brandMagazine = null;
const coverPage = brandMagazine?.cover?.coverTitle ?? "The Brand Cover Page is not found"

console.log(coverPage)

// ************ Where to USE OPTIONAL CHAINING ************ //
// Academy with Values
const academy = {
    lectures:{
        lecTitle:"Bootcamp for Typescript"
    }
}
// Academy with NULL
const academy2 = null;
const lecTitle = academy?.lectures?.lecTitle ?? "No Lecture Titles found"

function logAcademyLectures(academy){
    // STEP I
    if(!academy?.lectures){
        console.log("Lectures not listed");
        return;
    //     STEP II
    } //Below there is no need for OPTIONAL CHAINING, is it already done in STEP I
    if(academy.lectures.lecTitle){
        console.log(`The Title is ${academy.lectures.lecTitle}`);
    }
}
logAcademyLectures(academy)
logAcademyLectures(academy2)