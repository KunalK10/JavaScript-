let user = {
    firstName: "Kunal",
    lastName: "Jathar",
    role: "Admin",
    logInCount: 32,
    facebookSignIn: true
};

console.log(user.firstName);
console.log(user["lastName"]);

user.firstName = "Omkar"

console.log(user.firstName);

console.log(user);

console.table(user)