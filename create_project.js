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
var one = "";
var two = "";
var three = "";
var four = "";
var five = "";
var six = "";
var seven = "";
var two = "";
var two = "";
var two = "";


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
        if (outputId == "output1") {
            board.one = "x";
        } if (outputId == "output2") {
            board.two = "x";
        } if (outputId == "output3") {
            board.three = "x";
        } if (outputId == "output4") {
            board.four = "x";
        } if (outputId == "output5") {
            board.five = "x";
        } if (outputId == "output6") {
            board.six = "x";
        } if (outputId == "output7") {
            board.seven = "x";
        } if (outputId == "output8") {
            board.eight = "x";
        } if (outputId == "output9") {
            board.nine = "x";
        }
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

function displayCurrenttPlayer(outputId2) {
    currentPlayer = currentPlayer;
    var outputText2 = "";
    if (currentPlayer = "x") {
        outputText2 = "x";
    }
    else if (currentPlayer = "o") {
        outputText2 = "o";
    }
    document.getElementById(outputId2).innerHTML = outputText2;
}

function gameResult(outputId3) {
    var outputText3 = "";
    if (board.one === "x" && board.two === "x" && board.three === "x") {
        outputText3 = "X wins!";
    }
    else if (board.one === "x" && board.four === "x" && board.seven === "x") {
        outputText3 = "X wins!";
    }
    else if (board.one === "x" && board.five === "x" && board.nine === "x") {
        outputText3 = "X wins!";
    }
    else if (board.two === "x" && board.five === "x" && board.eight === "x") {
        outputText3 = "X wins!";
    }
    else if (board.three === "x" && board.six === "x" && board.nine === "x") {
        outputText3 = "X wins!";
    }
    else if (board.three === "x" && board.five === "x" && board.seven === "x") {
        outputText3 = "X wins!";
    }
    else if (board.four === "x" && board.five === "x" && board.six === "x") {
        outputText3 = "X wins!";
    }
    else if (board.seven === "x" && board.eight === "x" && board.nine === "x") {
        outputText3 = "X wins!";
    }

    else if (board.one === "o" && board.two === "o" && board.three === "o") {
        outputText3 = "O wins!";
    }
    else if (board.one === "o" && board.four === "o" && board.seven === "o") {
        outputText3 = "O wins!";
    }
    else if (board.one === "o" && board.five === "o" && board.nine === "o") {
        outputText3 = "O wins!";
    }
    else if (board.two === "o" && board.five === "o" && board.eight === "o") {
        outputText3 = "O wins!";
    }
    else if (board.three === "o" && board.six === "o" && board.nine === "o") {
        outputText3 = "O wins!";
    }
    else if (board.three === "o" && board.five === "o" && board.seven === "o") {
        outputText3 = "O wins!";
    }
    else if (board.four === "o" && board.five === "o" && board.six === "o") {
        outputText3 = "O wins!";
    }
    else if (board.seven === "o" && board.eight === "o" && board.nine === "o") {
        outputText3 = "O wins!";
    }
        document.getElementById(outputId3).innerHTML = outputText3;

}
