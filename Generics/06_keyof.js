"use strict";
exports.__esModule = true;
exports.extractProperty = void 0;
var course = {
    title: 'Typescript Bootcamp',
    subtitle: 'Learn the language, build practical projects',
    lessonsCount: 100
};
/* The following function is not TYPE save, it can take an parameter value besides object key and property. Try replace the parameter to any other value and see the error.
export function extractProperty(data, property) {
  return data[property];
}
*/
// TYPE Save GENERIC CONSTRAINT TYPE
function extractProperty(data, property) {
    return data[property];
}
exports.extractProperty = extractProperty;
// keyOne and keyTwo knows  that there output are number and string respectively
var keyOne = extractProperty(course, 'lessonsCount');
var keyTwo = extractProperty(course, 'subtitle');
console.log(keyOne);
console.log(keyTwo);
