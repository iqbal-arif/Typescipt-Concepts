/*
1. date is a class
call date constructor with word new to instantiate an Object that brings data methods, such as, getDate, getMonth,etc.

2. Promise API is OBJECT ORIENTED
3. Angular is a class based framework

***** OOP ****
1. INHERITANCE
2. POLYMORPHISM
3.
*/
var date = new Date();
date;
/********** FIRST CLASS **********/
var Course = /** @class */ (function () {
    //   Constructor Function Initialize the class
    //   It is called when instances of the class are set
    function Course(title, subtitle, creationDt) {
        this.title = title;
        this.subtitle = subtitle;
        this.creationDt = creationDt;
    }
    // Methods also refer as Behavior
    Course.prototype.age = function () {
        var ageInMs = new Date().getTime() - this.creationDt.getTime();
        //   Age in Ms is divided by 1000s then divided by 60 mins and then 24 hr
        return Math.round(ageInMs / 1000 / 60 / 24);
    };
    return Course;
}());
// Creating an Instance of Course with Class Course
var course = new Course('Typescript Bootcamp', 'Learn the language fundamentals, build practical projects', new Date(2000, 1, 1));
console.log(course.age());
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
