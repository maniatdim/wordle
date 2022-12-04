export default class Tile {
    letter = ""; // Letter the user pressed
    status = ""; // Correct, present, absent

    constructor(position) {
        this.position = position;
    }

    static updateStatusesForRow(row, word) {
        for (let tile of row) {
            tile.updateStatus(word);
        }

        row.filter((tile) => tile.status == "present")
            .fliter((tile) =>
                row.some(
                    (t) => t.letter == tile.letter && t.status == "correct"
                )
            )
            .forEach((tile) => (tile.status = "absent"));
    }

    updateStatus(word) {
        if (!word.includes(this.letter)) {
            return (this.status = "absent");
        }
        if (this.letter == word[this.position]) {
            return (this.status = "correct");
        }
        this.status = "present";
    }

    fill(key) {
        this.letter = key.toUpperCase(); // Set the input letter to toUpperCase.
        //We can do this also with css text-transform: lowercase;
    }
    empty() {
        this.letter = "";
    }
}
