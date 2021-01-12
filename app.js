let questionArray = [];
let qkey;
let i = 0;


const numberOfQuestions = document.getElementById('questions');

const nameOfQuiz = document.getElementById('quizName');

const passkey = document.getElementById('passkey');

const questionsByAdmin = document.getElementById('question');

const option1 = document.getElementById('option1');

const option2 = document.getElementById('option2');

const option3 = document.getElementById('option3');

const option4 = document.getElementById('option4');

const correctOption = document.getElementById('correct');

const nextQuestionByAdmin = document.getElementById('nextQuestionByAdmin');

const submitByAdmin = document.getElementById('submitAndShare');

const finalSubmit = document.getElementById('finalAdminSubmit');

nextQuestionByAdmin.addEventListener('click',submitNextQuestionByAdmin);

submitByAdmin.addEventListener('click', submitedByAdmin);

function submitNextQuestionByAdmin(){
    let name = nameOfQuiz.value;
    let password = passkey.value;
    let numberOfQuestion = numberOfQuestions.value;
    let adminquestion = questionsByAdmin.value;
    let op1 = option1.value;
    let op2 = option2.value;
    let op3 = option3.value;
    let op4 = option4.value;
    let correctAnswer = correctOption.value;

    numberOfQuestions.value = numberOfQuestion;
    passkey.value = password;
    nameOfQuiz.value = name;
    qkey = password;

    numberOfQuestions.disabled = true;
    passkey.disabled = true;
    nameOfQuiz.disabled = true;

    if(name == "" || name == null, password == "" || password == null , numberOfQuestion == "" || numberOfQuestion == null , adminquestion == "" || adminquestion == null , op1 == "" || op1 == null , op2 == "" || op2 == null , op3 == "" || op3 == null , op4 == "" || op4 == null , correctAnswer == ""  || correctAnswer ==null){
        alert('All the fields are empty!');
    }

    else{

        let questions = {};

        if(correctAnswer != "a" && correctAnswer != "b" && correctAnswer != "c" && correctAnswer != "d"){
            alert("Correct answer should be a or b or c or d");
            correctOption.value = "";
        }

        else if( op1 == op2 || op2 == op3 || op3 == op4 || op4 == op1 || op4 == op2 || op1 == op3 ){
            alert('All the options should be different');
        }

        else{
            correctAnswer = correctOption.value;
            questions = {
                "question":adminquestion,
                "option1":op1,
                "option2":op2,
                "option3":op3,
                "option4":op4,
                "correctAnswer":correctAnswer
            }
    
            questionArray.push(questions);

            questionsByAdmin.value = "";
            option1.value = "";
            option2.value = "";
            option3.value = "";
            option4.value = "";
            correctOption.value = "";

            i++;

        if(i == numberOfQuestion){
            nextQuestionByAdmin.disabled = true;
            // nextQuestionByAdmin.removeEventListener('click', submitNextQuestionByAdmin);

            submitByAdmin.disabled = false;
            // questionsByAdmin.disabled = true;
            option1.disabled = true;
            option2.disabled = true;
            option3.disabled = true;
            option4.disabled = true;
            correctOption.disabled = true;
        }
        console.log(questionArray);
        } 
    }
}

function submitedByAdmin(){

    localStorage.setItem(qkey, JSON.stringify(questionArray));
    window.location.href = "submittedQuestions.html";
}