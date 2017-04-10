//this does nothing rn
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

var currentPlayer = "x";

function changePlayer() {
    if (currentPlayer == "x") {
        currentPlayer = "o";
    } else if (currentPlayer == "o") {
        currentPlayer = "x";
    }
}

function mark(outputId) {
    var outputText = "";
    if (currentPlayer == "x") {
        outputText = "X";
        changeElementClass(outputId, "X");
    } else if (currentPlayer == "o") {
        outputText = "O";
        changeElementClass(outputId, "O");
    }
    document.getElementById(outputId).innerHTML = outputText;
    changePlayer();
}

function changeElementClass(id, className) {
    var el = document.getElementById(id);
    el.className = className;
}



