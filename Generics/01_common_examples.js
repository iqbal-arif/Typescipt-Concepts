/***GENERICS TYPES**/
// <> is used to defined generics types
var numbers = new Array();
numbers.push(10);
var promise = new Promise(function (resolve, reject) {
    resolve('Hello World');
});
promise.then(function (val) { });
