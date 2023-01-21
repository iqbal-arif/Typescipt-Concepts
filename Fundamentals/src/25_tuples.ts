// Custom Object Type
interface Course {
  title: string;
  subtitle: string;
  lessonsCount: number;
}
// ***TUPLES****
type CourseRecord = [string, string, number];

// TUPLES is referenced here
const courseRecord: CourseRecord = [
  'Typescript Bootcamp',
  'Learn the language fundamentals',
  100,
];

// TUPLES is referenced here
function createCourse(title: string, subtitle: string): CourseRecord {
  console.log(` Creating course with Title: ${title}, Subtitle: ${subtitle} `);

  return [title, subtitle, 100];
}
