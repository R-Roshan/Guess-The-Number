'use strict';

const secretNumber = Math.trunc(Math.random() * 20) + 1;

document.querySelector('.number').textContent = secretNumber;

let score = 20;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  console.log(guess);

  if (!guess) {
    document.querySelector('.message').textContent = '📛 No number';
  } else if (secretNumber === guess) {
    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    document.querySelector('.message').textContent = 'You are correct✊💦';
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '🥱Too High';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'Nikal Laude🤣🤣';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '🤬Too Low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'Nikal Laude🤣🤣';
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.highscore').textContent = score;
