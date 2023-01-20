/******Module Imports***** */
import { PAGE_SIZE, COURSE, Course } from './12.1_modules_exports';

const pageSize = PAGE_SIZE;

// Importing the 14_module_reexports Modules
// This is how Re-EXPORT works for the third party package

import { CourseType, loadAllCourses, saveCourse } from './14_module_reexports';
