// TUPLES is referenced here
var courseRecord = [
    'Typescript Bootcamp',
    'Learn the language fundamentals',
    100,
];
// TUPLES is referenced here
function createCourse(title, subtitle) {
    console.log(" Creating course with Title: ".concat(title, ", Subtitle: ").concat(subtitle, " "));
    return [title, subtitle, 100];
}
