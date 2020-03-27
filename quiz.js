var secondintervalid
document.getElementById("b1").addEventListener("click", function() {
  alert("Ready! set, Go!");
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
   
  }, 700)
  
});
var timeElement = document.querySelector("#timer");
var seconds = 60;
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
    question: "What is Bootstrap?",
    choices: [
      "Css libary",
      "Html libary",
      "Css tags",
      "So your Shoes wont feel loose"
    ],
    Answer: "Css & JavaScript"
  }
];
document.getElementById("score").addEventListener("click", function() {
  localStorage.setItem("username", "John");

})