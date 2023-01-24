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

import { HasId, HasTitle } from './02_interfaces';
import { CoursesService } from './03_singleton';

// const date = new Date();
// date;

/********** FIRST CLASS **********/
// Added Interface HasId from another file
abstract class Course implements HasId, HasTitle {
  /***STATIC PROPERTIES**/
  // To show properties are static use UpperCase
  static TOTAL_COURSES = 0;
  // Static Property as a CONST VALUE
  static readonly TYPESCRIPT_TITLE = 'Typescript Bootcamp';

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
  constructor(
    public id: string,
    // PRIVATE value are visible to its own class; Not visible to subclasses and outside class.
    // private _title: string,
    protected _title: string,
    protected price: number,
    // Variable type definition with :string in front of it, or
    // private subtitle: string,
    // Value can be initialized without type definition :string
    protected subtitle = '',
    // Date here is used as interface in Typescript language. It is infer as Date value
    // private creationDt = Date
    // This can be initialized while inferring as Date as well
    protected creationDt = new Date(2020, 1, 1)
  ) {
    // Calling price Validator in Constructor Function
    this.validate();

    // This code is added for SINGLETON INSTANTIATION
    const service = CoursesService.instance();
    // Accessing STATIC Property through CLASS Course
    Course.TOTAL_COURSES++;
  }
  // This code is added for interface HasId
  printId() {
    console.log(`The course id is ${this.id}`);
  }
  // Method to validate that price is not zero
  // protected means it is available to it's class and all sub-classes
  protected validate() {
    console.log('Called Course validate()');

    if (this.price <= 0) {
      throw 'Price must be larger than zero';
    }
  }

  // ABSTRACT Class cannot have any IMPLEMENTATION or action in the function if prefixed by Abstract. It is just a Template. The below code will give error due to implementation in it
  // protected abstract quantify(){console.log(this.age)};
  protected abstract quantify();
  /**STATIC METHOD**/
  // It is like an plain function with association to class Course NAME. Otherwise it won't work.
  static printTitle(course: Course) {
    //to use
    console.log(`The title of the course ${course.title}`);
  }

  changeTitle() {
    this.title = '';
    // this.subtitle;
  }

  /**SETTER**/
  //we cannot pass the instance variable in the function defined in class. That means

  set title(newTitle: string) {
    if (!newTitle) {
      throw 'Title cannot be empty';
    }
    this._title = newTitle;
  }

  get title() {
    return this._title;
  }
  // Methods also refer as Behavior
  /***ADDING GET NEXT TO METHOD ALLOWS IT BE USED AS .GET METHOD: SEE NOTE I */
  /**GETTER**/
  get age() {
    const ageInMs = new Date().getTime() - this.creationDt.getTime();
    //   Age in Ms is divided by 1000s then divided by 60 mins and then 24 hr
    return Math.round(ageInMs / 1000 / 60 / 24);
  }
}

/**CLASS INHERITANCE**/
// Using inheritance to add a Free Course Class and utilizing parent properties.
class FreeCourse extends Course {
  // id:string added for interface HasId
  constructor(
    id: string,
    title: string,
    subtitle = '',
    creationDt = new Date(2020, 1, 1)
  ) {
    // id:string added for interface HasId

    super(id, title, 0, subtitle, creationDt); // 0 is the price
  }
  // Validator Method
  protected validate(): void {
    console.log('Called FreeCourse validate()');
  }
  // This code is added due to Abstract Classification.
  protected quantify() {
    console.log('This added because Abstract Class has abstract method');
  }
  // This code is added for interface HasId
}

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
const angular = new FreeCourse('208A', 'Angular For Beginner');
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
// This code is added for Singleton Instantiation  to check if it going to run again or not.
CoursesService.instance();

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
