// Exporting Type
export type CourseType = {
  readonly title: string; //READONLY so property cannot be modified
  subtitle: string;
  lessonsCount?: number; //OPTIONAL so it may or may not apply to use case.
};
