/******Module Exports***** */
// Exporting Variable
export const PAGE_SIZE = 1000;

// Exporting Type
export type Course = {
  readonly title: string; //READONLY so property cannot be modified
  subtitle: string;
  lessonsCount?: number; //OPTIONAL so it may or may not apply to use case.
};

// Exporting Type
export const COURSE = {
  title: 'Typescript Language',
  subtitle: 'Beginner to Intermediate',
  lessonsCount: 8,
};
