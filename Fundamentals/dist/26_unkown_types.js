// To ESCAPE Type Error or BYPASS an Error use "ANY" type
// This should be a LAST RESORT as it is very permissive
var anyValue;
anyValue = true;
anyValue = 10;
anyValue = 'Hello World';
anyValue = [];
anyValue = {};
anyValue = null;
anyValue = undefined;
var value1 = anyValue;
var value2 = anyValue;
var value3 = anyValue;
var value4 = anyValue;
var value5 = anyValue;
var value6 = anyValue;
var value7 = anyValue;
var value8 = anyValue;
// Use  "UNKNOWN TYPE" Variable with EXTRA PRECAUTION
var unknownValue;
unknownValue = true;
unknownValue = 10;
unknownValue = 'Hello World';
unknownValue = [];
unknownValue = {};
unknownValue = null;
unknownValue = undefined;
var value10 = unknownValue;
var value11 = unknownValue;
//let value12: boolean = unknownValue;
//let value13: number = unknownValue;
if (typeof unknownValue == 'string') {
    var value14 = unknownValue;
}
// let value14: string = unknownValue;
// let value15: object = unknownValue;
// let value16: any[] = unknownValue;
// let value17: Function = unknownValue;
