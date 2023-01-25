interface Course {
  title: string;
  subtitle: string;
  lessonsCount: number;
}

function freezeCourse(course: Course): Readonly<Course> {
  // This code is an "Object.freeze(course);" Object Constructor
  return Object.freeze(course);
}

const frozen = freezeCourse({
  title: 'Typescript Bootcamp',
  subtitle: 'Learn the language, build practical projects',
  lessonsCount: 100,
});

console.log(frozen);
// Because it is READONLY it cannot be modified
//frozen.title = "";
