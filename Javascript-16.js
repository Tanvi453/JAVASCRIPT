let student1 = JSON.parse(localStorage.getItem("data1")) || [];

const displaytable1 = () => {
    document.getElementById("tbl1").innerHTML = student1.map((item, index) => {
        return (
            `<tr>
            <td>${item.Sname}</td>
            <td>${item.RollNo}</td>
            <td>${item.subject}</td>
            <td>${item.course}</td>
            <td>${item.SchoolName}</td>
            </tr>`
        )
    }).join('');
}
displaytable1();

let student2 = JSON.parse(localStorage.getItem("data2")) || [];

const displaytable2 = () => {
    document.getElementById("tbl2").innerHTML = student2.map((item, index) => {
        return (
            `<tr>
            <td>${item.Sname}</td>
            <td>${item.RollNo}</td>
            <td>${item.subject}</td>
            <td>${item.course}</td>
            <td>${item.SchoolName}</td>
            </tr>`
        )
    }).join('');
}
displaytable2();

let student3 = JSON.parse(localStorage.getItem("data3")) || [];

const displaytable3 = () => {
    document.getElementById("tbl3").innerHTML = student3.map((item, index) => {
        return (
            `<tr>
            <td>${item.Sname}</td>
            <td>${item.RollNo}</td>
            <td>${item.subject}</td>
            <td>${item.course}</td>
            <td>${item.SchoolName}</td>
            </tr>`
        )
    }).join('');
}
displaytable3();

const Form = () => {

    const Sname = document.getElementById("Sname").value;
    console.log(Sname);

    const RollNo = document.getElementById("RollNo").value;
    console.log(RollNo);

    const subject = document.getElementById("subject").value;
    console.log(subject);

    const course = document.getElementById("course").value;
    console.log(course);

    const SchoolName = document.getElementById("SchoolName").value;
    console.log(SchoolName);

    const Person = {
        Sname: Sname, RollNo: RollNo, subject: subject, course: course, SchoolName: SchoolName, 
    }

    switch (SchoolName) {
        case 'SchoolName1': {
            student1.push(Person);
            displaytable1();
            localStorage.setItem("data1", JSON.stringify(student1));
        }
            break;

        case 'SchoolName2': {
            student2.push(Person);
            displaytable2();
            localStorage.setItem("data2", JSON.stringify(student2));
        }
            break;

        case 'SchoolName3': {
            student3.push(Person);
            displaytable3();
            localStorage.setItem("data3", JSON.stringify(student3));
        }
            break;
    }

}

