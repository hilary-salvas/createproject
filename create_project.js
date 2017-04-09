var board = {
    one: "",
    two: "",
    three: "",
    four: "",
    five: "",
    six: "",
    seven: "",
    eight: "",
    nine: ""
};


function mark(outputId) {
    var outputText = "";
    if (true == true) {
        outputText = "X";
        changeElementClass(outputId, "X");
    }
    document.getElementById(outputId).innerHTML = outputText;
}

function changeElementClass(id, className) {
    var el = document.getElementById(id);
    el.className = className;
}

/**
 * Represents a player
 * @constructor
 */
function Player(){
    this.choice = null;
}

//creates player objects. player1 is x and player2 is o
var player1x = new Player();
var player2o = new Player();

/**
 * Stores the player2's choice
 * @param {number} choice 0,1,2 for rock, paper, scissors
 */
function storePlayerChoice(choice) {
    player1x.choice = choice;
    console.log("My choice = " + player.choice);
}

/**
 * Stores the player1's choice
 * @param {number} choice box 0-8 for rock, paper, scissors
 */
function storePlayerChoice(choice) {
    player2o.choice = choice;
    console.log("My choice = " + player.choice);
}
