topScores = localStorage.getItem("topScores");
topScores = JSON.parse(topScores);
if (topScores === null){
  var topScores = [];

}
var secondintervalid
var seconds = 60;
document.getElementById("b1").addEventListener("click", function() {
  // alert("Ready! set, Go!");
   secondintervalid = setInterval(function() {
    seconds = seconds - 1;
    timeElement.textContent = seconds + " Seconds";
    if (seconds === 0) {
      alert(
        "Time ran out, Thank you For taking the Front-end web Developer quiz!"
      );
      clearInterval(secondintervalid);
    }
  }, 1000);
  document.getElementById("hide").remove();
  var questionsarea = document.getElementById("questions");
  var question = document.createElement("h1");
  question.innerText = questions[currentquestion].question;
  questionsarea.appendChild(question);

  for (var i = 0; i < questions[currentquestion].choices.length; i++) {
    var button = document.createElement("button");
    button.innerText = questions[currentquestion].choices[i];
    questionsarea.appendChild(button);
  }
});

var questionsarea = document.getElementById("questions");
questionsarea.addEventListener("click", function(event) {
  // whatevr choice is clicked.. compair this to answer
  var innerText = event.target.innerText;
  console.log(innerText);
  if (innerText === questions[currentquestion].Answer) {
    currentquestion = currentquestion + 1;
    var pTag = document.createElement("p");
    pTag.innerText = "Correct";
    questionsarea.appendChild(pTag);
  } else {
    currentquestion = currentquestion + 1;
    seconds = seconds - 5;
    var pTag = document.createElement("p");
    pTag.innerText = "incorrect";
    questionsarea.appendChild(pTag);
  }
  
  var timeout = setTimeout(function(){
    if (currentquestion > questions.length -1){
      clearInterval(secondintervalid)
      clearTimeout(timeout)
      questionsarea.innerHTML = ("")
      document.getElementById("Fscore").setAttribute("style", "display:block")
      document.getElementById("score").innerText = seconds

      return
    }
    questionsarea.innerHTML = ("")
    var question = document.createElement("h1");
    question.innerText = questions[currentquestion].question;
    questionsarea.appendChild(question);
  
    for (var i = 0; i < questions[currentquestion].choices.length; i++) {
      var button = document.createElement("button");
      button.innerText = questions[currentquestion].choices[i];
      questionsarea.appendChild(button);
    }
   
  }, 500)
  
});
var timeElement = document.querySelector("#timer");
// check bottom
var seconds = localStorage.getItem("topScores")
//  var seconds = 60;
timeElement.textContent = seconds + "Seconds";
currentquestion = 0;
var questions = [
  {
    question: "How do you close this <p> tag? ",
    choices: ["p/", "(p)", "</p>", "<!p>"],
    Answer: "</p>"
  },
  {
    question: "what is the property to change a Background color in Css?",
    choices: [
      "Color-Background:",
      "(Color-Background);",
      "Background-color:",
      "<Background-color>"
    ],
    Answer: "Background-color:"
  },
  {
    question: "How many <H> tags are there?",
    choices: ["3", "5", "4", "6"],
    Answer: "6"
  },
  {
    question: "What is Bootstrap Used for?",
    choices: [
      "Css libary",
      "Html libary",
      "Css & JavaScript",
      "So your Shoes wont feel loose"
    ],
    Answer: "Css & JavaScript"
  }
];
  document.getElementById("scorebutton").addEventListener("click", function (event) { 
     event.preventDefault();  
     var name = document.getElementById("Name").value 
     var userScore = {   
     name: name,  
      score: seconds 
        
        };
        topScores.push(userScore); 
        console.log(topScores)
         var json = JSON.stringify(topScores); 
         localStorage.setItem("topScores", json);});