let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

const guessButton = document.getElementById('guessButton');
const guessInput = document.getElementById('guessInput');
const resultDisplay = document.getElementById('result');
const attemptsDisplay = document.getElementById('attempts');

function checkGuess() {
    const userGuess = parseInt(guessInput.value);
    attempts++;

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        resultDisplay.textContent = 'Por favor, ingresa un número válido entre 1 y 100.';
        resultDisplay.style.color = 'red';
    } else if (userGuess < randomNumber) {
        resultDisplay.textContent = '¡El número es mayor! Intenta de nuevo.';
        resultDisplay.style.color = 'orange';
    } else if (userGuess > randomNumber) {
        resultDisplay.textContent = '¡El número es menor! Intenta de nuevo.';
        resultDisplay.style.color = 'orange';
    } else {
        resultDisplay.textContent = `¡Felicidades! Adivinaste el número ${randomNumber} en ${attempts} intentos.`;
        resultDisplay.style.color = 'green';
    }

    attemptsDisplay.textContent = `Intentos: ${attempts}`;
}

guessButton.addEventListener('click', checkGuess);

let docTit1e = document.title; 
window.addEventListener("blur", function() {
    document.title = "¡No te pierdas el número! 👀";
});
window.addEventListener("focus", function() {
    document.title = docTit1e;
});
