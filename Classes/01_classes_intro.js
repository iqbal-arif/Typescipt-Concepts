"use strict";
/*
1. date is a class
call date constructor with word new to instantiate an Object that brings data methods, such as, getDate, getMonth,etc.

2. Promise API is OBJECT ORIENTED
3. Angular is a class based framework

***** OOP ****
1. ENCAPSULATION: Data is made PRIVATE by adding private next to it. But it can be modified with the class object
2. INHERITANCE: Code reuse mechanism in OOP
2. POLYMORPHISM
3.
*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var _03_singleton_1 = require("./03_singleton");
// const date = new Date();
// date;
/********** FIRST CLASS **********/
// Added Interface HasId from another file
var Course = /** @class */ (function () {
    //Defining the TYPES for the VARIABLE
    /*
     **** SIMPLIFYING IT ****
    private title: string;
    private subtitle: string;
    private creationDt: Date;
  
    //   Constructor Function Initialize the class
    //   It is called when instances of the class are set
    constructor(title: string, subtitle: string, creationDt: Date) {
      this.title = title;
      this.subtitle = subtitle;
      this.creationDt = creationDt;
    }
     **** SIMPLIFYING IT ****
    */
    //   If the Value Members keys and values are same then we can combine everything and simplify it as follows
    function Course(id, 
    // PRIVATE value are visible to its own class; Not visible to subclasses and outside class.
    // private _title: string,
    _title, price, 
    // Variable type definition with :string in front of it, or
    // private subtitle: string,
    // Value can be initialized without type definition :string
    subtitle, 
    // Date here is used as interface in Typescript language. It is infer as Date value
    // private creationDt = Date
    // This can be initialized while inferring as Date as well
    creationDt) {
        if (subtitle === void 0) { subtitle = ''; }
        if (creationDt === void 0) { creationDt = new Date(2020, 1, 1); }
        this.id = id;
        this._title = _title;
        this.price = price;
        this.subtitle = subtitle;
        this.creationDt = creationDt;
        // Calling price Validator in Constructor Function
        this.validate();
        // This code is added for SINGLETON INSTANTIATION
        var service = _03_singleton_1.CoursesService.instance();
        // Accessing STATIC Property through CLASS Course
        Course.TOTAL_COURSES++;
    }
    // This code is added for interface HasId
    Course.prototype.printId = function () {
        console.log("The course id is ".concat(this.id));
    };
    // Method to validate that price is not zero
    // protected means it is available to it's class and all sub-classes
    Course.prototype.validate = function () {
        console.log('Called Course validate()');
        if (this.price <= 0) {
            throw 'Price must be larger than zero';
        }
    };
    /**STATIC METHOD**/
    // It is like an plain function with association to class Course NAME. Otherwise it won't work.
    Course.printTitle = function (course) {
        //to use
        console.log("The title of the course ".concat(course.title));
    };
    Course.prototype.changeTitle = function () {
        this.title = '';
        // this.subtitle;
    };
    Object.defineProperty(Course.prototype, "title", {
        get: function () {
            return this._title;
        },
        /**SETTER**/
        //we cannot pass the instance variable in the function defined in class. That means
        set: function (newTitle) {
            if (!newTitle) {
                throw 'Title cannot be empty';
            }
            this._title = newTitle;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Course.prototype, "age", {
        // Methods also refer as Behavior
        /***ADDING GET NEXT TO METHOD ALLOWS IT BE USED AS .GET METHOD: SEE NOTE I */
        /**GETTER**/
        get: function () {
            var ageInMs = new Date().getTime() - this.creationDt.getTime();
            //   Age in Ms is divided by 1000s then divided by 60 mins and then 24 hr
            return Math.round(ageInMs / 1000 / 60 / 24);
        },
        enumerable: false,
        configurable: true
    });
    /***STATIC PROPERTIES**/
    // To show properties are static use UpperCase
    Course.TOTAL_COURSES = 0;
    // Static Property as a CONST VALUE
    Course.TYPESCRIPT_TITLE = 'Typescript Bootcamp';
    return Course;
}());
/**CLASS INHERITANCE**/
// Using inheritance to add a Free Course Class and utilizing parent properties.
var FreeCourse = /** @class */ (function (_super) {
    __extends(FreeCourse, _super);
    // id:string added for interface HasId
    function FreeCourse(id, title, subtitle, creationDt) {
        // id:string added for interface HasId
        if (subtitle === void 0) { subtitle = ''; }
        if (creationDt === void 0) { creationDt = new Date(2020, 1, 1); }
        return _super.call(this, id, title, 0, subtitle, creationDt) || this;
    }
    // Validator Method
    FreeCourse.prototype.validate = function () {
        console.log('Called FreeCourse validate()');
    };
    // This code is added due to Abstract Classification.
    FreeCourse.prototype.quantify = function () {
        console.log('This added because Abstract Class has abstract method');
    };
    return FreeCourse;
}(Course));
/**ABSTRACT CLASS */
// Is a TEMPLATE for Class
// Cannot be instantiated
/**Accessing Private Static Property from outside a Class */
// Course.TOTAL_COURSES; //error
// Creating an Instance of Course with Class Course
// This Instantiate is without Initializing Value in constructor function.
// const course = new Course(
//   'Typescript Bootcamp',
//   'Learn the language fundamentals, build practical projects',
//   new Date(2000, 1, 1)
// );
// This one is after Initializing while keeping the Value Types of TS.
// Activate these 2 codes as the are used in the examples above. It is commented due Abstract Class. As by definition Abstract Class cannot be instantiated.
// const course = new Course(Course.TYPESCRIPT_TITLE, 100);
// console.log(course.title);
// 208A is an Id added for interface HasId
var angular = new FreeCourse('208A', 'Angular For Beginner');
// Static Function Access outside the Class 0bject
Course.printTitle(angular);
// Cannot be called from instance of
// ****** NOTE II ****
// course.title = 'New Value';
/*
THIS IS BEFORE USING GET AGE()
console.log(course.age());
*/
// ****** NOTE I ****
// Activate these 2 codes as the are used in the examples above.
// console.log(course.age);
// console.log(course);
console.log(Course.TOTAL_COURSES);
_03_singleton_1.CoursesService.instance();
/*

import {HasId, HasTitle} from "./02-interfaces";
import {CoursesService} from "./03-singleton";

abstract class Course implements HasTitle {

    private static TOTAL_COURSES = 0;

    static readonly TYPESCRIPT_TITLE = "Typescript Bootcamp";

    protected constructor(
        public id:string,
        protected _title:string,
        protected price:number,
        protected subtitle = "",
        protected creationDt = new Date(2000,1,1)
    ) {

        this.validate();

        const service = CoursesService.instance();

        Course.TOTAL_COURSES++;

    }

    printId() {
        console.log(`The course id is ${this.id}`);
    }

    protected abstract validate();

    static printTitle(course: Course) {
        console.log(`The title of the course ${course.title}`)
    }

    get title() {
        return this._title;
    }

    set title(newTitle:string) {
        if (!newTitle) {
            throw "Title cannot be empty";
        }

        this._title = newTitle;
    }

    get age() {
        const ageInMs = new Date().getTime() - this.creationDt.getTime();

        return Math.round(ageInMs / 1000 / 60 / 24);
    }

}

class FreeCourse extends Course {

    constructor( id:string,
                 title:string,
                 subtitle = "",
                 creationDt = new Date(2000,1,1)) {

        super(id, title, 0, subtitle, creationDt);

    }

    protected validate() {
        console.log(`Called FreeCourse validate()`);
    }

}

//const typescript = new Course(Course.TYPESCRIPT_TITLE, 100);

//console.log(typescript.title);

const angular = new FreeCourse("1", "Angular For Beginners");

CoursesService.instance();

console.log(angular);

*/
