function populate(){
    if(quiz.isEnded()) {
        showScores();
    } else {
        //show Question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;
        // show choices
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i<choices.length; i++){
            var element = document.getElementById('choice'+ i);
            element.innerHTML = choices[i];
            guess("btn"+ i, choices[i]);
        }
        showProgress();
    }
};

function guess(id, guess){
    var button = document.getElementById(id);
    button.onclick = function(){
       quiz.guess(guess);
       populate(); 
    }
}

function showProgress(){
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = 'Question ' + currentQuestionNumber + "of " + quiz.questions.length;
}

function showScores(){
    var gameOverHtml = "<h1>Result<h1>";
    gameOverHtml += "<h2 id ='score'> Your scores: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHtml;
}


function Quiz(questions){
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}

Quiz.prototype.getQuestionIndex = function(){
    return this.questions[this.questionIndex];
}

Quiz.prototype.isEnded = function(){
    return this.questions.length === this.questionIndex;
}

Quiz.prototype.guess = function(answer){

    if(this.getQuestionIndex().correctAnswer(answer)) {
        this.score++;
    }
    this.questionIndex++;
}



var questions = [
    new Question ("What is the keyword that displays a message box?", ["alert","MessageBox","console.log","alertBox"],"alert"),
    new Question ("In the following code, 'Mark' is a string. What is name ?", ["Number","variable","Array","Float"],"variable"),
    new Question ("You can assign a string to a variable. You can also assign a ______.", ["Number","loop","condition","none of these"],"Number"),
    new Question ("If a number is enclosed in quotes, it's a ______.", ["array","error","NAN","String"],"String"),
    new Question ("Fill in the blank to generate a pseudo-random number. var randomNum = ___________());", ["Math.random()","math","Math.round()","Math.ceil()"],"Math.random()"),
    new Question ("What is the keyword for converting '1.5' to 1.5", ["parseint","math","Math.Float","parseFloat"],"parseFloat"),
    new Question ("What is the value of num? var num = parseInt('5.6');", ["5.6","5","error","6"],"5"),
    new Question ("What is the keyword for converting an integer string or floating-point number string, to its equivalent number?", ["Number","num","parseFloat","none of these"],"Number"),
    new Question ("What is the keyword for converting a number to a string?", ["String()","parseString","Number","toString"],"toString"),
    new Question ("Which keyword is used to check error in javascript", ["console.log()","console","Console.check()","None Of these"],"console.log()")
    
];

console.log(Quiz)
var quiz = new Quiz(questions);

populate();