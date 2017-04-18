var currentPlayer = "x";

QUnit.test("Test the changePlayer function.", function (assert) {
    changePlayer();
    assert.deepEqual(currentPlayer, "o", "Worked.");
    changePlayer();
    assert.deepEqual(currentPlayer, "x", "Worked.");
});
