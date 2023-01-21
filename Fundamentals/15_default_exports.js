"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TYPESCRIPT_COURSE = exports.COURSE_TOTAL = void 0;
exports.COURSE_TOTAL = 20;
// Exporting Type
exports.TYPESCRIPT_COURSE = {
    title: 'Typescript Language',
    subtitle: 'Beginner to Intermediate',
    lessonsCount: 9,
};
// Add default next to export if this export is commonly imported in files
function printTypescriptCourse(TYPESCRIPT_COURSE) {
    console.log("The course title is ".concat(TYPESCRIPT_COURSE.title));
}
exports.default = printTypescriptCourse;
