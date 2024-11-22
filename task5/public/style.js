var UserId = null;
function myfunction() {
    var userName = document.getElementById("UsersName").value;
    var userEmail = document.getElementById("email").value;
    var userMob = document.getElementById("Mobile").value;
    var userDob = document.getElementById("dob").value;
    var userReligion = document.getElementById("Religion").value;

    document.getElementById("err1").innerHTML = "";
    document.getElementById("err3").innerHTML = "";
    document.getElementById("err4").innerHTML = "";
    document.getElementById("err5").innerHTML = "";
    document.getElementById("err6").innerHTML = "";
    valid = true;
    if (userName === "") {
        document.getElementById("err1").innerHTML = "*required";
        valid = false
    }
    if (userEmail === "") {
        document.getElementById("err3").innerHTML = "*required";
        valid = false
    }
    else if (!userEmail.includes("@")) {
        document.getElementById('err3').innerHTML = "It's not valid";
        valid = false;
    }
    else if (!userEmail.includes(".")) {
        document.getElementById('err3').innerHTML = "It's not valid";
        valid = false;
    }
    if (userMob === "") {
        document.getElementById("err4").innerHTML = "*required";
        valid = false
    }
    if (userDob === "") {
        document.getElementById("err5").innerHTML = "*required";
        valid = false
    }
    if (userReligion === "CHOOSE" || userReligion === "") {
        document.getElementById("err6").innerHTML = "*required";
        valid = false
    }
    if (valid) {
        var person = {
            username: userName,
            email: userEmail,
            mobile: userMob,
            birth: userDob,
            religion: userReligion,
        }
        if (UserId) {
            fetch("https://6718b1927fc4c5ff8f4a99e0.mockapi.io/api/person/details/" + UserId, {
                method: "PUT",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(person)
            })
                .then((res) => res.json())
                .then((data) => {
                    insertTable();
                })
                .catch(error => console.log(error));
         
          var button = document.getElementById("button");
          button.innerHTML="Submit"
        
        } else {
            fetch("https://6718b1927fc4c5ff8f4a99e0.mockapi.io/api/person/details", {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(person)
            })
                .then((res) => res.json())
                .then((data) => console.log("post successful", data))
                .catch(error => console.log(error));
        }
        fetch("https://6718b1927fc4c5ff8f4a99e0.mockapi.io/api/person/details", {
            method: "GET",
        })
            .then((res) => res.json())
            .then(data => {
                insertTable();
            })
            .catch(error => console.log(error));

        document.getElementById("UsersName").value = "";
        document.getElementById("email").value = "";
        document.getElementById("Mobile").value = "";
        document.getElementById("dob").value = "";
        document.getElementById("Religion").value = "";
    }
}
function insertTable() {
    fetch("https://6718b1927fc4c5ff8f4a99e0.mockapi.io/api/person/details")
        .then(response => response.json())
        .then(person => {
            let tableBody = "";
            for (let i = 0; i < person.length; i++) {
                tableBody += "<tr> <td>" + person[i].username + "</td><td>" +
                    person[i].email + "</td><td>" +
                    person[i].mobile + "</td><td>" + '<button class="mx-2"  onclick="buttonEdit(' + person[i].id + ')" style="background:transparent; border:hidden;color:blue;padding:1px;"><i class="fas fa-pen"></i></button>' + '<button class="mx-2"  onclick="buttonDelete(' + person[i].id + ')" style="background:transparent; border:hidden;color:red;padding:1px;"><i class="fas fa-trash"></i></button>' + "</td></tr>"
            }
            document.getElementById("tableBody").innerHTML = tableBody;
        })
        .catch(error => console.error(error));
}
function buttonDelete(id) {
    fetch("https://6718b1927fc4c5ff8f4a99e0.mockapi.io/api/person/details/" + id, {
        method: "DELETE",
    })
        .then((res) => {
            if (!res.ok) return res.json()
        })
        .then((data) => {
            insertTable();
        })

        .catch((error) => console.log(error));
}
window.onload = function () {
    insertTable();
};
function buttonEdit(id) {
    UserId = id;
    fetch("https://6718b1927fc4c5ff8f4a99e0.mockapi.io/api/person/details/" + id, {
        method: "GET",
        headers: {
            "content-type": "application/json"
        }
    })
        .then((res) => res.json())
        .then((person) => {
            document.getElementById("UsersName").value = person.username;
            document.getElementById("email").value = person.email;
            document.getElementById("Mobile").value = person.mobile;
            document.getElementById("dob").value = person.birth;
            document.getElementById("Religion").value = person.religion;
            var button = document.getElementById("button");
            button.innerHTML="Update"
           })
        .catch(error => console.log(error));

}

















































































