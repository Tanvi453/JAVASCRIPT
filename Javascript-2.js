console.log("Javascript Data Types");

// string
//number
// null
// undefined
// object-definition:- // collection of property value pair
// array

// string:-

var Firstname = "Vadodariya"
console.log(Firstname);

let Middlename = "Tanvi";
console.log(Middlename);

var Lastname = "Alpeshbhai"
console.log(Lastname);

let t = 16 + "Volvo";
document.getElementById(123).innerHTML = t;

// Numbers:-

let length = 70;
console.log(length);

var weight = 60;
console.log(weight);

const height = 40;
console.log(height);

const text = 123
console.log(typeof text);

let abc = "Disha"
console.log(typeof abc);

// Object:-

const person = { name: "Tanvi", age: 21, surname: "Vadodariya", id: 849015 };
console.log(person);

// Object.propertyname:
const properties = Object.keys(person);
console.log("properties", properties);

// Values:

const values = Object.values(person);
console.log("values", values);

//Records:-

let Records = ["Tanvi", "Shyam", "Shivam", "Hit"];
console.log(Records);

const Numbers = ["21", "18", "18", "16"];
console.log(Numbers);

// Array:-

const Students = [{ name: "Tanvi", age: 21, surname: "Vadodariya", id: 849015 },
{ name: "Disha", age: 21, surname: "Sanghani", id: 849016 },
{ name: "Shruti", age: 21, surname: "Dholariya", id: 849017 },
{ name: "Savitri", age: 21, surname: "Shekhliya", id: 849018 },];

console.log(Students);
console.log(Students.length);
console.log(Students[2]);
console.log(Students[1].name);
console.log(Students[1].surname);

const tanvi = "Animals are used for ploughing agricultural fields, they provide us wool for clothing, animals provide us milk, eggs, domestic animals like dogs, cats help humans in recreation. Some animals help humans in obtaining food. Animals were also used for transportation purposes, in the past."
console.log(tanvi);
document.getElementById("tanvi").innerHTML = tanvi;

var Fname = "Shyam";
console.log(Fname.length);
console.log(typeof Fname);



