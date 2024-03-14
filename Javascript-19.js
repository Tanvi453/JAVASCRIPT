let PersonName = JSON.parse(localStorage.getItem("Sorting")) || [];

function Form() {

    const Fname = document.getElementById("Fname").value;
    console.log(Fname);

    const Email = document.getElementById("Email").value;
    console.log(Email);

    const password = document.getElementById("password").value;
    console.log(password);

    const Individual = {
        x: Fname, y: Email, z: password,
    }
    PersonName.push(Individual);
    localStorage.setItem("Sorting", JSON.stringify(PersonName));
    displaytable();
    console.log(PersonName);

}


const sorting = () => {

    const select = document.getElementById("tanvi").value;
    console.log(select);

    switch (select) {
        case "x": {
            const sortdata = PersonName.sort((a, b) => { return (a.x.localeCompare(b.x)) });
            console.log(sortdata);
            PersonName = sortdata;
            localStorage.setItem("Sorting", JSON.stringify(sortdata));
            displaytable();
        }
            break;

        case "y": {
            const sortdata = PersonName.sort((a, b) => { return (a.y.localeCompare(b.y)) });
            console.log(sortdata);
            PersonName = sortdata;
            localStorage.setItem("Sorting", JSON.stringify(sortdata));
            displaytable();
        }
            break;

        case "z": {
            const sortdata = PersonName.sort((a, b) => { return (a.z.localeCompare(b.z)) });
            console.log(sortdata);
            PersonName = sortdata;
            localStorage.setItem("Sorting", JSON.stringify(sortdata));
            displaytable();
        }

    }

}


const displaytable = () => {
    document.getElementById("myTable").innerHTML = PersonName.map((item, index) => {
        return (
            `<tr>
              <td>${item.x}</td>
              <td>${item.y}</td>
              <td>${item.z}</td>
            </tr>`
        )
    }).join('');
}
displaytable();


    let arr = ["scale", "happy", "strength",
    "peace", "happy", "happy"];

    function removeDuplicates(arr) {
        return arr.filter((item,
            index) => arr.indexOf(item) === index);
    }

    console.log(removeDuplicates(arr));
