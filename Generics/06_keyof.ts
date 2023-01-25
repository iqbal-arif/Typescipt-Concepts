const course: Course = {
  title: 'Typescript Bootcamp',
  subtitle: 'Learn the language, build practical projects',
  lessonsCount: 100,
};
/* GENERIC CONSTRAINT TYPES: Object keys can be defined as follows
type CourseKeys = "title"| "subtitle" | "lessonCount";
*/
// Generic Constraint Types:Object Properties can be obtained with "KeyOff" method
type CourseKeys = keyof Course;
/* The following function is not TYPE save, it can take an parameter value besides object key and property. Try replace the parameter to any other value and see the error.
export function extractProperty(data, property) {
  return data[property];
}
*/
// TYPE Save GENERIC CONSTRAINT TYPE
export function extractProperty<T, K extends keyof T>(data: T, property: K) {
  return data[property];
}
// keyOne and keyTwo knows  that there output are number and string respectively
const keyOne = extractProperty(course, 'lessonsCount');
const keyTwo = extractProperty(course, 'subtitle');
console.log(keyOne);
console.log(keyTwo);
