// ODD & EVEN NUMBERS

function number() {

    let number = parseInt(document.getElementById("number").value);
    console.log(number);

    if (number % 2 == 0) {
        alert("Even Number");
        console.log("Even Number");
        document.getElementById("ans").value = "Even Number";
    }

    else {
        alert("Odd Number");
        console.log("Odd Number");
        document.getElementById("ans").value = "Odd Number";

    }

}


//  Value + 1

function no() {

    let Number = parseInt(document.getElementById("Number").value);
    console.log(Number + 1);
    document.getElementById("hello").innerHTML = Number + 1;

    // let A = Number;
    // let B = 1;
    // C = A + B;
    // let Q = document.getElementById("new").innerHTML = C;
    // console.log(Q);
    
}


// Palindrome words

function word() {

    let word = document.getElementById("word").value;
    console.log(word);

    const NEW = word.split("");
    console.log(NEW);

    const java = NEW.reverse().join("");
    console.log(java);

    if (word == java) {
        return document.getElementById("data").innerHTML = "Palindrome Word";
    }

    else {
        return document.getElementById("data").innerHTML = "NonePalindrome Word";
    }
    
}



