var _this = this;
var carName = "civic";
//we make a simple object
var car = {
    name: "Mercides",
    color: "Black",
    year: "2020",
    engin: "2.0",
    price: "1000000",
    inStock: true,
    availableColor: ["Red", "Blue", "Green",]
};
console.log(car);
console.log(car.year);
console.log(car["price"]);
console.log("------------------");
//log whole object
var person = {
    name: "laraib",
    city: "karachi",
    country: "pakistan",
    married: "true",
    car: ["ford", "BMW", "corola", "mehran",]
};
console.log(person);
console.log("-------------------");
console.log("person country");
console.log("car color");
console.log("car[1]");
console.log(person.city);
console.log(person["name"]);
console.log(person.car);
console.log("----------------------------------");
// Object Method Programm
var personTwo = {
    firstName: "Ali",
    lastName: "Ibad",
    age: "20",
    country: "pakistan",
    skinColor: "brown",
    // Codeium:Refactor |Exaplain|Genarate JSDoc|
    fullName: function () {
        console.log(this.firstName + " " + this.lastName);
    },
    sayHellow: function () {
        console.log("line 55", _this); //this keyword give you empty object
    }
};
personTwo.fullName(); // invoke object method
personTwo.sayHellow(); // invoke the object method
//update object property
personTwo.country = "UK";
console.log("personTwo");
console.log("--------------------------------------------------");
// creat an object
var personThree = {
    firstName: "jhon",
    lastName: "Doe",
    age: "50",
    eyeColor: "Black",
};
var personFour = personThree; // pas by reference
personFour.firstName = "charles";
console.log("personThree", personThree);
console.log("personFour", personFour);
console.log("----*****-------*****-----");
//index signatures
var nameAgeMap = {
    Larib: 28,
    Ali: 24,
    Ibad: 20,
    Hussain: 14,
    Shahzil: 12,
};
console.log(nameAgeMap);
console.log("-----*****--------");
var Age = 20;
console.log("Age", Age);
console.log("-----*************------");
