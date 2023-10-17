let userForm = document.getElementById('userForm');
let username  = document.getElementById('name');
let useremail  = document.getElementById('email');
let userprofile  = document.getElementById('profile');
let usergender  = document.getElementsByName('gender');
let selGender = "";

function idRandom(){
    let randId = Math.floor(Math.random() * 1000);
    return randId;
}

userForm.addEventListener("submit",function(e){
    e.preventDefault();
    for(let index=0;index<usergender.length;index++){
        if(usergender[index].checked){
            selGender = usergender[index].value;
            console.log(selGender);
        }
    }
    let data = {
        id : idRandom(),
        name : username.value,
        email : useremail.value,
        profile : userprofile.value,
        gender : selGender,
    }
    console.log("new user = ",data)  
    createUser(data);
})
function createUser(user){
    // console.log(user)
    localStorage.setItem("user info ", JSON.stringify(user));
    alert("new user created");
    window.location.href = '/13-Projects/03-CRUD-LocalStorage/index.html';
}