/**OBJECT with Properties TYPE ONE */
const someData = {
  title: 'Typescript Bootcamp',
  subtitle: 'Learn the language, build practical projects',
  lessonsCount: 100,
};

/**OBJECT with Properties TYPE TWO */
const moreData = {
  seqNo: 10,
  price: 100,
};
/**MERGE FUNCTION uses ASSIGN to return two Object together. 
export function merge(obj1, obj2) {
  return Object.assign(obj1, obj2);
}
// if hover on merge it is clear the TYPE shows ANY. that is not right, so we use GENERIC to fix it
const merged = merge(someData, moreData);
*/
/**GENERIC T & U is used to separate Two Types**/
export function merge<T, U>(obj1: T, obj2: U) {
  return Object.assign(obj1, obj2) as T & U;
}

const merged = merge(someData, moreData);
console.log(merged);
