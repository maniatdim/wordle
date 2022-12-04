import Tile from "./tile";
import words from "./words";

export default {
    guessesAllowed: 3,
    word: "dog",
    currentRowIndex: 0,
    state: "active",
    message: "",
    errors: false,

    letters: [
        "QWERTYUIOP".split(""),
        "ASDFGHJKL".split(""),
        ["Enter", ..."ZXCVBNM".split(""), "Backspace"],
    ],

    // 1) get currentRow
    get currentRow() {
        return this.board[this.currentRowIndex];
    },

    // 2) get currentGuess
    get currentGuess() {
        return this.currentRow.map((tile) => tile.letter).join(""); //We map over the current row and use join to remove the (,) from the array
    },

    get remainingGuesses() {
        return this.guessesAllowed - this.currentRowIndex - 1;
    },

    // 3) Create the board dynamically.
    init() {
        this.board = Array.from({ length: this.guessesAllowed }, () => {
            return Array.from(
                { length: this.word.length },
                (item, index) => new Tile(index) // Create a new class with name "tile" and store the key that the user pressed into the class name tile.
            );
        });
    },

    matchingTileKey(key) {
        return this.board
            .flat()
            .filter((tile) => tile.status)
            .sort((t1, t2) => t2.status == "correct")
            .find((tile) => tile.letter == key.toLowerCase());
    },
    // 4) onKeyPress

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

    // 5) fillTileBox
    fillTileBox(key) {
        for (let tile of this.currentRow) {
            if (!tile.letter) {
                tile.fill(key); //The key that was pressed was the letter that was pressed.
                break;
            }
        }
    },

    // 6) emptyTileBox
    emptyTileBox() {
        // Adding the currentRow into an array [...] and then reversing it.
        for (let tile of [...this.currentRow].reverse()) {
            if (tile.letter) {
                tile.empty();
                break;
            }
        }
    },

    // 7) submitGuess
    submitGuess() {
        if (this.currentGuess.length < this.word.length) {
            return;
        }

        const mapWords = words.map((element) => {
            return element.toUpperCase();
        });

        if (!mapWords.includes(this.currentGuess)) {
            this.errors = true;
            this.currentRowIndex++;
            return (this.message = "Invalid word...");
        }

        Tile.updateStatusesForRow(this.currentRow, this.word);

        if (this.currentGuess == this.word) {
            this.state = "complete";

            return (this.message = "You Win!");
        }

        if (this.remainingGuesses == 0) {
            this.state = "complete";

            return (this.message = "Game Over. You Lose.");
        }
        this.currentRowIndex++;
    },
};
