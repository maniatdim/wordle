import Tile from "./tile";

export default {
    guessesAllowed: 3,
    word: "dog",
    currentRowIndex: 0,
    message: "",

    get currentGuess() {
        return this.currentRow.map((tile) => tile.letter).join(""); //We map over the current row and use join to remove the (,) from the array
    },

    // Create the board dynamically.
    init() {
        this.board = Array.from({ length: this.guessesAllowed }, () => {
            return Array.from(
                { length: this.word.length },
                () => new Tile() // Create a new class with name "tile" and store the key that the user pressed into the class name tile.
            );
        });
    },

    // When the users presses a key or the enter key do something:
    onKeyPress(key) {
        this.message = ""; // On KeyPress we clear the message
        // Validation
        // The test() method returns true if it finds a match, otherwise false.
        // We test if the key that is pressed is a letter from start (^) A to ($) end z.
        if (/^[A-z]$/.test(key)) {
            this.fillTileBox(key);
        } else if (key == "Backspace") {
            // When the users presses Backspace
            this.emptyTileBox();
        } else if (key == "Enter") {
            // When the users presses enter  run the submitGuess function
            this.submitGuess();
        }
    },

    fillTileBox(key) {
        for (let tile of this.currentRow) {
            if (!tile.letter) {
                tile.fill(key); //The key that was pressed was the letter that was pressed.
                break;
            }
        }
    },

    emptyTileBox() {
        // Adding the currentRow into an array [...] and then reversing it.
        for (let tile of [...this.currentRow].reverse()) {
            if (tile.letter) {
                tile.empty();
                break;
            }
        }
    },

    get currentRow() {
        return this.board[this.currentRowIndex];
    },

    submitGuess() {
        let guess = this.currentGuess;

        if (guess.length < this.word.length) {
            return;
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
        // If the word the user pressed is equal to word: "dog"
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
