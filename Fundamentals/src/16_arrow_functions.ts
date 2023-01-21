function saveCourse(course, callback: Function) {
  this.course = course;
  console.log(this.course);

  // setTimeout(()=>{}) will inherit  this.course = course context
  //   But setTimeout(function(){}) will have its own this.course = course context
  setTimeout(() => {
    callback(this.course?.title ?? 'unknown course');
  }, 1000);
}

const cb = (title: string) => console.log('Save successful.', title);

saveCourse({ title: 'Typescript Bootcamp' }, cb);
