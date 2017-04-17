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

function displayCurrentPlayer() {
    if (currentPlayer = "x") {
        return "x";
    }
    if (currentPlayer = "o") {
        return "o";
    }
}

function gameResult() {
    if ("output1" === "x" && "output2" === "x" && "output3" === "x") {
        return "X wins!";
    }
    if ("output1" === "x" && "output4" === "x" && "output7" === "x") {
        return "X wins!";
    }
    if ("output1" === "x" && "output5" === "x" && "output9" === "x") {
        return "X wins!";
    }
    if ("output2" === "x" && "output5" === "x" && "output8" === "x") {
        return "X wins!";
    }
    if ("output3" === "x" && "output6" === "x" && "output9" === "x") {
        return "X wins!";
    }
    if ("output3" === "x" && "output5" === "x" && "output7" === "x") {
        return "X wins!";
    }
    if ("output4" === "x" && "output5" === "x" && "output6" === "x") {
        return "X wins!";
    }
    if ("output7" === "x" && "output8" === "x" && "output9" === "x") {
        return "X wins!";
    }

        if ("output1" === "o" && "output2" === "o" && "output3" === "o") {
        return "O wins!";
    }
    if ("output1" === "o" && "output4" === "o" && "output7" === "o") {
        return "O wins!";
    }
    if ("output1" === "o" && "output5" === "o" && "output9" === "o") {
        return "O wins!";
    }
    if ("output2" === "o" && "output5" === "o" && "output8" === "o") {
        return "O wins!";
    }
    if ("output3" === "o" && "output6" === "o" && "output9" === "o") {
        return "O wins!";
    }
    if ("output3" === "o" && "output5" === "o" && "output7" === "o") {
        return "O wins!";
    }
    if ("output4" === "o" && "output5" === "o" && "output6" === "o") {
        return "O wins!";

    if ("output7" === "o" && "output8" === "o" && "output9" === "o") {
        return "O wins!";
    }
    else {
        return "Draw";
    }



}
