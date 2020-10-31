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

  var sec = 5
  var time = setInterval(myTimer, 1000)
  // and start a timer..
  function myTimer() {
    document.getElementById('timeLeft').innerHTML = sec + 's'
    sec--
    //..if the user runs out of time
    if (sec < 0) {
      clearInterval(time)
      alert('Game Over')
    }
  }
})
