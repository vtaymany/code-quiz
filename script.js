// -- Start test bank --
var questionIndex = 0
var userScore = 0
var testBank = [
  {
    question: 'Which of the following is a data type in Javascript?',
    options: {
      optionA: 'Boo',
      optionB: 'BooBoo',
      optionC: 'Boolean',
      optionD: 'Leanboo',
    },
    answer: 'C',
  },
  {
    question: 'Which of the following is an operator in Javascript? ?',
    options: {
      optionA: '$',
      optionB: '*',
      optionC: '#',
      optionD: '@',
    },
    answer: 'B',
  },
  {
    question: 'Which of the following is a selector in Javascript? ?',
    options: {
      optionA: '$',
      optionB: '*',
      optionC: '+',
      optionD: '/',
    },
    answer: 'A',
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
  $('#submission-result').text('')
}
// Quiz logic
function takeQuiz() {
  printQuestion()
  var userInput = $('.code-quiz-options').on('click', function () {
    userInput = this.value
    if (userInput == testBank[questionIndex].answer) {
      $('#submission-result').text('Congrats you made it!')
      questionIndex++
      userScore++
      if (questionIndex < testBank.length) {
        printQuestion()
      }
    } else {
      $('#submission-result').text(
        'Wrong..try again..but hurry!!! You are running out of time!!!'
      )
      sec -= 20
    }
  })
}
// -- End functions --

// -- Begin Quiz --]
var sec = 60
$('#startButton').on('click', function () {
  //Hides the welcome message..
  $('#welcomeScreen').hide()
  //and shows the quiz.
  $('#code-quiz').show()
  takeQuiz()
  //Starts the timer
  var time = setInterval(timer, 1000)
  function timer() {
    document.getElementById('timeLeft').innerHTML = sec + 's'
    sec--
    //..andif the user runs out of time
    if (sec < 0 || questionIndex == testBank.length) {
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
  $('#game-over').hide()
  $('#welcomeScreen').hide()
  $('#code-quiz').hide()
  $('#scores-table').show()
})
// -- End Scorestable --
