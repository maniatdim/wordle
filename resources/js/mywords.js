export default {
    name: "Word List",
    list: ["Cat", "foo", "bad"],
    current: "",
    count: 0,

    add() {
        this.list.push(this.current);
    },
    remove(item) {
        this.list.splice(this.list.indexOf(item), 1);
    },
};
