var name = "Kunal";

console.log("Line number 3", name);

function sayName() {
    var name = "Mr H"
    console.log("Line number 6", name);
    sayNameTwo();

    function sayNameTwo(){
        var name = "Abhishek"
        console.log("Line number 11", name);
    }
}

sayName();