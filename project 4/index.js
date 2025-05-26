const minnum = 1;
const maxnum = 100;
const answer = Math.floor(Math.random() * (maxnum - minnum + 1)) + minnum;

let attempts = 0;
let running = true;

const guessinput = document.getElementById("guess");
const submitButton = document.getElementById("submitguess");
const messageElement = document.getElementById("message");
const attemptsElement = document.getElementById("attempts");

submitButton.onclick = function() {
    if (!running) return; 

    let guess = Number(guessinput.value); 

    if (isNaN(guess)) {
        messageElement.textContent = "Please enter a valid number.";
    } else if (guess < minnum || guess > maxnum) {
        messageElement.textContent = `Please enter a number between ${minnum} and ${maxnum}.`;
    } else {
        attempts++;
        if (guess < answer) {
            messageElement.textContent = "Too low! Try again.";
        } else if (guess > answer) {
            messageElement.textContent = "Too high! Try again.";
        } else {
            messageElement.textContent = `Correct! The answer was ${answer}.`;
            attemptsElement.textContent = `It took you ${attempts} attempts.`;
            running = false; 
        }
    }

    guessinput.value = ""; 
};
