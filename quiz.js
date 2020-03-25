document.getElementById("b1").addEventListener("click", function() {
  alert("Ready! set, Go!");
  var secondintervalid = setInterval(function() {
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
questionsarea.addEventListener("click", function() {
  // whatevr choice is clicked.. compair this to answer
});
var timeElement = document.querySelector("#timer");
var seconds = 4;
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
