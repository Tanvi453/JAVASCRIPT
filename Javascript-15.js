let student = JSON.parse(localStorage.getItem("Javaa")) || [];

const displaytable = () => {
    document.getElementById("tbl").innerHTML = student.map((item, index) => {
        return (
            `<div style="display: flex; flex-direction: column; gap: 10px;">

              <div style="background-color: ${item.color}; border:2px black solid; height:100px; width:100px;"></div>
              
              <div style="display: flex; flex-direction: column; gap: 10px;">
                <div>${item.id}</div>
                <div>${item.name}</div>
                <div>${item.post}</div>
                <div>${item.color}</div>
              </div>

            </div>`
        )
    }).join('')
}
displaytable();


const post = () => {

    const id = document.getElementById("id").value;
    console.log(id);

    const name = document.getElementById("name").value;
    console.log(name);

    const post = document.getElementById("post").value;
    console.log(post);

    const color = document.getElementById("color").value;
    console.log(color);

    const Person = {
        id: id, name: name, post: post, color: color,
    }
    student.push(Person);
    displaytable();
    localStorage.setItem("Javaa", JSON.stringify(student));
    console.log("Student", student);
    console.log(Person);

}