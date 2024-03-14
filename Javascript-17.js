
const Form = () => {

  const time1 = document.getElementById("time1").value;
  console.log(time1);

  const time2 = document.getElementById("time2").value;
  console.log(time2);


  let date1 = new Date(time1);
  let date2 = new Date(time2);

  let hour1 = date1.getDate();
  let hour2 = date2.getDate();
  console.log(parseInt(hour1) - parseInt(hour2));

  if (parseInt(hour1) - parseInt(hour2) > 0) {
    alert("valid")
  }
  else { alert("invalid") }

}



const mytime = () => {
  const time3 = document.getElementById("time3").value;
  console.log(time3);

  const time4 = document.getElementById("time4").value;
  console.log(time4);

  console.log(parseInt(time3) - parseInt(time4));

  if (parseInt(time3) - parseInt(time4) > 0) {
    console.log("True");
    document.getElementById("time").innerHTML = "True";
  }
  else {
    console.log("False");
    document.getElementById("time").innerHTML = "False";
  }
}

const mydate = () => {
  const date1 = document.getElementById("date1").value;
  console.log(date1);

  const date2 = document.getElementById("date2").value;
  console.log(date2);

  console.log(parseInt(date1) - parseInt(date2));

  if (parseInt(date1) - parseInt(date2)) {
    console.log("True");
    document.getElementById("date").innerHTML = "True";
  }
  else {
    console.log("False");
    document.getElementById("date").innerHTML = "False";
  }
}

// Days convert into a year
const myday = () => {

  const hello = document.getElementById("day").value;
  console.log(parseInt(hello) / 365 + " year");

}

// Date return age
const Forms = () => {

  let birthdate = new Date(document.getElementById('date3').value);

  let currentDate = new Date();

  let age = currentDate.getFullYear() - 1 - birthdate.getFullYear() + " year";
  console.log(age);
  let m = birthdate.getMonth() - currentDate.getMonth();
  let d = birthdate.getDate() - currentDate.getDate();

}



function Age() {

  var d1 = document.getElementById('datee').value;
  console.log(d1);

  var m1 = document.getElementById('month').value;
  console.log(m1);

  var y1 = document.getElementById('year').value;
  console.log(y1);


  var date = new Date();
  var d2 = date.getDate();
  console.log(d2);

  var m2 = 1 + date.getMonth();
  console.log(m2);

  var y2 = date.getFullYear();
  console.log(y2);

  var month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  if (d1 > d2) {
    d2 = d2 + month[m2 - 1];
    console.log(d2);
    m2 = m2 - 1;
    console.log(m2);
  }

  if (m1 > m2) {
    m2 = m2 + 12;
    console.log(m2);
    y2 = y2 - 1;
    console.log(y2);
  }

  var d = d2 - d1;
  console.log(d + " Days");

  var m = m2 - m1;
  console.log(m + " Month");

  var y = y2 - y1;
  console.log(y + " Years");

  document.getElementById('age').innerHTML = 'Your Age is ' + y + ' Years, ' + m + ' Months, ' + d + ' Days.';

}





