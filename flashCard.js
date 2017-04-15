/* 
How do I want my question? 
Question and answer (front/back) 
Statement with deletion of main topic "partial/ deletion"  
Deletion to also be multiple choice (inquire choice) 
All must print out full text afterward  */

// dependency for inquirer npm package 
 
var inquirer = require("inquirer");
var fs = require("fs"); 
 
 
// constructor function used to create flashcard objects 
 
// function BasicCard (questions, answers) { 
//   this.questions = questions; 
//   this.answers = answers; 
// }

function ClozeCard (partialStatements, deletionStatements) { 
  this.partialStatements = partialStatements; 
  this.deletionStatements = deletionStatements; 
  this statement = function(){
  	//fullstatment statement 
  }
}

function flashCard() {
    count = 0;
    inquirer.prompt([{
        type: "list",
        message: "Choose one of the following study-guide:",
        choices: ["Basic", "Cloze"],
        name: "chooseType"
    }]).then(function(answers) {
        if (answers.chooseType === "Basic") {
            questionAnswer();
        } else {
            cloze();
        }
    });
}

var basicQuestions = [{
    question: "Is HTML a programming language?",
    answer: "No"
}, {
    question: "What does HTML stand for?",
    answer: "Hyper text markup language"
}, {
    question: "What does CSS stand for?",
    answer: "Cascading Style Sheet"
}, {
    question: "What happens to a lot of images saved as jpgs when you put them online.",
    answer: "Lower quality and artifacts."
}, {
    question: "Where should a CSS file be referenced in a HTML file?",
    answer: "Inside the head section"
}];


//simple front & back, Q&A
function questionAnswer() {

    if (count < basicQuestions.length) {
        inquirer.prompt([{
            name: "input",
            message: basicQuestions[count].question
        }]).then(function(answers) {
            if (answers.input === basicQuestions[count].answer) {
                console.log("Keep going!");
                score++;
            } else {
                console.log("Sorry, the correct answer is " + basicQuestions[count].answer);
            }
            count++;
            questionAnswer();
        });
    }
}

function cloze() {
 //must use recursion 
 //prompt
 //append to statment 

  
}

//run the program
flashCard();
