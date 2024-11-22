var personArray = [];
function validateForm() {
    var box1=document.getElementById("Name").value;
    var box2=document.getElementById("Type").value;
    var box3=document.getElementById('GST').value;
    var box4=document.getElementById('State').value;
    var box5=document.getElementById('City').value;
    var box6=document.getElementById('Country').value;
    var box7=document.getElementById('Number1').value;
    var box8=document.getElementById('Number2').value;
    var box9=document.getElementById('Contact').value;
    var box10=document.getElementById('Prefix').value;
    var box11=document.getElementById('Sefix').value;

         document.getElementById("err1").innerHTML = "";
         document.getElementById("err2").innerHTML = "";
         document.getElementById("err3").innerHTML = "";
         document.getElementById("err4").innerHTML = "";
         document.getElementById("err5").innerHTML = "";
         document.getElementById("err6").innerHTML = "";
         document.getElementById("err7").innerHTML = "";
         document.getElementById("err8").innerHTML = "";
         document.getElementById("err9").innerHTML = "";
         document.getElementById("err10").innerHTML = "";
         document.getElementById("err11").innerHTML = "";

         var valid = true;


    if (box1 === "") {
      document.getElementById("err1").innerHTML = "*required";
      
      valid = false
        
    }

    if (box2 ==="choose" ||box2 ==="") {
      document.getElementById("err2").innerHTML = "*required";
      valid = false
    }
    if (box3 ==="") {
        document.getElementById("err3").innerHTML = "*required";
        valid = false
      }
     if (box4 ==="choose" ||box4 ==="") {
        document.getElementById("err4").innerHTML = "*required";
        valid = false
      }
    if (box5 ==="choose" ||box5 ==="") {
        document.getElementById("err5").innerHTML = "*required";
        valid = false
      }
    if (box6 ==="choose" ||box6 ==="") {
        document.getElementById("err6").innerHTML = "*required";
        valid = false
      }
    if (box7 ==="") {
        document.getElementById("err7").innerHTML = "*required";
        valid = false
      }
       if (box8 ==="") {
        document.getElementById("err8").innerHTML = "*required";
        valid = false
      }
    if (box9 ==="") {
        document.getElementById("err9").innerHTML = "*required";
        valid = false
      }
    if (box10 ==="") {
        document.getElementById("err10").innerHTML = "*required";
        valid = false
      }
    if (box11 ==="") {
        document.getElementById("err11").innerHTML = "*required";
        valid = false
      }

      if(valid){
       var personObj = {
       companyName:  box1,
       companyType:  box2,
       companyGST:  box3,
       companyState:  box4,
       companyCity:  box5,
       companyCountry:  box6,
       companyNum:  box7,
       companyNumber:  box8,
       companyContact:  box9,
       companyPreix:  box10,
       companySefix:  box11,
    }

    personArray.push(personObj);
    console.log(personArray);
    addTable();
    insetTable();
  
  }

}
function  insetTable(){
  console.log(personArray)
 
    
    console.log(personArray)
    console.log(personArray.length)
    tablebody = " ";
  for (i = 0; i <  personArray.length; i++) {
    tablebody += "<tr><td>"+personArray[i].companyName+"</td><td>"+personArray[i].companyGST+"</td><td>"+personArray[i].companyNum+"</td><td><button class='btn btn-primary mx-3' onclick='Edit(" + i +")'>Edit</button><button class='btn btn-danger' onclick='Delete(" + i +")'>Delete</button></td></tr>";

   
  }
  document.getElementById("tablebody").innerHTML=tablebody;
  console.log(tablebody)
}



    function addTable() { 
    document.getElementById("Name").value = "";
    document.getElementById("Type").value = "";
    document.getElementById("GST").value = "";
    document.getElementById("State").value = "";
    document.getElementById("City").value = "";
    document.getElementById("Country").value = "";
    document.getElementById("Number1").value = "";
    document.getElementById("Number2").value = "";
    document.getElementById("Contact").value = "";
    document.getElementById("Prefix").value = "";
    document.getElementById("Sefix").value = "";

    }
    

function Edit(i) {
    var person = personArray[i];
    personArray.splice(i,1)
   
    document.getElementById("Name").value = person.companyName;
    document.getElementById("Type").value = person.companyType;
    document.getElementById("GST").value = person.companyGST;
    document.getElementById("State").value = person.companyState;
    document.getElementById("City").value = person.companyCity;
    document.getElementById("Country").value = person.companyCountry;
    document.getElementById("Number1").value = person.companyNum;
    document.getElementById("Number2").value = person.companyNumber;
    document.getElementById("Contact").value = person.companyContact;
    document.getElementById("Prefix").value = person.companyPrefix;
    document.getElementById("Sefix").value = person.companySefix;

   
}
function Delete(i) {
  console.log(i)
  personArray.splice(i, 1);
  
  insetTable();
  
}

  





      