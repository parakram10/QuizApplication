let a = localStorage.getItem('1234567890');
b = JSON.parse(a);
console.log(b);

let question = document.getElementById('questiondivision');

let option1 = document.getElementById('op1');
let option2 = document.getElementById('op2');
let option3 = document.getElementById('op3');
let option4 = document.getElementById('op4');

let opt1 = document.getElementById('option1');
let opt2 = document.getElementById('option2');
let opt3 = document.getElementById('option3');
let opt4 = document.getElementById('option4');

let answerDiv = document.getElementById('ansDiv');


let nextQuestion = document.getElementById('nextparticipant');
let submittest = document.getElementById('submitparticipant');
let options = document.querySelectorAll('.options');
submittest.disabled = true;
let correctAns = b[0].correctAnswer;

let str;

option1.addEventListener('click', (e)=>{
    chooseAnswer(e);
});
option2.addEventListener('click', (e)=>{
    chooseAnswer(e);
});
option3.addEventListener('click', (e)=>{
    chooseAnswer(e);
});
option4.addEventListener('click', (e)=>{
    chooseAnswer(e);
});

let res = 0;
let queNo = 1;

question.innerText = b[0].question;
option1.innerText = b[0].option1;
option2.innerText = b[0].option2;
option3.innerText = b[0].option3;
option4.innerText = b[0].option4;
let n = b.length;
console.log(correctAns);

nextQuestion.addEventListener('click', questions);

function questions(){
    if(queNo == n-1){
        nextQuestion.disabled = true;
        submittest.disabled = false;
    }
    opt1.style.backgroundColor = "white";
    opt2.style.backgroundColor = "white";
    opt3.style.backgroundColor = "white";
    opt4.style.backgroundColor = "white";
    answerDiv.style.opacity = "1";
    answerDiv.style.pointerEvents = 'auto';
    let o1 = false, o2 = false, o3 = false, o4 = false;
    question.innerText = b[queNo].question;
    option1.innerText = b[queNo].option1;
    option2.innerText = b[queNo].option2;
    option3.innerText = b[queNo].option3;
    option4.innerText = b[queNo].option4;
    correctAns = b[queNo].correctAnswer;
    console.log(correctAns);

    queNo++;
    
}

function chooseAnswer(e){
    // console.log(e.target.id)
    let s = document.getElementById(e.target.id).parentNode.className.split(' ')[1];
    // console.log(s.parentNode.className.split(' ')[1]);
    
    switch(e.target.id){
        case 'op1':
            if(s == correctAns ){
                opt1.style.backgroundColor = "green";
                res++;
            }
            else{
                opt1.style.backgroundColor = "red";
            }
            break;
            
        case 'op2':
            if(s == correctAns ){
                opt2.style.backgroundColor = "green";
                res++;
            }
            else{
                opt2.style.backgroundColor = "red";
            }
            break;
        case 'op3':
            if(s == correctAns ){
                opt3.style.backgroundColor = "green";
                res++;
            }
            else{
                opt3.style.backgroundColor = "red";
            }
            break;
            case 'op4':
            if(s == correctAns ){
                opt4.style.backgroundColor = "green";
                res++;
            }
            else{
                opt4.style.backgroundColor = "red";
            }
            break;
    }
    answerDiv.style.pointerEvents = 'none';
    answerDiv.style.opacity = "0.7";
}

submittest.addEventListener('click', function(){
    console.log(res);
})