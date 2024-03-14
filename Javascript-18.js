let PersonName = JSON.parse(localStorage.getItem("Sort")) || [];

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
    localStorage.setItem("Sort", JSON.stringify(PersonName));
    displaytable();
    console.log(PersonName);

}


const sorting = () => {

    const select = document.getElementById("tanvi").value;
    console.log(select);

    if (select === "x") {
        const sortdata = PersonName.sort((a, b) => { return (a.x.localeCompare(b.x)) });
        console.log(sortdata);
        PersonName = sortdata;
        localStorage.setItem("Sort", JSON.stringify(sortdata));
        displaytable();
    }

    else if (select === "y") {
        const sortdata = PersonName.sort((a, b) => { return (a.y.localeCompare(b.y)) });
        console.log(sortdata);
        PersonName = sortdata;
        localStorage.setItem("Sort", JSON.stringify(sortdata));
        displaytable();
    }

    else if (select === "z") {
        const sortdata = PersonName.sort((a, b) => { return (a.z.localeCompare(b.z)) });
        console.log(sortdata);
        PersonName = sortdata;
        localStorage.setItem("Sort", JSON.stringify(sortdata));
        displaytable();
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







