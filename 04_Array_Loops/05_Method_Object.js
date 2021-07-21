var user = {
    firstName: "Kunal",
    lastName: "Jathar",
    role: "Admin",
    logInCount: 32,
    facebookSignedIn: true,
    courseList: [],
    buyCourse: function (courseName) {
        this.courseList.push(courseName)
    },
    getCourseCount: function () {
        return `${this.firstName} is enrolled in total of ${this.courseList.length} courses`
    },
    info: function () {
        console.table(`${this.firstName} ${this.lastName} ${this.role} ${this.logInCount} ${this.facebookSignedIn} ${this.courseList} ${this.buyCourse()}`)
    }
};

console.log(user.firstName);
console.log(user.getCourseCount());

user.buyCourse("React JS Course");
user.buyCourse("Angular JS Course");
user.buyCourse("Vue JS Course");

console.log(user.getCourseCount());

// console.log(user.info())