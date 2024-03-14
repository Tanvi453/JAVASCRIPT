const store = [];

function Form() {

    const Age = document.getElementById("Age()").value;
    console.log(Age);

    store.push(Age);
    console.log(store);

    const sortedarry = store.sort();
    console.log(sortedarry[sortedarry.length - 1]);

    document.getElementById("tanvi").innerHTML = sortedarry[sortedarry.length - 1];

}

function F_name() {

    const First_Name = document.getElementById("First_Name").value;
    console.log(First_Name);

    const split = First_Name.split(" ");
    console.log("String split():-", split);

    document.getElementById("123").innerHTML = split[0];
    document.getElementById("456").innerHTML = split[1];

    const sortedarry = split.sort();
    console.log(sortedarry[sortedarry.length - 1]);
    document.getElementById("pinal").innerHTML = sortedarry[sortedarry.length - 1];

    console.log(First_Name.length);
    document.getElementById("shyam").innerHTML = First_Name.length;
    console.log(split.length);
    document.getElementById("shivam").innerHTML = split.length;
    
    console.log(split[1]);
    document.getElementById("disha").innerHTML = split[1];

}

function M_name() {

    const field2 = document.getElementById("Middle_Name").value;
    const x = field2.split(" ");
    if (x.length > 2) {
        document.getElementById("SHRUTI").innerHTML = x[1];
    }
    else {
        alert("Please Enter More Than One Word.");
    }
}

function password() {

    const field3 = document.getElementById("password").value;
    const z = field3.length;
    if (z < 10) {
        document.getElementById("hit").innerHTML = z;
        return alert("Please Enter 10 Character.");
    }
    else {
        (y = 10)
        document.getElementById("savitri").innerHTML = y;
        return alert("Successfull!");
    }

}


