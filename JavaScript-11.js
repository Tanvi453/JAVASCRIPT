let studentname = JSON.parse(localStorage.getItem("Hello")) || [];

let isEdit = -1;

const displaytable = () => {
    document.getElementById("tbl").innerHTML = studentname.map((item, index) => {
        return (
            `<tr id="idx">
            <td>${item.Fname}</td>
            <td>${item.DOB}</td>
            <td>${item.Age}</td>
            <td>${item.Address}</td>
            <td>${item.Phone}</td>
            <td>${item.Email}</td>
            <td>${item.Password}</td>
            <td><button type="button" onclick="deleterecord(${index})">Delete</button></td>
            <td><button type="button" onclick="editdata(${index})">Edit</button></td>
            </tr>`
        )
    }).join('')
}
displaytable();

let deleterecord = (index) => {
    studentname.splice(index, 1);
    console.log("student", studentname);
    localStorage.setItem("Hello", JSON.stringify(studentname));
    displaytable();
}

const editdata = (idx) => {
    isEdit = idx;

    const record = studentname.find((item, index) => { return (index === idx) });
    console.log(record);

    document.getElementById("Fname").value = record.Fname;
    document.getElementById("DOB").value = record.DOB;
    document.getElementById("Age").value = record.Age;
    document.getElementById("Address").value = record.Address;
    document.getElementById("Phone").value = record.Phone;
    document.getElementById("Email").value = record.Email;
    document.getElementById("Password").value = record.Password;

}

function Form() {

    const Fname = document.getElementById("Fname").value;
    console.log(Fname);

    const split = Fname.split(" ");
    console.log("String split():-", split);
    document.getElementById("pinal").innerHTML = split[0];
    document.getElementById("tanvi").innerHTML = split[1];

    const DOB = document.getElementById("DOB").value;
    console.log(DOB);

    const Age = document.getElementById("Age").value;
    console.log(Age);

    const Address = document.getElementById("Address").value;
    console.log(Address);

    const Phone = document.getElementById("Phone").value;
    console.log(Phone);

    const Email = document.getElementById("Email").value;
    console.log(Email);

    const Password = document.getElementById("Password").value;
    console.log(Password);

    const individual = {
        Fname: Fname, DOB: DOB, Age: Age, Address: Address, Phone: Phone, Email: Email, Password: Password
    }

    if (isEdit !== -1) {
        const updatee = studentname.map((item, index) => {
            if (isEdit === index) {
                return individual
            }
            return item;
        })

        studentname = updatee;

    }

    else { studentname.push(individual) };
    displaytable();
    localStorage.setItem("Hello", JSON.stringify(studentname));
    console.log("Student", studentname);
    console.log(individual);
}

const sortbyFname = () => {

    const sortdata = studentname.sort((a, b) => { return (a.Fname.localeCompare(b.Fname)) });
    console.log(sortdata);
    studentname = sortdata;
    displaytable();

}

const sortbyDOB = () => {

    const sortdata = studentname.sort((a, b) => { return (a.DOB.localeCompare(b.DOB)) });
    console.log(sortdata);
    studentname = sortdata;
    displaytable();

}

const sortbyAge = () => {

    const sortdata = studentname.sort((a, b) => { return (a.Age - b.Age) });
    console.log(sortdata);
    studentname = sortdata;
    displaytable();

}

const sortbyAddress = () => {

    const sortdata = studentname.sort((a, b) => { return (a.Address.localeCompare(b.Address)) });
    console.log(sortdata);
    studentname = sortdata;
    displaytable();

}

const sortbyPhone = () => {

    const sortdata = studentname.sort((a, b) => { return (a.Phone.localeCompare(b.Phone)) });
    console.log(sortdata);
    studentname = sortdata;
    displaytable();

}

const sortbyEmail = () => {

    const sortdata = studentname.sort((a, b) => { return (a.Email.localeCompare(b.Email)) });
    console.log(sortdata);
    studentname = sortdata;
    displaytable();

}

const sortbyPassword = () => {

    const sortdata = studentname.sort((a, b) => { return (a.Password.localeCompare(b.Password)) });
    console.log(sortdata);
    studentname = sortdata;
    displaytable();

}

const searchData = () => {

    const searchValue = document.getElementById("search").value;
    console.log(searchValue);
  
    // const filteredData = StudentName.filter((item) => { return (item?.Fname?.toLocaleLowerCase() === searchValue?.toLocaleLowerCase()) });
    // console.log(filteredData);
    // StudentName = filteredData;
    // displaytable();
  
    const filteredDataa = studentname.filter((item) => { return (item?.Fname?.toLocaleLowerCase().includes(searchValue?.toLocaleLowerCase())) });
    console.log(filteredDataa);
    studentname = filteredDataa;
    displaytable();
  
  }

