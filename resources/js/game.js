import Tile from "./tile";
import words from "./words";

export default {
    guessesAllowed: 3,
    word: "dog",
    currentRowIndex: 0,
    state: "active",
    message: "",

    // 0) get currentGuess
    get currentGuess() {
        return this.currentRow.map((tile) => tile.letter).join(""); //We map over the current row and use join to remove the (,) from the array
    },

    // 1) Create the board dynamically.
    init() {
        this.board = Array.from({ length: this.guessesAllowed }, () => {
            return Array.from(
                { length: this.word.length },
                () => new Tile() // Create a new class with name "tile" and store the key that the user pressed into the class name tile.
            );
        });
    },

    // 2) onKeyPress

    // When the users presses a key or the enter key do something:
    onKeyPress(key) {
        this.message = ""; // On KeyPress we clear the message
        this.errors = false; // hide errors
        // Validation
        // The test() method returns true if it finds a match, otherwise false.
        // We test if the key that is pressed is a letter from start (^) A to ($) end z.
        if (/^[A-z]$/.test(key)) {
            this.fillTileBox(key);
        } else if (key == "Backspace") {
            // When the users presses Backspace
            this.emptyTileBox();
        } else if (key == "Enter") {
            // When the users presses enter run the submitGuess function
            this.submitGuess();
        }
    },

    // 3) fillTileBox
    fillTileBox(key) {
        for (let tile of this.currentRow) {
            if (!tile.letter) {
                tile.fill(key); //The key that was pressed was the letter that was pressed.
                break;
            }
        }
    },

    // 4) emptyTileBox
    emptyTileBox() {
        // Adding the currentRow into an array [...] and then reversing it.
        for (let tile of [...this.currentRow].reverse()) {
            if (tile.letter) {
                tile.empty();
                break;
            }
        }
    },

    // 5) get currentRow
    get currentRow() {
        return this.board[this.currentRowIndex];
    },

    // 6) submitGuess
    submitGuess() {
        let guess = this.currentGuess.toUpperCase();

        if (guess.length < this.word.length) {
            return;
        }
        if (!words.includes(this.guess)) {
            this.errors = true;
            this.message = "Invalid word";
        }
        for (let tile of this.currentRow) {
            if (this.word.includes(tile.letter)) {
                tile.status = "present";
            }
            if (!this.word.includes(tile.letter)) {
                tile.status = "absent";
            }
            if (guess == this.word) {
                tile.status = "correct";
            }
        }
        //If the word the user pressed is equal to word: "dog"
        if (guess == this.word) {
            this.message = "You Win!";
        } else if (this.guessesAllowed == this.currentRowIndex + 1) {
            this.message = "Game Over!";
            location.reload(); //Reload the page to start the game again
        } else {
            this.message = "Wrong answer!";
            this.currentRowIndex++; //Go to the next row
        }
    },
};
