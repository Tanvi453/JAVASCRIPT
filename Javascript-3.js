function myfunction() {
    console.log("Hello connections!");
    document.getElementById("text").innerHTML = document.getElementById("text").innerHTML.toLocaleUpperCase();
}

// String length:-
const txt = "Animals are the living beings on the earth except for Plants. Animals carry a lot of importance in our lives.* Animals are living things.* Animals can also sense what goes on around them."
console.log(txt);
console.log("length", txt.length);


// String slice() Method:-
// return a piece of string
// do not consider last position
// parameter

const slicedString = txt.slice(0, 8);
console.log("slicedString", slicedString);

// String substring() Method:-
// consider negetive as zero

const substringMethod = txt.substring(-10, 30);
console.log("substringMethod", substringMethod);

// String substr() Method:-
const subStrMethod = txt.substr(8, 15);
console.log("subStrMethod", subStrMethod);

const demo = "                   Animals are the living beings on the earth except for Plants.                 "
console.log(demo);
console.log("length", demo.length);

// String trim():-
// removes whitespace
console.log(demo.trim().length);
console.log(demo.trimStart().length);
console.log(demo.trimEnd().length);

// String split():-
// converts string into array
const splittedString = txt.split("*");
console.log("splittedString", splittedString);

// String Replace():-
// replace a word in string
const replaceMethod = txt.replace("earth", "World");
console.log("replaceMethod", replaceMethod);

// String ReplaceAll():-
// replace all matching  words in string
const replaceAllMethod = txt.replaceAll("Animals", "ANIMALS");
console.log("replaceAllMethod ", replaceAllMethod);

// String concat():-
// join two string
const concatMethod = txt.concat("Replace", "ReplaceAll");
console.log("concatMethod", concatMethod);

// String charAt():-
// return a charector from particular space
const charAtMethod = txt.charAt(51);
console.log("charAtMethod", charAtMethod);

const xyz = "abcdefghijklmnopqrstuvwxyz"
console.log(xyz);
console.log("length", xyz.length);

// String to UpperCase():-
console.log(xyz.toLocaleUpperCase());

// String to  LowerCase():-
console.log(xyz.toLocaleLowerCase());
