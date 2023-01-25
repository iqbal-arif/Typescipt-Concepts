// Type Interface are used to define property types and use its interface name with function or objects
/***COURSE INTERFACE**/
interface Course {
  title: string;
  subtitle: string;
  lessonsCount: number;
}
/**freezeCourse function USES COURSE INTERFACE to return FreezeCourse Object based on Interface */
/***function parameter course is based on InterFace Course */
// EXPORT as a prefix is used since two function with same name gives error in TYPESCRIPT. Take out export and see the error
export function freezeCourse(course: Course): Readonly<Course> {
  return Object.freeze(course);
}
/* Calling freezeCourse with course parameter
const frozenCourse = freezeCourse(course);
*/
/**freezeLesson function USES COURSE INTERFACE to return FreezeCourse Object based on Interface */
/***function parameter lesson is based on InterFace Lesson given below */
function freezeLesson(lesson: Lesson): Readonly<Lesson> {
  return Object.freeze(lesson);
}
/**GENERIC Function Definition that accommodates both freezeCourse & freezeLesson function.
 * Uses Generic function Type, Generic Input, Generic Output, & Extends Oject is used to control the Object Type. Without extends object, we could pass number,string, or boolean as a parameter to the function.
 */
function freeze<T extends object>(input: T): Readonly<T> {
  return Object.freeze(input);
}

// Course OBJECT Property definition
const course: Course = {
  title: 'Typescript Bootcamp',
  subtitle: 'Learn the language, build practical projects',
  lessonsCount: 100,
};
// freezeCourse is now Generic freeze function with course as input
const frozenCourse = freeze(course);

// const frozenNumber = freeze("10");

/* This number, string , and boolean behavior is controlled by "extends object" used in the GENERIC Function
frozenCourse.title = "";

/***LESSON INTERFACE**/
interface Lesson {
  title: string;
  seqNo: number;
}

// freezeCourse is now Generic freeze function with course as input
const frozenLesson = freeze({
  title: 'Lesson Title',
  seqNo: 10,
});

/**GENERIC Function Definition that accommodates both freezeCourse & freezeLesson function.

const frozenLesson = freeze({
  title: 'Lesson Title',
  seqNo: 10,
});*/
