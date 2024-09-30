const words = ["javascript", "programacao", "desenvolvedor", "computador"];
let chosenWord = words[Math.floor(Math.random() * words.length)];
let guessedLetters = [];
let attempts = 6;

function displayWord() {
    const wordDisplay = chosenWord.split('').map(letter => guessedLetters.includes(letter) ? letter : '_').join(' ');
    document.getElementById('word').innerText = wordDisplay;
}

function guessLetter() {
    const input = document.getElementById('letterInput');
    const letter = input.value.toLowerCase();
    input.value = '';

    if (letter && !guessedLetters.includes(letter)) {
        guessedLetters.push(letter);
        if (!chosenWord.includes(letter)) attempts--;
    }

    displayWord();
    document.getElementById('hangman').innerText = 'Attempts left: ' + attempts;

    if (attempts <= 0) {
        document.getElementById('message').innerText = 'Você perdeu! A palavra era: ' + chosenWord;
    } else if (chosenWord.split('').every(letter => guessedLetters.includes(letter))) {
        document.getElementById('message').innerText = 'Você ganhou!';
    }
}

displayWord();