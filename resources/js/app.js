// require("./bootstrap");

// //defer. This Boolean attribute is set to indicate to a browser that the script is meant to be executed after the document has been parsed, but before firing DOMContentLoaded. <script src="/css/app.js" defer></script>

// let grid = document.querySelector("#game");

// // The number of guesses (3)
// // The length of the word (3)

// // Genarate 3 rows

// // Create a DOM structure outside of the webpage and only when it is ready insert it into the DOM (createDocumentFragment)
// let fragment = document.createDocumentFragment();

// // Create 3 divs
// Array.from({ length: 3 }).forEach((item) => {
//     let row = document.createElement("div");

//     // Create a class named row
//     row.classList.add("row");

//     Array.from({ length: 3 }).forEach((item) => {
//         // Create 3 divs
//         let tile = document.createElement("div");
//         // Create a class tile
//         tile.classList.add("tile");
//         // Add the 3 divs with class name tiles inside the 3 divs with class name row
//         row.appendChild(tile);
//     });

//     // Add the class row to the 3 divs
//     fragment.appendChild(row);
// });

// // Add the fragment to the #game
// grid.appendChild(fragment);

// document.addEventListener("keyup", (event) => {
//     alert(event.key);
// });

document.addEventListener("alpine:init", () => {
    Alpine.data("game", () => {
        return {
            guessesAllowed: 3,
            wordLength: 3,
            currentRowIndex: 0,
            currentTileIndex: 0,
            init() {
                this.board = Array.from({ length: this.guessesAllowed }, () => {
                    return Array.from({ length: this.wordLength }, () => "");
                });
            },
            onKeyPress(key) {
                // Validation
                // The test() method returns true if it finds a match, otherwise false.
                // We test if the key that is pressed is a letter from start (^) A to ($) end z.
                if (/^[A-z]$/.test(key)) {
                    this.fillTileBox(key);
                }
            },
            fillTileBox(key) {
                this.board[this.currentRowIndex][this.currentTileIndex] = key;

                if (this.currentTileIndex == this.wordLength - 1) {
                    this.currentRowIndex++;
                    this.currentTileIndex = 0;
                } else {
                    this.currentTileIndex++;
                }
            },
        };
    });
});
