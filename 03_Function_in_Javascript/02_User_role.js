// Define a function that can answer the role of a user
// A user can be on following roles :

// admin - with all access
// subadmin - with access to create/delete courses
// testprep - with access to craete/delete tests
// user - consume all content
// other - trail user

// input getUser(name, role)

var UserRole = function getUser(name, role) {
    switch (role) {
        case "admin":
            return `You have Full Access ${name}`
        case "subadmin":
            return `You have access to create/delete course ${name}`
        case "testprep":
            return `You have access to create/delete tesr ${name}`
        case "user":
            return `You have access to content`
        default:
            return `You are trail user`
    }
}


console.log(UserRole('Kunal', 'subadmin'));
