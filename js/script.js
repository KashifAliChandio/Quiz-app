


// var questions =  [
//     {
//         "question" : "What is the keyword that displays a message box?",
//         "option1" : "alert",
//         "option2" : "messageBox",
//         "option3" : "console.log",
//         "option4" : "alertBox",
//         "answer" : '1'
//     },

//     {
//         "question" : "In the following code, 'Mark' is a string. What is name ?",
//         "option1" : "Number",
//         "option2" : "Array",
//         "option3" : "Float",
//         "option4" : "variable",
//         "answer" : '4'
//     },
//     {
//         "question" : "You can assign a string to a variable. You can also assign a ______.",
//         "option1" : "Number",
//         "option2" : "loop",
//         "option3" : "condition",
//         "option4" : "None of these",
//         "answer" : '1'
//     },
//      {
//         "question" : "If a number is enclosed in quotes, it's a ______.",
//         "option1" : "Number",
//         "option2" : "loop",
//         "option3" : "String",
//         "option4" : "Character",
//         "answer" : '3'
//     },
//     {
//         "question" : "What kind of operation can be done on a number variable that, in one particular case, can't be done on a string variable?",
//         "option1" : "subs",
//         "option2" : "math",
//         "option3" : "concatenate",
//         "option4" : "None of These",
//         "answer" : '2'
//     },
//     {
//         "question" : "Fill in the blank to generate a pseudo-random number. var randomNum = ___________());",
//         "option1" : "Math.random()",
//         "option2" : "math",
//         "option3" : "math.random",
//         "option4" : "math.random()",
//         "answer" : '1'
//     },
//     {
//         "question" : "What is the keyword for converting '1.5' to 1.5?",
//         "option1" : "parseint",
//         "option2" : "math",
//         "option3" : "math.Float",
//         "option4" : "parseFloat",
//         "answer" : '4'
//     },
//       {
//         "question" : "What is the value of num? var num = parseInt('5.6');",
//         "option1" : "5.6",
//         "option2" : "error",
//         "option3" : "5",
//         "option4" : "6",
//         "answer" : '3'
//     },
//     {
//         "question" : "Q No 9: What is the keyword for converting an integer string or floating-point number string, to its equivalent number?",
//         "option1" : "Number",
//         "option2" : "Num",
//         "option3" : "parseFloat",
//         "option4" : "none of these",
//         "answer" : '1'
//     },
//     {
//         "question" : "Q No 10: What is the keyword for converting a number to a string?",
//         "option1" : "Number",
//         "option2" : "toString",
//         "option3" : "parseFloat",
//         "option4" : "none of these",
//         "answer" : '2'
//     },
// ]

// var currentQuestion = 0;
// var score = 0;
// var totQuestion = questions.length;

// var container = document.getElementById("quizConatiner");
// var questionEl = document.getElementById('question');
// var opt1 = document.getElementById('opt1');
// var opt2 = document.getElementById('opt2');
// var opt3 = document.getElementById('opt3');
// var opt4 = document.getElementById('opt4');

// var nextButton = document.getElementById('nextButton');
// var resultCont = document.getElementById('result');

// function loadQuestion (questionIndex) {
//     var q = questions[questionIndex];
//     questionEl.textContent = (questionIndex + 1) + '. '+q.question;
//     opt1.textContent = q.option1;
//     opt2.textContent = q.option2;
//     opt3.textContent = q.option3;
//     opt3.textContent = q.option4 ;
// }

// function loadNextQuestion() {
//     var selectedOption = document.querySelector('input[type=radio]:checked');
//     if (selectedOption) {
//         alert('please Select Ypur Answer!');
//         return;
//     }
//     var answer = selectedOption.value;
//     if(questions[currentQuestion].answer == answer){
//         score == 10;

//     }
//     selectedOption.checked =false;
//     currentQuestion++;
//     if(currentQuestion == totQuestion -1){
//         nextButton.textContent = 'finish'
//     }
//     // if(currentQuestion == totQuestion){
//     //     container.style.display = "none";
//     //     resultCont.style.display = '';
//     //     resultCont.textContent = "your Score " + score;
//     //     return;
//     // }
//     loadQuestion(currentQuestion);
//     }

//     loadQuestion(currentQuestion);



// var userInput = document.getElementById("userName").value;
// var emailInput = document.getElementById("email").value;
// var pass  = document.getElementById("userPassword").value;
// console.log(userInput);
// console.log(emailInput)
// console.log(pass)
// function userData() {
//     var users = {
//         user: userInput,
//         email: emailInput,
//         password : pass

//     }
// console.log("");
//     localStorage.setItem('quiztempdata', JSON.stringify(quiz));
//     // location = 'addquestions.html';
    
// }
