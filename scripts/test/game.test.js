/**
 * @jest-environment jsdom
 */

const {game} = require("../game");

beforeAll(() => {
    let fs = require("fs");
    let fileContents = fs.readFileSync("index.html", "utf-8");
    document.open();
    document.write(fileContents);
    document.close();
});

describe("game object contains correct keys", () => {
    test("score key exist", () => {
        expect("score" in game).toBe(true);
    });
    test("Current game key exist", () => {
        expect("currentGame" in game).toBe(true);
    });

});