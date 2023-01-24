// APP Requirement to have a SINGLE INSTANTIATION

export class CoursesService {
  // Defining Variable Instance of Type CoursesService
  private static INSTANCE: CoursesService;
  // Made it Private so it can be used within the class object
  private constructor() {
    console.log(`The CoursesService was initialized.`);
  }
  //   This Instance method will be called only once as it checks if it was instantiated or not
  static instance() {
    if (!CoursesService.INSTANCE) {
      CoursesService.INSTANCE = new CoursesService();
    }
    return CoursesService.INSTANCE;
  }
}
