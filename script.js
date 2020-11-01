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
$('#startButton').on('click', function () {
  //hide the welcome message..
  $('.jumbotron').hide()
  //and show the quiz.
  $('#code-quiz').show()
  //Start the timer
  var sec = 5
  var time = setInterval(timedQuiz, 1000)
  function timedQuiz() {
    document.getElementById('timeLeft').innerHTML = sec + 's'
    sec--
    //..if the user runs out of time
    if (sec < 0) {
      clearInterval(time)
      alert('Game Over')
    }
  }
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

  console.log(testBank)
  //   $('#code-quiz-question').text(testBank.testQuestion.question)
  //   $('#code-quiz-optionA').text(testBank.testQuestion.options.optionA)
  //   $('#code-quiz-optionB').text(testBank.testQuestion.options.optionB)
  //   $('#code-quiz-optionC').text(testBank.testQuestion.options.optionC)
  //   $('#code-quiz-optionD').text(testBank.testQuestion.options.optionD)
})
