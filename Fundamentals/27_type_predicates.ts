// Type Narrowing
if (typeof unknownValue == 'string') {
  let value14: string = unknownValue;
}

interface Course {
  readonly title: string;
  subtitle: string;
  lessonsCount?: number;
}

const course: unknown = {
  title: 'Typescript Bootcamp',
  subtitle: 'Learn the language fundamentals, build practical projects',
  lessonsCount: 10,
};
// The parameter "course" is UNKNOWN in the IF BLOCK
if (isCourse(course)) {
  // ONCE
  //   course.subtitle;
}
//******value is Course turns function into PREDICATE FUNCTION*****
// This is called as ***TYPE PREDICATE**** is type narrowing method
// Returns "BOOLEAN" "TRUE"
function isCourse(value: unknown): value is Course {
  const course = value as Course;
  // return true;
  return course?.title != null && course?.subtitle != null;
}
