/******Module Imports***** */
import { PAGE_SIZE, COURSE, Course } from './12.1_modules_exports';

const pageSize = PAGE_SIZE;

import { HELLO_WORLD } from './32_plain_javascript';

// Importing the 14_module_reexports Modules
// This is how Re-EXPORT works for the third party package

import { CourseType, loadAllCourses, saveCourse } from './14_module_reexports';

import {
  COURSE_TOTAL,
  TYPESCRIPT_COURSE,
  //   printTypescriptCourse,
} from './15_default_exports';

// To import multiple constants  at once
import * as constants from './15_default_exports';
// Now to import specific constant, do the followings
constants.TYPESCRIPT_COURSE;

// DEFAULT IMPORT
import moduleName from './15_default_exports';
moduleName({ constants });
