console.log("Array Methods");

let veges = ["Potato", "Cabbage", "Tomato", "Brinjal", "Carrot", "Peas", "Onion", "Chilli"]


// Length Method:- Returns number of elements in array
console.log(veges.length);
console.log(veges[3]);


// Push Method:- Add elements at last position 
veges.push("Raddish");
console.log(veges);


// Pop Method:- Remove element from last position 
veges.pop();
console.log(veges);


// Shift Method:- Remove element from first position 
veges.shift();
console.log(veges);


// Unshift Method:- Add element at first position 
veges.unshift("Potato", "Raddish");
console.log(veges);


// Sorted Method:- Sorts an array alphabetically
const sortedarry = veges.sort();
console.log("sortedarry", sortedarry);

const decendingArray = veges.sort((a, b) => b.localeCompare(a));
console.log("decendingArray", decendingArray);


// Reverse Method:- Reverses the elements in an array
console.log("reversed array", veges.reverse());


// Splice Method:- Adds new element into an array at any position
veges.splice(2, 1, "Cucumber", "Corn");
console.log("splice", veges);


// Slice Method:- Return a piece of an array
const sliceArray = veges.slice(1, 4);
console.log("SlicedArray", sliceArray);


// Numerical Array:- 
const NumericalArray = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
console.log("NumericalArray", NumericalArray);


// Mapped Method:- creates a new array by performing a function on each array element
const mappedArray = NumericalArray.map((item, index) => {
    if (item > 20)
        return (item * 2);
    else return item + 5;
});
console.log("mappedArray", mappedArray);


// Filter Method:- Return array according condition 
const filteredArray = NumericalArray.filter((item, index) => { return (item > 30) });
console.log("filteredArray", filteredArray);


// Find Method:- Return element according condition
const findArray = NumericalArray.find((item, index) => { return (item > 50) });
console.log("findArray", findArray);


// Every Method:- If all elements follow the conditions then it returs true 
const everyArray = NumericalArray.every((item, index) => { return (item > 10) });
console.log("everyArray", everyArray);


// Some Method:- If any one elements follow the conditions then it returs true
const someArray = NumericalArray.some((item, index) => { return (item > 50) });
console.log("someArray", someArray);


// Fill Method:- Return an Array With All Elements by Filling same value 
const filledArray = NumericalArray.fill(300);
console.log("filledArray", filledArray);