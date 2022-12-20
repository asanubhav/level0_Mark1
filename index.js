var readlineSync = require("readline-sync");
var score = 0;
var userName = readlineSync.question("What is your name? ");
console.log("Welcome! " + userName);
var questions = [{
  question: 'Who is the Prime Minister of India? ',
  answer: 'Narendra Modi'
}, {
  question: 'Who is the President of India? ',
  answer: 'Droupadi Murmu'
},
{
  question: 'Who is the Home Minister of India? ',
  answer: 'Amit Shah'
},
{
  question: 'Who is the Defence Minister of India? ',
  answer: 'Rajnath Singh'
},
{
  question: 'Who is the Vice President of India? ',
  answer: 'Jagdeep Dhankhar'
},

]
function play(question, answer) {
  var userAnswer = readlineSync.question(question);
  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    score = score + 1;
    console.log("You are Right!, Your Score is " + score)

  } else {
    score = score - 1;
    console.log("You are Wrong! Your Score is " + score)
  }

}
function game() {
  for (let i = 0; i < questions.length; i = i + 1) {
    let currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer)

  }
}
game()