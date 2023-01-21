var anyValue;
var courseStatus;
if (courseStatus == 'draft') {
}
else if (courseStatus == 'published') {
}
else if (courseStatus == 'unpublished') {
}
else {
    // USE CASE FOR TYPE NEVER
    unexpectedError(courseStatus);
}
// Function utilizing TYPE "NEVER"
function unexpectedError(value) {
    throw new Error("Unexpected value: ".concat(value));
}
