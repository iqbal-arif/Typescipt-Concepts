interface Course {
  title: string;
  subtitle: string;
  stats: {
    lessonsCount: number;
  };
}

let course: Course = {
  title: 'Typescript Bootcamp',
  subtitle: 'Learn the language fundamentals, build practical projects',
  stats: {
    lessonsCount: 10,
  },
};
// **** SPREAD OPERATOR TO Create Shallow copy of an object ****
const newCourse = { ...course };

console.log(newCourse);

course.stats.lessonsCount = 100;

console.log(newCourse);
