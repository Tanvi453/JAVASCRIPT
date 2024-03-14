console.log("Switch case");

const Months = new Date().getMonth();
console.log(Months);

const switchcase = () => {

    let Number = document.getElementById("number").value;
    console.log(Number);

    switch (Number) {
        case '2': {
            console.log("4");
            document.getElementById("123").innerHTML = "4";
        }
            break;

        case '3': {
            console.log("9");
            document.getElementById("123").innerHTML = "9";
        }
            break; 

        case '4': {
            console.log("16");
            document.getElementById("123").innerHTML = "16";
        }
            break;

        case '5': {
            console.log("25");
            document.getElementById("123").innerHTML = "25";
        }
            break;

        case '6': {
            console.log("36");
            document.getElementById("123").innerHTML = "36";
        }
            break;

        case '8': {
            console.log("64");
            document.getElementById("123").innerHTML = "64";
        }
            break;

        default: {
            console.log("default");
            document.getElementById("123").innerHTML = "default";
        }
            break;
    }

}