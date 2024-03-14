let student = JSON.parse(localStorage.getItem("Data")) || [];

let isEdit = -1;

const displaytable = () => {
    document.getElementById("tbl").innerHTML = student.map((item, index) => {
        return (
            `<tr id="idx">
            <td>${item.Fname}</td>
            <td>${item.Age}</td>
            <td>${item.Phone}</td>
            <td>${item.Email}</td>
            <td>${item.password}</td>
            <td><button type="button" onclick="deleterecord(${index})">Delete</button></td>
            <td><button type="button" onclick="editdata(${index})">Edit</button></td>
            </tr>`
        )
    }).join('')
}
displaytable();

let deleterecord = (idx) => {
    const updated = student.filter((item, index) => { return index !== idx });
    student = updated;
    localStorage.setItem("Data", JSON.stringify(student));
    displaytable();
}

const editdata = (indexx) => {
    isEdit = indexx;

    const record = student.find((item, index) => { return index === indexx });
    console.log(record);    

    document.getElementById("Fname").value = record.Fname;
    document.getElementById("Age").value = record.Age;
    document.getElementById("Phone").value = record.Phone;
    document.getElementById("Email").value = record.Email;
    document.getElementById("password").value = record.password;

}

function Form() {

    const Fname = document.getElementById("Fname").value;
    console.log(Fname);

    // COLORFULL CHARACTER:-
    const slicedstring = Fname.slice(0, -5);
    console.log("String slice():-", slicedstring);
    document.getElementById("tanvi").innerHTML = slicedstring;

    console.log("String slice():-", Fname.slice(-5));
    document.getElementById("tanvii").innerHTML = Fname.slice(-5);

    const Age = document.getElementById("Age").value;
    console.log(Age);

    const Phone = document.getElementById("Phone").value;
    console.log(Phone);

    const Email = document.getElementById("Email").value;
    console.log(Email);

    const password = document.getElementById("password").value;
    console.log(password);

    // OBJECT:- 
    const person = {
        Fname: Fname, Age: Age, Phone: Phone, Email: Email, password: password
    }

    if (isEdit !== -1) {
        const updatee = student.map((item, index) => {
            if (isEdit === index) {
                return person
            }
            return item;
        })

        student = updatee;
    }
    else { student.push(person) };
    displaytable();
    localStorage.setItem("Data", JSON.stringify(student));
    console.log("Student", student);
    console.log(person);


}



