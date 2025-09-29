function checkCourses(courses) {
    for (let i = 0; i < courses.length; i++) {
        let course = courses[i];
        if (course.monthDuration > 5) {
            console.log(course.title, " Супер");
        }
    }
}
checkCourses(coursesAndDurationArray);