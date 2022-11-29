import Tile from "./tile";

export default {
    guessesAllowed: 3,
    wordLength: 3,
    currentRowIndex: 0,
    currentTileIndex: 0,
    init() {
        this.board = Array.from({ length: this.guessesAllowed }, () => {
            return Array.from(
                { length: this.wordLength },
                () => new Tile() // Create a new class with name "tile" and store the key that the user pressed into the class name tile.
            );
        });
    },
    onKeyPress(key) {
        // Validation
        // The test() method returns true if it finds a match, otherwise false.
        // We test if the key that is pressed is a letter from start (^) A to ($) end z.
        if (/^[A-z]$/.test(key)) {
            this.fillTileBox(key);
        } else if (key == "Enter") {
            this.submitGuess();
        }
    },

    fillTileBox(key) {
        // this.board[this.currentRowIndex][this.currentTileIndex] = key;
        // this.currentRow().forEach((tile) => {
        for (let tile of this.currentRow()) {
            if (tile.letter == "") {
                tile.lowerCaseLetter(key); //The key that was pressed was the letter that was pressed.
                break;
            }
        }
        // });
        if (this.currentTileIndex == this.wordLength - 1) {
            this.currentRowIndex++;
            this.currentTileIndex = 0;
        } else {
            this.currentTileIndex++;
        }
    },
    currentRow() {
        return this.board[this.currentRowIndex];
    },
};
