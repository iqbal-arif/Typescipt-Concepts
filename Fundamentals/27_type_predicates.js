var course = {
    title: 'Typescript Bootcamp',
    subtitle: 'Learn the language fundamentals, build practical projects',
    lessonsCount: 10
};
// The parameter "course" is UNKNOWN in the IF BLOCK
if (isCourse(course)) {
    // ONCE
    //   course.subtitle;
}
//******value is Course turns function into PREDICATE FUNCTION*****
// This is called as ***TYPE PREDICATE****
// Returns "BOOLEAN" "TRUE"
function isCourse(value) {
    var course = value;
    // return true;
    return (course === null || course === void 0 ? void 0 : course.title) != null && (course === null || course === void 0 ? void 0 : course.subtitle) != null;
}
