let newArray = [];
newArray = JSON.parse(localStorage.getItem('1234567890'));
console.log(newArray[0]);
let k = newArray.length;

const quesDDIV = document.getElementById('quesDDIV');

const submit = document.getElementById('finalAdminSubmit');

for(let i=0;i<k;i++){

    let k = newArray[i].correctAnswer;

    let a = "red";
    let b = "red";
    let c = "red";
    let d = "red";

    if(k == "a") a = "green";
    if(k == "b") b = "green";
    if(k == "c") c = "green";
    if(k == "d") d = "green";

    let html = `<div id="quesDIV">
        <div style=" font-size: 12px; margin-bottom: 5px; font-weight: bold;">Question ${i+1}:</div>
        <div class="question">${newArray[i].question}</div>

        <div style=" display: flex;">
        <p class="opt" style="background-color: ${a};">${newArray[i].option1}</p>
        <p class="opt" style="background-color: ${b};">${newArray[i].option2}</p>
        <p class="opt" style="background-color: ${c};">${newArray[i].option3}</p>
        <p class="opt" style="background-color: ${d};">${newArray[i].option4}</p>
        </div>
        
    </div>`;

    quesDDIV.innerHTML += html;
}

submit.addEventListener('click', function(){
    window.location.href = "index.html";
})