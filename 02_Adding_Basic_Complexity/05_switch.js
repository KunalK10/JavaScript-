// create an application with following role 
// admin - gets full access 
// sub-admin - get access to create and delete course
// testprep - gets access to create/delete tests
// user gets access to consume content

let userRole = "Sub-Admin";

switch (userRole) {
    case "Admin":
        console.log('You have full access');
        break;
    case "Sub-Admin":
        console.log('You have access to create/delete course');
        break;
    case "Test-Prep":
        console.log('You have access to create/delete tests');
        break;
    case "User":
        console.log('You have access to course');
        break;
    default:
        console.log('Please Log In to access');
        break;
}