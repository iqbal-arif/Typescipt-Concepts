/**GENERIC CLASS**/
var KeyValue = /** @class */ (function () {
    // class KeyValue<K, V> {
    //   constructor(public readonly key: K, public readonly value: V) {}
    function KeyValue(key, value) {
        this.key = key;
        this.value = value;
    }
    KeyValue.prototype.print = function () {
        console.log("key = ".concat(this.key, " value = ").concat(this.value));
    };
    return KeyValue;
}());
var p1 = new KeyValue('1', 10);
var val1 = p1.value;
console.log(val1);
var p2 = new KeyValue(2, 'Hello World');
var val2 = p2.value;
console.log(val2);
/***GENERIC OBJECT***/
var course = {
    title: 'Typescript Bootcamp',
    subtitle: 'Learn the language, build practical projects',
    lessonsCount: 100
};
var p3 = new KeyValue('3', course);
var val3 = p3.value;
console.log(val3);
