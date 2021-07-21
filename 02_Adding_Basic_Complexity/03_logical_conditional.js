//Allo user to access course if he is :
// login in from google 
// login in from email 
// login in from facebook 

let email = false;
let google = false;
let facebook = false;

if (email || google || facebook){
    console.log("You are allow to access the course");
}else {
    console.log('Please log In');
}

