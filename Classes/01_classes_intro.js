/*
1. date is a class
call date constructor with word new to instantiate an Object that brings data methods, such as, getDate, getMonth,etc.

2. Promise API is OBJECT ORIENTED
3. Angular is a class based framework

***** OOP ****
1. ENCAPSULATION: Data is made PRIVATE by adding private next to it. But it can be modified with the class object
2. INHERITANCE
2. POLYMORPHISM
3.
*/
// const date = new Date();
// date;
/********** FIRST CLASS **********/
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
    function Course(_title, 
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
        this._title = _title;
        this.subtitle = subtitle;
        this.creationDt = creationDt;
    }
    Course.prototype.changeTitle = function () {
        this.title = '';
        // this.subtitle;
    };
    Object.defineProperty(Course.prototype, "title", {
        /**SETTER**/
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
    return Course;
}());
// Creating an Instance of Course with Class Course
// This Instantiate is without Initializing Value in constructor function.
// const course = new Course(
//   'Typescript Bootcamp',
//   'Learn the language fundamentals, build practical projects',
//   new Date(2000, 1, 1)
// );
// This one is after Initializing while keeping the Value Types of TS.
var course = new Course('Typescript Bootcamp');
// ****** NOTE II ****
// course.title = 'New Value';
/*
THIS IS BEFORE USING GET AGE()
console.log(course.age());
*/
// ****** NOTE I ****
console.log(course.age);
console.log(course);
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
