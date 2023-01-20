export const COURSE_TOTAL = 20;

// Exporting Type
export const TYPESCRIPT_COURSE = {
  title: 'Typescript Language',
  subtitle: 'Beginner to Intermediate',
  lessonsCount: 9,
};

// Add default next to export if this export is commonly imported in files
export default function printTypescriptCourse(TYPESCRIPT_COURSE) {
  console.log(`The course title is ${TYPESCRIPT_COURSE.title}`);
}
