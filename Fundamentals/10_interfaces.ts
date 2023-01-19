/*********** Interfaces Type ************/

interface Course {
  readonly title: string; //READONLY so property cannot be modified
  subtitle: string;
  lessonsCount?: number; //OPTIONAL so it may or may not apply to use case.
}
// Course 1

const course: Course = {
  title: 'Typescript Language',
  subtitle: 'Beginner to Intermediate',
  lessonsCount: 8,
};
// Course 2

const otherCourse: Course = {
  title: 'Typescript Advanced Language',
  subtitle: 'Advanced',
  rating: 9, // this works even though interface extension is defined later in the part.
};

// ******* Interfaces Type Can be Extended ********* /
// ******* Aliases Type Cannot be Extended ********* /

// Adding another type to the existing interface

interface Course {
  rating?: number;
}

/******************/
/****Use Interface for Objects****/
/****Use Aliases for defining selection type (see aliases topic)****/
