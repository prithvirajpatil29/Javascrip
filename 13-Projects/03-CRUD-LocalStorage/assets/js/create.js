let userForm = document.getElementById('userForm');
let username  = document.getElementById('name');
let useremail  = document.getElementById('email');
let userprofile  = document.getElementById('profile');
let usergender  = document.getElementsByName('gender');
let selGender = "";

//local storage config
let users = localStorage.getItem('userinfo')
    ? JSON.parse(localStorage.getItem('userinfo'))
    :[];

// to generate random id - arrow function
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
    let exUser = users.find((item) => item.email === user.email);
    if(exUser){
        alert("Already user is existed")
    }
    else{
        users.push(user);
        localStorage.setItem("userinfo", JSON.stringify(users)); // corrected the key
        alert("new user created");
        window.location.href = '/13-Projects/03-CRUD-LocalStorage/index.html'
    }
}
