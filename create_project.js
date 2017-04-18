
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

function mark(outputId) {
    var outputText = "";
    if (currentPlayer == "x") {
        outputText = "X";
        changeElementClass(outputId, "X");
        if (outputId == "output1") {
            board.one = "x";
        } else if (outputId == "output2") {
            board.two = "x";
        } else if (outputId == "output3") {
            board.three = "x";
        } else if (outputId == "output4") {
            board.four = "x";
        } else if (outputId == "output5") {
            board.five = "x";
        } else if (outputId == "output6") {
            board.six = "x";
        } else if (outputId == "output7") {
            board.seven = "x";
        } else if (outputId == "output8") {
            board.eight = "x";
        } else if (outputId == "output9") {
            board.nine = "x";
        }
    } else if (currentPlayer == "o") {
        outputText = "O";
        changeElementClass(outputId, "O");
        if (outputId == "output1") {
            board.one = "o";
        } else if (outputId == "output2") {
            board.two = "o";
        } else if (outputId == "output3") {
            board.three = "o";
        } else if (outputId == "output4") {
            board.four = "o";
        } else if (outputId == "output5") {
            board.five = "o";
        } else if (outputId == "output6") {
            board.six = "o";
        } else if (outputId == "output7") {
            board.seven = "o";
        } else if (outputId == "output8") {
            board.eight = "o";
        } else if (outputId == "output9") {
            board.nine = "o";
        }
    }
    document.getElementById(outputId).innerHTML = outputText;
    changePlayer();
}

function changeElementClass(id, className) {
    var el = document.getElementById(id);
    el.className = className;
}

function changePlayer() {
    if (currentPlayer == "x") {
        currentPlayer = "o";
    } else if (currentPlayer == "o") {
        currentPlayer = "x";
    }
}

function displayCurrentPlayer(outputId2) {
    var outputText2 = "";
    if (currentPlayer == "x") {
        outputText2 = "Current Player: X";
    }
    else if (currentPlayer == "o") {
        outputText2 = "Current Player: O";
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

function clearBoard() {
    document.getElementById('output1').innerHTML = "";
    document.getElementById('output2').innerHTML = "";
    document.getElementById('output3').innerHTML = "";
    document.getElementById('output4').innerHTML = "";
    document.getElementById('output5').innerHTML = "";
    document.getElementById('output6').innerHTML = "";
    document.getElementById('output7').innerHTML = "";
    document.getElementById('output8').innerHTML = "";
    document.getElementById('output9').innerHTML = "";
}


