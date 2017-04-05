QUnit.test("Test the rollDice function.", function (assert) {
    var result = rollDice()
    assert.deepEqual(result), "We expect result to be a number between 1 and 30.");
});
