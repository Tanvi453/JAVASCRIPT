console.log("Number Methods");

const text_first = document.getElementById("first").innerHTML;
const text_second = document.getElementById("second").innerHTML;

// To String Method:- Convert Number into String
console.log(typeof parseInt(text_first).toString());


// ParseInt Method:- convert string into number 
console.log(parseInt(text_first) + (text_second));
console.log(parseInt(text_first) + parseInt(text_second));


// To Fixed Method:- control the number of digits after decimal 
const fixedNumber = 50.30467;
console.log(fixedNumber.toFixed(3));


// To Precision Method:- control All the number
const preciseNumber = fixedNumber.toPrecision(3);
const precisenumber = fixedNumber.toPrecision(4);
console.log(preciseNumber);
document.getElementById("123").innerHTML = preciseNumber;
console.log(precisenumber);


// valueof method:- Return Full Value
console.log(fixedNumber.valueOf());