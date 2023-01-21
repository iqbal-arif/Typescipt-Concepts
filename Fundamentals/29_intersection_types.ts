interface HasId {
  id: string;
}
interface HasTitle {
  title: string;
  description: string;
  lessonCount: number;
}

// Combining Two types "HasId" and "HasTitle"
type Course = HasId & HasTitle;
