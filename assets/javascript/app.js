var number = 30;

var intervalId;

var correctAnswers = 0;
var incorrectAnswers = 0;
var unanswered = 0;

// QUESTIONS
var questions = [{
  question: "Which album sold more records?",
  answerList: ["Michael Jackson's \"Thriller\"", "Metallica's \"Master of Puppets\"", "Rihanna's \"Good Girl Gone Bad\"", "Eddie Murphy's \"How Could It Be\""],
  answer: 0
}, {
  question: "\"Tamagotchi\" is a Japanese portmanteau of what two words?",
  answerList: ["\"keychain\" and \"creature\"", "\"pocket\" and \"animal\"", "\"egg\" and \"watch\"", "\"handheld\" and \"clock\""],
  answer: 2
}, {
  question: "What beer does Homer Simpson drink?",
  answerList: ["Molson", "Budweiser", "Busch Light", "Duff"],
  answer: 3
}, {
  question: "Who sang the \"Shaft\" theme song?",
  answerList: ["Prince", "Michael McDonald", "Michael Jackson", "Isaac Hayes"],
  answer: 3
}, {
  question: "The 1996 Summer Olympics where held in which U.S. city?",
  answerList: ["Los Angeles, CA", "Atlanta, GA", "Billings, MT", "Dallas, TX"],
  answer: 1
}, {
  question: "What is the name of the high school in \"Dawsons Creek\"?",
  answerList: ["Capeside High School", "Coastal Carolina High School", "Blackbeard High School", "E.A. Laney High School"],
  answer: 0
}, {
  question: "What is the first rule of Fight Club?",
  answerList: ["We only listen to Seals & Crofts", "O'Doyle Rules", "Ladies First", "You do not talk about Fight Club"],
  answer: 3
}];

$("#start").on("click", function () {

  // HIDE START
  $(this).hide();

  // TIMER COUNDOWN 
  $("#time").html("<h2>Time Remaining: 30 Seconds</h2>" + "<br>");

  // TIMER START
  run();

  //QUESTIONS CONT'D
  // # 1
  $("#question1").html("<h3>" + questions[0].question + "</h3>");
  $("#answer1").html("<input type='radio' name='answer1' value='0'>" + "<label>" + questions[0].answerList[0] + "</label>"
    + "<input type='radio' name='answer1' value='1'>" + "<label>" + questions[0].answerList[1] + "</label>"
    + "<input type='radio' name='answer1' value='2'>" + "<label>" + questions[0].answerList[2] + "</label>"
    + "<input type='radio' name='answer1' value='3'>" + "<label>" + questions[0].answerList[3] + "</label><br><br>"
  );

  // # 2
  $("#question2").html("<h3>" + questions[1].question + "</h3>");
  $("#answer2").html("<input type='radio' name='answer2' value='0'>" + "<label>" + questions[1].answerList[0] + "</label>"
    + "<input type='radio' name='answer2' value='1'>" + "<label>" + questions[1].answerList[1] + "</label>"
    + "<input type='radio' name='answer2' value='2'>" + "<label>" + questions[1].answerList[2] + "</label>"
    + "<input type='radio' name='answer2' value='3'>" + "<label>" + questions[1].answerList[3] + "</label><br><br>"
  );

  // # 3
  $("#question3").html("<h3>" + questions[2].question + "</h3>");
  $("#answer3").html("<input type='radio' name='answer3' value='0'>" + "<label>" + questions[2].answerList[0] + "</label>"
    + "<input type='radio' name='answer3' value='1'>" + "<label>" + questions[2].answerList[1] + "</label>"
    + "<input type='radio' name='answer3' value='2'>" + "<label>" + questions[2].answerList[2] + "</label>"
    + "<input type='radio' name='answer3' value='3'>" + "<label>" + questions[2].answerList[3] + "</label><br><br>"
  );

  // # 4
  $("#question4").html("<h3>" + questions[3].question + "</h3>");
  $("#answer4").html("<input type='radio' name='answer4' value='0'>" + "<label>" + questions[3].answerList[0] + "</label>"
    + "<input type='radio' name='answer4' value='1'>" + "<label>" + questions[3].answerList[1] + "</label>"
    + "<input type='radio' name='answer4' value='2'>" + "<label>" + questions[3].answerList[2] + "</label>"
    + "<input type='radio' name='answer4' value='3'>" + "<label>" + questions[3].answerList[3] + "</label><br><br>"
  );

  // # 5
  $("#question5").html("<h3>" + questions[4].question + "</h3>");
  $("#answer5").html("<input type='radio' name='answer5' value='0'>" + "<label>" + questions[4].answerList[0] + "</label>"
    + "<input type='radio' name='answer5' value='1'>" + "<label>" + questions[4].answerList[1] + "</label>"
    + "<input type='radio' name='answer5' value='2'>" + "<label>" + questions[4].answerList[2] + "</label>"
    + "<input type='radio' name='answer5' value='3'>" + "<label>" + questions[4].answerList[3] + "</label><br><br>"
  );
  // # 6
  $("#question6").html("<h3>" + questions[5].question + "</h3>");
  $("#answer6").html("<input type='radio' name='answer6' value='0'>" + "<label>" + questions[5].answerList[0] + "</label>"
    + "<input type='radio' name='answer6' value='1'>" + "<label>" + questions[5].answerList[1] + "</label>"
    + "<input type='radio' name='answer6' value='2'>" + "<label>" + questions[5].answerList[2] + "</label>"
    + "<input type='radio' name='answer6' value='3'>" + "<label>" + questions[5].answerList[3] + "</label><br><br>"
  );
  // # 7
  $("#question7").html("<h3>" + questions[6].question + "</h3>");
  $("#answer7").html("<input type='radio' name='answer7' value='0'>" + "<label>" + questions[6].answerList[0] + "</label>"
    + "<input type='radio' name='answer7' value='1'>" + "<label>" + questions[6].answerList[1] + "</label>"
    + "<input type='radio' name='answer7' value='2'>" + "<label>" + questions[6].answerList[2] + "</label>"
    + "<input type='radio' name='answer7' value='3'>" + "<label>" + questions[6].answerList[3] + "</label><br><br>"
  );

  // SUBMIT
  $("#submit").html("<button id='done' class='btn'>Done</button>");

  // SHOW SCORE AND RESULTS WHEN "DONE" IS CLICKED
  $("#done").on("click", function () {

    // SCORE TRACKER AND SHOW RESULTS
    keepingScore();
    displayResults();

  });
});

// COUNTDOWN
function run() {

  clearInterval(intervalId);
  intervalId = setInterval(decrement, 1000);
}


function decrement() {

  //  SINGLE INTERVAL
  number--;

  //  SHOW IN #TIME TAG
  $("#time").html("<h2>Time Remaining: " + number + " Seconds</h2>" + "<br>");

  if (number === 0) {

    // STOP TIMER
    stop();

    keepingScore();
    displayResults();

  }
}

function stop() {

  clearInterval(intervalId);
}

// RESULTS FUNCTION
function displayResults() {

  $("#time").hide();
  $("#question1").hide();
  $("#answer1").hide();
  $("#question2").hide();
  $("#answer2").hide();
  $("#question3").hide();
  $("#answer3").hide();
  $("#question4").hide();
  $("#answer4").hide();
  $("#question5").hide();
  $("#answer5").hide();
  $("#question6").hide();
  $("#answer6").hide();
  $("#question7").hide();
  $("#answer7").hide();
  $("#submit").hide();

  $("#resultsMessage").html("<h3>All Done!</h3>");
  $("#correct").html("Correct Answers: " + correctAnswers);
  $("#incorrect").html("Incorrect Answers: " + incorrectAnswers);
  $("#unanswered").html("Unanswered: " + unanswered);
}

// SCOREKEEPER
function keepingScore() {

  var userAnswer1 = $("input[name='answer1']:checked").val();
  var userAnswer2 = $("input[name='answer2']:checked").val();
  var userAnswer3 = $("input[name='answer3']:checked").val();
  var userAnswer4 = $("input[name='answer4']:checked").val();
  var userAnswer5 = $("input[name='answer5']:checked").val();
  var userAnswer6 = $("input[name='answer6']:checked").val();
  var userAnswer7 = $("input[name='answer7']:checked").val();

  // # 1
  if (userAnswer1 === undefined) {
    unanswered++;
  }
  else if (userAnswer1 == questions[0].answer) {
    correctAnswers++;
  }
  else {
    incorrectAnswers++;
  }

  // # 2
  if (userAnswer2 === undefined) {
    unanswered++;
  }
  else if (userAnswer2 == questions[1].answer) {
    correctAnswers++;
  }
  else {
    incorrectAnswers++;
  }

  // # 3
  if (userAnswer3 === undefined) {

    unanswered++;
  }
  else if (userAnswer3 == questions[2].answer) {
    correctAnswers++;
  }
  else {
    incorrectAnswers++;
  }

  // # 4
  if (userAnswer4 === undefined) {
    unanswered++;
  }
  else if (userAnswer4 == questions[3].answer) {
    correctAnswers++;
  }
  else {
    incorrectAnswers++;
  }

  // # 5
  if (userAnswer5 === undefined) {
    unanswered++;
  }
  else if (userAnswer5 == questions[4].answer) {
    correctAnswers++;
  }
  else {
    incorrectAnswers++;
  }

  // # 6
  if (userAnswer6 === undefined) {
    unanswered++;
  }
  else if (userAnswer6 == questions[5].answer) {
    correctAnswers++;
  }
  else {
    incorrectAnswers++;
  }

  // # 7
  if (userAnswer7 === undefined) {
    unanswered++;
  }
  else if (userAnswer7 == questions[6].answer) {
    correctAnswers++;
  }
  else {
    incorrectAnswers++;
  }
}