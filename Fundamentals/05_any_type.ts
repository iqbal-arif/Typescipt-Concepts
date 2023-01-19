let lessonCount: any = 10;
// String type
lessonCount = 'Any type means any Type is possible';

// Array type
lessonCount = [10, 45, 30];

// Object type
lessonCount = {
  typeCount: 25,
};

// Boolean type
lessonCount = true;

// Null
lessonCount = null;

// Undefined
lessonCount = undefined;

// Another Array example
let lessonArray: any[] = [10, 62, 3, 'Any', true];

/*************INO Implicit ANY********* */
printUser('End users', 10);

function printUser(title: string, noOfUsers: number) {
  console.log(`Linux has: ${noOfUsers} ${title}`);
}
