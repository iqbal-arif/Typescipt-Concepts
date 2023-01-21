//Arrays

const numbers = [1, 2, 3];

numbers.push(4);

// Typescript does not all it as two types are different
// numbers.push("Hello World")

/************ENUMS************ */

// CourseType

enum CourseType {
  FREE, // FREE has a value of 0 by default, so next number in row will be 1
  PREMIUM, //1
  PRIVATE, //2
  HIDDEN, //3
}
// if FREE =10, then rest will be 11,12,13 respectively

const courseObject = {
  title: 'Typescript',
  //   type: 3,
  // Instead of number we use ENUMS
  type: CourseType.HIDDEN,
};

console.log(courseObject);

// Assigning String to ENUMS
enum CourseTypeStr {
  SUPERADMIN = 'Super Admin',
  ADMIN = 'Admin',
  SUPERVISOR = 'Supervisor',
  USER = 'End User',
}

const linuxUsers = {
  title: 'Linux IT Department',
  type: CourseTypeStr.USER,
};

console.log(linuxUsers);
