// Null and Undefined
// Undefinned is a runtime value given by JavaScript
// NULL should be used explicitly in most cases to avoid confusion.
// JavaScript does not assign the value by default
var _a, _b, _c, _d, _e, _f;
var title = null;
console.log("title =" + title);
if (!title) {
    console.log("The value of title is not known yet.");
}
//Optional Chaining
var books = {
    title: "The Typescript Language"
};
if (books && books.title) {
    console.log("The title is ".concat(books.title));
}
var cds = null;
// && operator checks if variable cds has a value then it moves to next check
if (cds && cds.title) {
    console.log("The title is ".concat(cds.title));
}
var banner = {
    headerField: {
        title: "The Banner Title is Typescript Language Bootcamp"
    }
};
if ((_a = banner === null || banner === void 0 ? void 0 : banner.headerField) === null || _a === void 0 ? void 0 : _a.title) {
    console.log("".concat(banner.headerField.title));
}
// Null Coalescing Operator
var magazine = {
    cover: {
        coverTitle: "The Magazine Title is Typescript Language Bootcamp"
    }
};
if ((_b = banner === null || banner === void 0 ? void 0 : banner.headerField) === null || _b === void 0 ? void 0 : _b.title) {
    console.log("".concat(magazine.cover.coverTitle));
}
var brandMagazine = null;
var coverPage = (_d = (_c = brandMagazine === null || brandMagazine === void 0 ? void 0 : brandMagazine.cover) === null || _c === void 0 ? void 0 : _c.coverTitle) !== null && _d !== void 0 ? _d : "The Brand Cover Page is not found";
console.log(coverPage);
// ************ Where to USE OPTIONAL CHAINING ************ //
// Academy with Values
var academy = {
    lectures: {
        lecTitle: "Bootcamp for Typescript"
    }
};
// Academy with NULL
var academy2 = null;
var lecTitle = (_f = (_e = academy === null || academy === void 0 ? void 0 : academy.lectures) === null || _e === void 0 ? void 0 : _e.lecTitle) !== null && _f !== void 0 ? _f : "No Lecture Titles found";
function logAcademyLectures(academy) {
    // STEP I
    if (!(academy === null || academy === void 0 ? void 0 : academy.lectures)) {
        console.log("Lectures not listed");
        return;
        //     STEP II
    } //Below there is no need for OPTIONAL CHAINING, is it already done in STEP I
    if (academy.lectures.lecTitle) {
        console.log("The Title is ".concat(academy.lectures.lecTitle));
    }
}
logAcademyLectures(academy);
logAcademyLectures(academy2);
