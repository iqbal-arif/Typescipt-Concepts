"use strict";
exports.__esModule = true;
exports.merge = void 0;
/**OBJECT with Properties TYPE ONE */
var someData = {
    title: 'Typescript Bootcamp',
    subtitle: 'Learn the language, build practical projects',
    lessonsCount: 100
};
/**OBJECT with Properties TYPE TWO */
var moreData = {
    seqNo: 10,
    price: 100
};
/**MERGE FUNCTION uses ASSIGN to return two Object together.
export function merge(obj1, obj2) {
  return Object.assign(obj1, obj2);
}
// if hover on merge it is clear the TYPE shows ANY. that is not right, so we use GENERIC to fix it
const merged = merge(someData, moreData);
*/
/**GENERIC T & U is used to separate Two Types**/
function merge(obj1, obj2) {
    return Object.assign(obj1, obj2);
}
exports.merge = merge;
var merged = merge(someData, moreData);
console.log(merged);
