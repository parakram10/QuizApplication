
const mainSubmit = document.getElementById('submit');

const admin = document.getElementById('admin');

const participant = document.getElementById('participant');

const username = document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('password');

mainSubmit.addEventListener('click', mainsubmit);

function mainsubmit(){

    if(admin.checked){
        window.location.href = "adminpage.html";
    }

    else{
        window.location.href = "participant.html";
    }

    username.value = "";
    email.value = "";
    password.value = "";

    admin.checked = false;

    participant.checked = false;

}