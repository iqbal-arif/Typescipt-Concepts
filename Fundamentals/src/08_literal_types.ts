//  Type Literals : when hover on it shows exactly as is as its type. Not string or number or any type
const lessonsCount = 10;

const title = 'TypeScript Course';

// Type literals with Union Types
// Example 1
let pageSize: 10 | 15 | 20 | 25 = 15;
// Because of Type Literals definition, only list page number can be used.
pageSize = 15;

// Example 2
let courseStatus: 'draft' | 'unpublished' | 'published' | 'archived' = 'draft';
courseStatus = 'published';
