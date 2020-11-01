// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and score

// Coding Quiz

// When the user clicks on the start button..
var sec = 1
$('#startButton').on('click', function () {
  //hides the welcome message..
  $('#welcomeScreen').hide()
  //and shows the quiz.
  $('#code-quiz').show()
  //Starts the timer
  var time = setInterval(timedQuiz, 1000)
  function timedQuiz() {
    document.getElementById('timeLeft').innerHTML = sec + 's'
    sec--
    //..if the user runs out of time
    if (sec < 0) {
      clearInterval(time)
      $('#code-quiz').hide()
      $('#userScore').text(userScore)
      $('#game-over').show()
    }
  }
})

//Code Quiz

//Test bank
var questionIndex = 0
var userScore = 0
var testBank = [
  {
    question: 'What is your name?',
    options: {
      optionA: 'Mark',
      optionB: 'Bob',
      optionC: 'Joe',
      optionD: 'Yo',
    },
    answer: 'A',
  },
  {
    question: 'What is your age?',
    options: {
      optionA: '1',
      optionB: '2',
      optionC: '3',
      optionD: '4',
    },
    answer: 'B',
  },
]

function printQuestion() {
  $('#code-quiz-question').text(testBank[questionIndex].question)
  $('#code-quiz-optionA').text(testBank[questionIndex].options.optionA)
  $('#code-quiz-optionB').text(testBank[questionIndex].options.optionB)
  $('#code-quiz-optionC').text(testBank[questionIndex].options.optionC)
  $('#code-quiz-optionD').text(testBank[questionIndex].options.optionD)
}

printQuestion()
var userInput = $('.code-quiz-options').on('click', function () {
  userInput = this.value
  if (userInput == testBank[0].answer) {
    alert('you got it right')
    questionIndex++
    userScore++
    printQuestion()
  } else {
    alert('Try again..but hurry!!! You are running out of time!!!')
    sec -= 20
    console.log(sec)
  }
})

//Submit score to scorestable
$('#postScore').on('click', function () {
  var test = $('#initials').val()
  var newScoreEntry = $('<li>').text(test + ' scored ' + userScore)
  console.log(newScoreEntry)
  $('#highScores').append(newScoreEntry)
  $('#game-over').hide()
  $('#scores-table').show()
})

$('#view-high-scores').on('click', function () {
  $('#welcomeScreen').hide()
  $('#code-quiz').hide()
  $('#scores-table').show()
})
