function saveCourse(course, callback) {
    var _this = this;
    this.course = course;
    console.log(this.course);
    // setTimeout(()=>{}) will inherit  this.course = course context
    //   But setTimeout(function(){}) will have its own this.course = course context
    setTimeout(function () {
        var _a, _b;
        callback((_b = (_a = _this.course) === null || _a === void 0 ? void 0 : _a.title) !== null && _b !== void 0 ? _b : 'unknown course');
    }, 1000);
}
var cb = function (title) { return console.log('Save successful.', title); };
saveCourse({ title: 'Typescript Bootcamp' }, cb);
