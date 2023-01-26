/**GENERIC CLASS**/
/* Class defined without Type Save
class KeyValue {
      constructor(public readonly key, public readonly value) {}
    */
//  GENERIC <K,V> Defined for Type Save
class KeyValue<K, V> {
  constructor(public readonly key: K, public readonly value: V) {}

  print() {
    console.log(`key = ${this.key} value = ${this.value}`);
  }
}

const p1 = new KeyValue('1', 10);

const val1 = p1.value;
console.log(val1);
const p2 = new KeyValue(2, 'Hello World');

const val2 = p2.value;
console.log(val2);

/***GENERIC OBJECT***/
const course: Course = {
  title: 'Typescript Bootcamp',
  subtitle: 'Learn the language, build practical projects',
  lessonsCount: 100,
};
// Instantiating Class keyValue with paramter (key as string, and  course object as value) key is string "3" and value is the object course
const p3 = new KeyValue('3', course);

const val3 = p3.value;

console.log(val3);
