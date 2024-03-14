let StudentName = JSON.parse(localStorage.getItem("New")) || [];

isEdit = -1;

const displaytable = () => {
  document.getElementById("myTable").innerHTML = StudentName.map((item, index) => {
    return (
      `<tr>
            <td>${item.Uname}</td>
            <td>${item.Email}</td>
            <td>${item.password}</td>
            <td><button type="button" onclick="deleterecord(${index})" style="background-color: transparent;">Delete</button></td>
            <td><button type="button" onclick="editdata(${index})" style="background-color: transparent;">Edit</button></td>
      </tr>`
    )
  }).join('');
}
displaytable();

const deleterecord = (idx) => {
  const updated = StudentName.filter((item, index) => { return index !== idx });
  StudentName = updated;
  localStorage.setItem("New", JSON.stringify(StudentName));
  displaytable();
}

const editdata = (indexx) => {
  isEdit = indexx;

  const record = StudentName.find((item, index) => { return index === indexx });
  console.log(record);

  document.getElementById("Uname").value = record.Uname
  document.getElementById("Email").value = record.Email;
  document.getElementById("password").value = record.password;
}

function Form() {

  const Uname = document.getElementById("Uname").value;
  console.log(Uname);

  const Email = document.getElementById("Email").value;
  console.log(Email);

  const password = document.getElementById("password").value;
  console.log(password);

  const Individual = {
    Uname: Uname, Email: Email, password: password,
  }

  if (isEdit !== -1) {
    const updatee = StudentName.map((item, index) => {
      if (isEdit === index) {
        return Individual
      }
      return item;
    })

    StudentName = updatee;
  }

  else { StudentName.push(Individual) }
  localStorage.setItem("New", JSON.stringify(StudentName));
  displaytable();
  console.log("StudentName", StudentName);
  console.log(StudentName);
}

//includes methods:-
let newAAArry = ["Potato", "Tomato", "Chilli", "Reddish"];
console.log(newAAArry.includes("Potato"));

//Sort Button:-
// Call back or Arrow body function

const sortbyusername = () => {

  const sortdata = StudentName.sort((a, b) => { return (a.Uname.localeCompare(b.Uname)) });
  console.log(sortdata);
  StudentName = sortdata;
  displaytable();

}

const sortbyemail = () => {

  const sortdata = StudentName.sort((a, b) => { return (a.Email.localeCompare(b.Email)) });
  console.log(sortdata);
  StudentName = sortdata;
  displaytable();

}

const sortbypassword = () => {

  const sortdata = StudentName.sort((a, b) => { return (a.password.localeCompare(b.password)) });
  console.log(sortdata);
  StudentName = sortdata;
  displaytable();

}

//Search Button:-

const searchData = () => {

  const searchValue = document.getElementById("search").value;
  console.log(searchValue);

  // const filteredData = StudentName.filter((item) => { return (item?.Uname?.toLocaleLowerCase() === searchValue?.toLocaleLowerCase()) });
  // console.log(filteredData);
  // StudentName = filteredData;
  // displaytable();

  const filteredDataa = StudentName.filter((item) => { return (item?.Uname?.toLocaleLowerCase().includes(searchValue?.toLocaleLowerCase())) });
  console.log(filteredDataa);
  StudentName = filteredDataa;
  displaytable();

}