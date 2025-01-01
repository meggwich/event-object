// Повышенный уровень сложности 

class Game {
    constructor() {
        this.currentSymbol = document.querySelector('.symbol');
        this.winsElement = document.querySelector('.status__wins');
        this.lossElement = document.querySelector('.status__loss');
        this.timerElement = document.querySelector('.status__timer');
        this.wins = 0;
        this.losses = 0;
        this.timer = null;
        this.registerEvents();
        this.resetWord();
    }

    registerEvents() {
        document.addEventListener('keydown', (event) => {
            const inputChar = event.key.toLowerCase();
            const currentChar = this.currentSymbol.textContent.toLowerCase();

            if (inputChar === currentChar) {
                this.success();
            } else {
                this.fail();
            }
        });
    }

    success() {
        this.currentSymbol.classList.add('symbol_correct');
        this.currentSymbol = this.currentSymbol.nextElementSibling;
        if (!this.currentSymbol) {
            this.wins++;
            this.winsElement.textContent = this.wins;
            if (this.wins === 10) {
                alert('Вы победили!');
                this.resetGame();
            } else {
                this.resetWord();
            }
        }
    }

    fail() {
        this.losses++;
        this.lossElement.textContent = this.losses;
        if (this.losses === 3) {
            alert('Игра окончена. Вы проиграли.');
            this.resetGame();
        } else {
            this.resetWord();
        }
    }

    resetWord() {
        const word = document.querySelector('.word');
        word.innerHTML = '';
        const newWord = this.getNewWord(); 
        for (const char of newWord) {
            const span = document.createElement('span');
            span.classList.add('symbol');
            span.textContent = char;
            word.appendChild(span);
        }
        this.currentSymbol = document.querySelector('.symbol');
        this.startTimer(newWord.length);
    }

    getNewWord() {
        const words = ['javascript', 'html', 'css', 'python', 'fortran', 'xml', 'php']; 
        return words[Math.floor(Math.random() * words.length)];
    }

    resetGame() {
        this.wins = 0;
        this.losses = 0;
        this.winsElement.textContent = this.wins;
        this.lossElement.textContent = this.losses;
        this.resetWord();
    }

    startTimer(seconds) {
        clearInterval(this.timer);
        this.timerElement.textContent = seconds;
        this.timer = setInterval(() => {
            seconds--;
            this.timerElement.textContent = seconds;
            if (seconds <= 0) {
                clearInterval(this.timer);
                this.fail();
            }
        }, 1000);
    }
}



// Повышенный уровень сложности #2



// class Game {
//     constructor() {
//         this.currentSymbol = document.querySelector('.symbol');
//         this.winsElement = document.querySelector('.status__wins');
//         this.lossElement = document.querySelector('.status__loss');
//         this.wins = 0;
//         this.losses = 0;
//         this.registerEvents();
//     }

//     registerEvents() {
//         document.addEventListener('keydown', (event) => {
//             const inputChar = event.key.toLowerCase();
//             const currentChar = this.currentSymbol.textContent.toLowerCase();

//             if (inputChar === currentChar) {
//                 this.success();
//             } else {
//                 this.fail();
//             }
//         });
//     }

//     success() {
//         this.currentSymbol.classList.add('symbol_correct');
//         this.currentSymbol = this.currentSymbol.nextElementSibling;
//         if (!this.currentSymbol) {
//             this.wins++;
//             this.winsElement.textContent = this.wins;
//             if (this.wins === 10) {
//                 alert('Вы победили!');
//                 this.resetGame();
//             } else {
//                 this.resetWord();
//             }
//         }
//     }

//     fail() {
//         this.losses++;
//         this.lossElement.textContent = this.losses;
//         if (this.losses === 3) {
//             alert('Игра окончена. Вы проиграли.');
//             this.resetGame();
//         } else {
//             this.resetWord();
//         }
//     }

//     resetWord() {
//         const word = document.querySelector('.word');
//         word.innerHTML = '';
//         const newWord = this.getNewWord(); 
//         for (const char of newWord) {
//             const span = document.createElement('span');
//             span.classList.add('symbol');
//             span.textContent = char;
//             word.appendChild(span);
//         }
//         this.currentSymbol = document.querySelector('.symbol');
//     }

//     getNewWord() {
//         const words = ['javascript', 'html', 'css', 'python', 'fortran', 'xml', 'php']; 
//         return words[Math.floor(Math.random() * words.length)];
//     }

//     resetGame() {
//         this.wins = 0;
//         this.losses = 0;
//         this.winsElement.textContent = this.wins;
//         this.lossElement.textContent = this.losses;
//         this.resetWord();
//     }
// }



// Повышенный уровень сложности #3



// class Game {
//     constructor() {
//         this.currentSymbol = document.querySelector('.symbol');
//         this.winsElement = document.querySelector('.status__wins');
//         this.lossElement = document.querySelector('.status__loss');
//         this.timerElement = document.querySelector('.status__timer');
//         this.wins = 0;
//         this.losses = 0;
//         this.timer = null;
//         this.registerEvents();
//         this.resetWord();
//     }

//     registerEvents() {
//         document.addEventListener('keydown', (event) => {
//             if (event.key === 'Shift' || event.key === 'Alt') {
//                 return; // Игнорируем нажатия клавиш Shift и Alt
//             }

//             const inputChar = event.key;
//             const currentChar = this.currentSymbol.textContent;

//             if (this.normalizeChar(inputChar) === this.normalizeChar(currentChar)) {
//                 this.success();
//             } else {
//                 this.fail();
//             }
//         });
//     }

//     normalizeChar(char) {
//         return char.charCodeAt(0);
//     }

//     success() {
//         this.currentSymbol.classList.add('symbol_correct');
//         this.currentSymbol = this.currentSymbol.nextElementSibling;
//         if (!this.currentSymbol) {
//             this.wins++;
//             this.winsElement.textContent = this.wins;
//             if (this.wins === 10) {
//                 alert('Вы победили!');
//                 this.resetGame();
//             } else {
//                 this.resetWord();
//             }
//         }
//     }

//     fail() {
//         this.losses++;
//         this.lossElement.textContent = this.losses;
//         if (this.losses === 3) {
//             alert('Игра окончена. Вы проиграли.');
//             this.resetGame();
//         } else {
//             this.resetWord();
//         }
//     }

//     resetWord() {
//         const word = document.querySelector('.word');
//         word.innerHTML = '';
//         const newWord = this.getNewWord(); 
//         for (const char of newWord) {
//             const span = document.createElement('span');
//             span.classList.add('symbol');
//             span.textContent = char;
//             word.appendChild(span);
//         }
//         this.currentSymbol = document.querySelector('.symbol');
//         this.startTimer(newWord.length);
//     }

//     getNewWord() {
//         const words = ['я люблю kitkat'];
//         return words[Math.floor(Math.random() * words.length)];
//     }

//     resetGame() {
//         this.wins = 0;
//         this.losses = 0;
//         this.winsElement.textContent = this.wins;
//         this.lossElement.textContent = this.losses;
//         this.resetWord();
//     }

//     startTimer(seconds) {
//         clearInterval(this.timer);
//         this.timerElement.textContent = seconds;
//         this.timer = setInterval(() => {
//             seconds--;
//             this.timerElement.textContent = seconds;
//             if (seconds <= 0) {
//                 clearInterval(this.timer);
//                 this.fail();
//             }
//         }, 1000);
//     }
// }

const game = new Game();
