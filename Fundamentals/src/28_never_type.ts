let anyValue: any;
// ****TYPE "NEVER" does not accept any kind or type of value
//let neverValue : never = undefined;

//neverValue["property"] = 10;

type CourseStatus = 'draft' | 'published' | 'unpublished';

let courseStatus: CourseStatus;

if (courseStatus == 'draft') {
} else if (courseStatus == 'published') {
} else if (courseStatus == 'unpublished') {
} else {
  // USE CASE FOR TYPE NEVER
  unexpectedError(courseStatus);
}
// Function utilizing TYPE "NEVER"
function unexpectedError(value: never) {
  throw new Error(`Unexpected value: ${value}`);
}
