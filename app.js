// Iteration 1: Making the play button in the index.html functional.

document.addEventListener('DOMContentLoaded', function () {
    const playButton = document.getElementById('play-button');

   
    playButton.addEventListener('click', function () {
        window.location.href = 'game.html';
    });
});