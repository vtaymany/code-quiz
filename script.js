// -- Start test bank --
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
// -- End test bank --

// -- Begin functions --
// Prints question to DOM
function printQuestion() {
  $('#code-quiz-question').text(testBank[questionIndex].question)
  $('#code-quiz-optionA').text(testBank[questionIndex].options.optionA)
  $('#code-quiz-optionB').text(testBank[questionIndex].options.optionB)
  $('#code-quiz-optionC').text(testBank[questionIndex].options.optionC)
  $('#code-quiz-optionD').text(testBank[questionIndex].options.optionD)
}
// Quiz logic
function takeQuiz() {
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
}
// -- End functions --

// -- Begin Quiz --
var sec = 1
$('#startButton').on('click', function () {
  //hides the welcome message..
  $('#welcomeScreen').hide()
  //and shows the quiz.
  $('#code-quiz').show()
  takeQuiz()
  //Starts the timer
  var time = setInterval(timedQuiz, 1000)
  function timedQuiz() {
    document.getElementById('timeLeft').innerHTML = sec + 's'
    sec--
    //..if the user runs out of time
    if (sec < 0) {
      clearInterval(time)
      $('#timer').hide()
      $('#code-quiz').hide()
      $('#userScore').text(userScore)
      $('#game-over').show()
    }
  }
})
// -- End Quiz --

// -- Begin Scorestable --
//Submit score to scorestable
$('#postScore').on('click', function () {
  var test = $('#initials').val()
  var newScoreEntry = $('<li>').text(test + ' scored ' + userScore)
  $('#highScores').append(newScoreEntry)
  $('#game-over').hide()
  $('#scores-table').show()
})

$('#view-high-scores').on('click', function () {
  $('#welcomeScreen').hide()
  $('#code-quiz').hide()
  $('#scores-table').show()
})
// -- End Scorestable --
