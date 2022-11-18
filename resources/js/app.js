require("./bootstrap");

//defer. This Boolean attribute is set to indicate to a browser that the script is meant to be executed after the document has been parsed, but before firing DOMContentLoaded. <script src="/css/app.js" defer></script>

let grid = document.querySelector("#game");

// The number of guesses (3)
// The length of the word (3)

// Genarate 3 rows

// Create a DOM structure outside of the webpage and only when it is ready insert it into the DOM (createDocumentFragment)
let fragment = document.createDocumentFragment();

// Create 3 divs
Array.from({ length: 3 }).forEach((item) => {
    let row = document.createElement("div");

    // Create a class named row
    row.classList.add("row");

    Array.from({ length: 3 }).forEach((item) => {
        // Create 3 divs
        let tile = document.createElement("div");
        // Create a class tile
        tile.classList.add("tile");
        // Add the 3 divs with class name tiles inside the 3 divs with class name row
        row.appendChild(tile);
    });

    // Add the class row to the 3 divs
    fragment.appendChild(row);
});

// Add the fragment to the #game
grid.appendChild(fragment);