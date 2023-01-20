interface Course {
  title: string;
  subtitle: string;
  lessonsCount: number;
}

// Object Type Definition for returning Object
type CreateCourse = (
  title: string,
  subtitle: string,
  lessonsCount: number
) => Course;

// Function Type Definition
type OnCourseCreated = (course: Course) => void;

const createCourse = (
  title: string,
  subtitle: string,
  lessonsCount: number,
  callback: OnCourseCreated
) => {
  console.log(` Creating course with Title: ${title}, 
    Subtitle: ${subtitle} lessons count: ${lessonsCount}`);

  const course = {
    title,
    subtitle,
    lessonsCount,
  };

  callback(course);

  return course;
};
