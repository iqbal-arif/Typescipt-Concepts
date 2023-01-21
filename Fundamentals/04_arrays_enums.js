//Arrays
var numbers = [1, 2, 3];
numbers.push(4);
// Typescript does not all it as two types are different
// numbers.push("Hello World")
/************ENUMS************ */
// CourseType
var CourseType;
(function (CourseType) {
    CourseType[CourseType["FREE"] = 0] = "FREE";
    CourseType[CourseType["PREMIUM"] = 1] = "PREMIUM";
    CourseType[CourseType["PRIVATE"] = 2] = "PRIVATE";
    CourseType[CourseType["HIDDEN"] = 3] = "HIDDEN";
})(CourseType || (CourseType = {}));
// if FREE =10, then rest will be 11,12,13 respectively
var courseObject = {
    title: 'Typescript',
    //   type: 3,
    // Instead of number we use ENUMS
    type: CourseType.HIDDEN,
};
console.log(courseObject);
// Assigning String to ENUMS
var CourseTypeStr;
(function (CourseTypeStr) {
    CourseTypeStr["SUPERADMIN"] = "Super Admin";
    CourseTypeStr["ADMIN"] = "Admin";
    CourseTypeStr["SUPERVISOR"] = "Supervisor";
    CourseTypeStr["USER"] = "End User";
})(CourseTypeStr || (CourseTypeStr = {}));
var linuxUsers = {
    title: 'Linux IT Department',
    type: CourseTypeStr.USER,
};
console.log(linuxUsers);
