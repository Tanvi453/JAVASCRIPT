console.log("Javascript Data Types:-");

// Javascript Data Types:-
/* 
1. String
2. Number
3. Bigint
4. Boolean
5. Undefined
6. Null
7. Symbol
8. Object
*/

// 1. String:-
let fullname = "Tanvi Alpeshbhai Vadodariya"
console.log(fullname);

// 2. Number:-
const age = 21;
console.log(age);

// 3. Object:-
let person = { fname: "Tanvi", lname: "Vadodariya" };
console.log(person);

// 4. Array:-
const car = ["BMW", "Audi", "Kia", "Punch", "Swift"];
console.log(car);


console.log("Javascript String Methods:-")
// JavaScript String Methods:-
/*
String length
String slice()
String substring()
String substr()
String replace()
String replaceAll()
String toUpperCase()
String toLowerCase()
String concat()
String trim()
String trimStart()
String trimEnd()
String padStart()
String padEnd()
String charAt()
String charCodeAt()
String split()
*/

// String length
let txt = "         abcdefghijklmnopqrstuvwxyz           ";
console.log("length", txt.length);

// String slice()
const text = "Flowers are symbolic of beauty, love and tranquillity. Flowers are form the soul of a garden and convey the message of nature to man. Flowers and objects of aesthetic, ornamental, social, religious and cultural value. Flowers are used for conveying love, happiness, grief, mourning etc.";
const abc = "Flowers are form the soul of a garden and & convey the message of nature to man."
console.log(text);
console.log("length", text.length);
const slicedstring = text.slice(0, 31);
console.log("String slice()", slicedstring);

// String substring()
const substring = text.substring(-10, 55);
console.log("String substring()", substring);

// String substr()
const substr = text.substr(57, 76);
console.log("String substr()", substr);

// String replace()
const replace = text.replace("Flowers", "FLOWERS");
console.log("String replace()", replace);

// String replaceAll()
const replaceAll = text.replaceAll("Flowers", "FLOWERS");
console.log("String replaceAll()", replaceAll);

// String toUpperCase()
console.log("toUpperCase()", text.toLocaleUpperCase());

// String toLowerCase()
console.log("toLowerCase()", text.toLocaleLowerCase());

// String concat()
const concat = abc.concat("Rose", "July", "Lotus");
console.log("concat()", concat);

// String trim()
console.log("String trim()", txt.trim().length);

// String trimStart()
console.log("String trimStart()", txt.trimStart().length);

// String trimEnd()
console.log("String trimEnd()", txt.trimEnd().length);

// String charAt()
const charAt = text.charAt(50);
console.log("String charAt()", charAt);

// String split()
const split = abc.split("&");
console.log("String split()", split);