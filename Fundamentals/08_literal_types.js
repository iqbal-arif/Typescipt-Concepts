//  Type Literals : when hover on it shows exactly as is as its type. Not string or number or any type
var lessonsCount = 10;
var title = 'TypeScript Course';
// Type literals with Union Types
// Example 1
var pageSize = 15;
// Because of Type Literals definition, only list page number can be used.
pageSize = 15;
// Example 2
var courseStatus = 'draft';
courseStatus = 'published';
