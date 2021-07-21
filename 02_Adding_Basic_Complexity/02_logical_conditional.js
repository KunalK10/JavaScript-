// User are only allowed to make purchase when he is :
// logged in
// email verified 
// cardInfo - valid
// if any one is missing, stop purchase

let fullName = 'Kunal Jathar';
let loggedIn = true;
let emailVerified = true;
let cardInfo = true;


if (loggedIn && emailVerified && cardInfo) {
    // let fullName = "Kunal Jathar"
    console.log(`Hello ${fullName}, Welcome to the Course`);
}else {
    console.log(`Please VERIFIED following points`);
}