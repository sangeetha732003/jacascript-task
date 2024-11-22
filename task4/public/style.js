function validateForm(){
    var Username = document.getElementById("Username");
    var Emailaddress = document.getElementById("Email");
    var Password = document.getElementById("Password");
    var error = false;
      if (Username.value == "") {
        document.getElementById("err1").innerHTML = "*required";
        Username.style.border = "2px solid red";
        error =true;
      } 
      else {
        Username.style.border = "2px solid green";
        document.getElementById("err1").innerHTML = "";
      }
      if (Emailaddress.value === "") {
        document.getElementById("err2").innerHTML = "*required";
        Emailaddress.style.border = "2px solid red";
        error = true;
      } else if (!Emailaddress.value.includes("@")) {
        document.getElementById("err2").innerHTML = "*Invalid email address";
        Emailaddress.style.border = "2px solid red";
        error = true;
      } 
      else if (!Emailaddress.value.includes(".")) {
        document.getElementById("err2").innerHTML = "*Invalid email address";
        Emailaddress.style.border = "2px solid red";
        error = true;
      }
      else {
        document.getElementById("err2").innerHTML = "";
        Emailaddress.style.border = "2px solid green";
        error = false;
      }
      if (Password.value == "") {
        document.getElementById("err3").innerHTML = "*required";
        Password.style.border = "2px solid red";
        error = true;
      } 
      else if(Password.value.length < 6){
        document.getElementById("err3").innerHTML = "*More than 6 values";
        Password.style.border = "2px solid red";
        error = true;
      }
      else {
        Password.style.border = "2px solid green";
        document.getElementById("err3").innerHTML = "";
      }
    if (error) {
        return false;
    }
    var person = {
        personName: Username.value,
        personEmail: Emailaddress.value,
        personPassword: Password.value,
    }
     console.log(person);
     var personList = JSON.parse(localStorage.getItem("person")) || [];
     personList.push(person);
     localStorage.setItem("person", JSON.stringify(personList));
     insetable()
  }
      function insetable(){ 
      var personList = JSON.parse(localStorage.getItem("person")) || [];
      var tableRows = "";
      for (var i = 0; i < personList.length; i++) {
      var box = document.getElementById("list");
      if(personList.value>0){
       box.style.display="none";
     }
     else{
           box.style.display="block";
     }
           tableRows += "<tr><td>" + personList[i].personName + "</td><td>" + personList[i].personEmail + "</td><td>" + personList[i].personPassword + "</td><td>" +
            '<button data-toggle="tooltip" data-placement="top" title="Edit" onclick="Edit(' + i + ')" style="background: transparent; border: hidden; color: blue;"' +
            '<i class="fas fa-pen"></i></button>' +
            '<button class="btn btn-danger mx-1" onclick="deleteperson(' + i + ')" style="background: transparent; border: hidden; color: red;">' +
            '<i class="fas fa-trash"></i></button></td></tr>';
    }
     document.getElementById("tableBody").innerHTML = tableRows;
  }    
  function Edit(i) {
    var personList = JSON.parse(localStorage.getItem("person")) || [];
    var person = personList[i];
    document.getElementById("Username").value = person.personName;
    document.getElementById("Email").value = person.personEmail;
    document.getElementById("Password").value = person.personPassword;
    personList.splice(i, 1);
    localStorage.setItem("person", JSON.stringify(personList));
  }
  function deleteperson(i) {
   var del = confirm('Are you sure you want to delete this record?');
   if (del === true) {
        var personList = JSON.parse(localStorage.getItem("person")) || [];
        console.log(i);
        personList.splice(i, 1);
        localStorage.setItem("person", JSON.stringify(personList));
        insetable();
    } else {
         return;
    }
    if(i==0){
      var box = document.getElementById("list");
      box.style.display="none"
    }
}
      window.onload = function () {
      insetable();  
}

