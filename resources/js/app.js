import game from "./game";
//import mywords from "./mywords";

document.addEventListener("alpine:init", () => {
    Alpine.data("game", () => game);
    //Alpine.data("mywords", () => mywords);
});
