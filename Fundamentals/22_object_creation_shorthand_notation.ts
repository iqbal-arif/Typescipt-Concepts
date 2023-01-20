interface Course {
  title: string;
  subtitle: string;
  lessonsCount: number;
}

const title = 'Typescript Bootcamp',
  subtitle = 'Learn the language fundamentals, build practical projects',
  lessonsCount = 10;
// When Object keys and values have identical names then write it in shorthand
const course: Course = {
  title,
  subtitle,
  lessonsCount,
};
