// Custom Course Interface
export interface Course {
  /*  In interface type modifying of one or two properties is only possible if "?" is placed next to each value as shown . "?" means the value is OPTIONAL
    title?:string;
    subtitle?:string;
    lessonsCount?: number;
*/
  /****PARTIAL WAY**/
  //   For Updating a single or Mixed Multiple Properties
  title: string;
  subtitle: string;
  lessonsCount: number;
}

// Using PARTIAL to update single or multiple mixed properties without any compile error
export function updateCourse(courseId: string, update: Partial<Course>) {}

updateCourse('1', {
  title: 'New version of title',
});

updateCourse('1', {
  subtitle: 'New version of subtitle',
});

updateCourse('1', {
  title: 'New version of title',
  lessonsCount: 100,
});
