let users = localStorage.getItem('userinfo')
    ? JSON.parse(localStorage.getItem('userinfo'))
    : []

console.log(users)
let result = document.getElementById("result");
let card = document.querySelector('.card');
function printUser(){
    users.forEach(user => {
    result.innerHTML = ""

        result.innerHTML += `
            <img src=${user.profile} alt="">
            <p><b>USER ID :</b> <span>${user.id}</span></p>
            <p><b>Name : </b><span>${user.name}</span></p>
            <p><b>Email : </b><span>${user.email}</span></p>
            <p><a href="#">EDIT</a><a href="#" onclick="deleUser(${user.id})">DELETE</a></p>
        `;
    });

    card.appendChild(result);

    // result.innerHTML = ""
}

printUser();
function deleUser(id){
    if(confirm(`Are you sure to delete an user id = ${id}`)){
        if(id === users.id){
            localStorage.removeItem("userinfo");
            alert('user id doesnot exists');
            result.style.display = "none";
        }
        else{
            alert('Delete operation cancelled');
        }
    }
}