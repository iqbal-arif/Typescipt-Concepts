function freezeCourse(course) {
    return Object.freeze(course);
}
var frozen = freezeCourse({
    title: 'Typescript Bootcamp',
    subtitle: 'Learn the language, build practical projects',
    lessonsCount: 100
});
console.log(frozen);
//frozen.title = "";
