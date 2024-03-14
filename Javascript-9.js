// Number Method:-
console.log("Number Method:-");

const text_first = document.getElementById("first").innerHTML;
const text_second = document.getElementById("second").innerHTML;

// To String Method:- Convert Number into String
console.log(typeof parseInt(text_first));
console.log(typeof parseInt(text_second).toString());

// ParseInt Method:- convert string into number 
console.log(parseInt(text_first) + parseInt(text_second));
console.log(parseInt(text_first) + (text_second));

// To Fixed Method:- control the number of digits after decimal
const fixedNumber = 70.765433;
console.log("fixedNumber", fixedNumber.toFixed(4));

// To Precision Method:- control All the number
const precisedNumber = fixedNumber.toPrecision(5);
console.log("precisedNumber", precisedNumber);

// valueof method:- Return Full Value
console.log("valueof", fixedNumber.valueOf());



// Array Method:-
console.log("Array Method:-");

// Length Method:- Returns number of elements in array  
fruits = ["mango", "Pineapple", "Kiwi", "Watermelon", "Orange", "Cherry", "Pomegranate"];
console.log(fruits.length);
console.log(fruits[5]);

// Push Method:- Add elements at last position 
fruits.push("Grapes");
console.log("Push Method:-", fruits);

// Pop Method:- Remove element from last position 
fruits.pop();
console.log("Pop Method:-", fruits);

// Shift Method:- Remove element from first position 
fruits.shift();
console.log("Shift Method:-", fruits);

// Unshift Method:- Add element at first position 
fruits.unshift("Apple");
console.log("Unshift Methd:-", fruits);

// Sorted Method:- Sorts an array alphabetically
const sortedarry = fruits.sort();
console.log("Sorted Method:-", sortedarry);

const descendingArray = fruits.sort((a, b) => b.localeCompare(a));
console.log("Descending Array:-", descendingArray);

// Reverse Method:- Reverses the elements in an array
console.log("Reverse Method:-", fruits.reverse());

// Splice Method:- Adds new element into an array at any position
fruits.splice(1, 0, "Banana", "Strawberry");
console.log("Splice Method:-", fruits);

// Slice Method:- Return a piece of an array
const sliceArray = fruits.slice(1, 5);
console.log("SlicedArray", sliceArray);

// Numerical Array:- 
const NumericalArray = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];
console.log("Numerical Array:-", NumericalArray);

// Mapped Method:- Return a new array by performing a function on each element in array 
const mappedArray = NumericalArray.map((item, index) => {
    if (item > 400)
        return (item * 3);
    else return item + 10;
});
console.log("Mapped Method:-", mappedArray);

// Filter Method:- Return array according condition
const filteredArray = NumericalArray.filter((item, index) => { return (item > 500) });
console.log("Filter Method:-", filteredArray);

// Find Method:- Return element according condition
const findArray = NumericalArray.find((item, index) => { return (item < 500) });
console.log("Find Method:-", findArray);

// Every Method:- If all elements follow the conditions then it returs true
const everyArray = NumericalArray.every((item, index) => { return (item > 200) });
console.log("Every Method:-", everyArray);

// Some Method:- If any one elements follow the conditions then it returs true
const someArray = NumericalArray.some((item, index) => { return (item < 500) });
console.log("Some Method:-", someArray);

// Fill Method:- Return an Array With All Elements by Filling same value 
const filledArray = NumericalArray.fill(1500);
console.log("Fill Method:-", filledArray);

//includes methods
let newAAArry = ["Potato", "Tomato", "Chilli", "Reddish"];
console.log(newAAArry.includes("Potato"));



// String Method:-
console.log("String Method:-");

// String length:-
let txt = "         abcdefghijklmnopqrstuvwxyz          ";
console.log("String Length Method:-", txt.length);

const text = "Fruits are the sweet, fleshy, edible part of a plant. Fruits generally contains seeds. Fruits are usually eaten raw, although some varieties can be cooked. They come in a wide variety of colours, shapes and flavours.";
console.log(text);
console.log("Length", text.length);

// String slice() Method:-
// return a piece of string
// do not consider last position
// parameter
const abc = "Fruits are very rich in food value and vitamins. & Regular intake of fruits can keep us healthy and free from diseases.";
const slicedstring = text.slice(0, 52);
console.log("String slice():-", slicedstring);

// String substring() Method:-
// consider negetive as zero
const substring = text.substring(-50, 80);
console.log("String substring():-", substring);

// String substr() Method:-
const substr = text.substr(81, 130);
console.log("String substr():-", substr);

// String Replace():-
// replace a word in string
const replace = text.replace("Fruits", "FRUITS");
console.log("String replace():-", replace);

// String ReplaceAll():-
// replace all matching  words in string
const replaceAll = text.replaceAll("Fruits", "FRUITS");
console.log("String replaceAll():-", replaceAll);

// String to UpperCase():-
console.log("toUpperCase():-", text.toLocaleUpperCase());

// String to  LowerCase():-
console.log("toLowerCase():-", text.toLocaleLowerCase());

// String concat():-
// join two string
const concat = abc.concat(" Eating fruit provides health benefits.");
console.log("concat():-", concat);

// String trim():-
// removes whitespace
console.log("String trim():-", txt.trim().length);

// String trimStart():-
// removes whitespace from Start
console.log("String trimStart():-", txt.trimStart().length);

// String trimEnd():-
// removes whitespace End
console.log("String trimEnd():-", txt.trimEnd().length);

// String charAt():-
// return a character from particular space
const charAt = text.charAt(50);
console.log("String charAt():-", charAt);

// String spilt():-
// Converts string into array
const split = abc.split("&");
console.log("String split():-", split);