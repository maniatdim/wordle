export default class Tile {
    letter = ""; // Letter the user pressed
    status = ""; // Correct, present, absent

    lowerCaseLetter(key) {
        this.letter = key.toLowerCase(); // Set the input letter to lowecase.
        //We can do this also with css text-transform: lowercase;
    }
    empty() {
        this.letter = "";
    }
}
