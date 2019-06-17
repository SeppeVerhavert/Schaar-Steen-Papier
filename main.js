document.getElementById("rockBtn").addEventListener("click", showRock);
document.getElementById("paperBtn").addEventListener("click", showPaper);
document.getElementById("scissorsBtn").addEventListener("click", showScissors);
document.getElementById("ComputerBtn").addEventListener("click", showRandom);
document.getElementById("resetBtn").addEventListener("click", resetFields);

var rock = '<i class=\"fas fa-hand-rock fa-4x\"></i>';
var paper = '<i class=\"fas fa-hand-paper fa-4x\"></i>';
var scissors = '<i class=\"fas fa-hand-scissors fa-4x\">';

var computerChoise = [
    '<i class="fas fa-hand-rock fa-4x" aria-hidden="true"></i>',
    '<i class="fas fa-hand-paper fa-4x" aria-hidden="true"></i>',
    '<i class="fas fa-hand-scissors fa-4x" aria-hidden="true"></i>'
];

function showRock() {
    document.getElementById("iconArea").innerHTML = rock;
    document.getElementById("computerIconArea").innerHTML = " ";
}
function showPaper() {
    document.getElementById("iconArea").innerHTML = paper;
    document.getElementById("computerIconArea").innerHTML = " ";
}
function showScissors() {
    document.getElementById("iconArea").innerHTML = scissors;
    document.getElementById("computerIconArea").innerHTML = " ";
}

function showRandom() {

    var rand = computerChoise[Math.floor(Math.random() * computerChoise.length)];

    document.getElementById("computerIconArea").innerHTML = rand;
    compareFields();
}

function resetFields() {
    document.getElementById("iconArea").innerHTML = " ";
    document.getElementById("computerIconArea").innerHTML = " ";
    document.getElementById("ResultTextArea").innerHTML = " "
}

function compareFields() {

    var playerResult = document.getElementById("iconArea").innerHTML;
    var computerResult = document.getElementById("computerIconArea").innerHTML;

    if (playerResult === computerResult) {
        document.getElementById("ResultTextArea").innerHTML = "DRAW"
    }
    
    if (playerResult === "<i class=\"fas fa-hand-rock fa-4x\" aria-hidden=\"true\"></i>" && computerResult === "<i class=\"fas fa-hand-paper fa-4x\" aria-hidden=\"true\"></i>") {
        document.getElementById("ResultTextArea").innerHTML = "YOU LOSE!"
    }

    if (playerResult === "<i class=\"fas fa-hand-rock fa-4x\" aria-hidden=\"true\"></i>" && computerResult === "<i class=\"fas fa-hand-scissors fa-4x\" aria-hidden=\"true\"></i>") {
        document.getElementById("ResultTextArea").innerHTML = "YOU WIN!"
    }

    if (playerResult === "<i class=\"fas fa-hand-paper fa-4x\" aria-hidden=\"true\"></i>" && computerResult === "<i class=\"fas fa-hand-scissors fa-4x\" aria-hidden=\"true\"></i>") {
        document.getElementById("ResultTextArea").innerHTML = "YOU LOSE!"
    }

    if (playerResult === "<i class=\"fas fa-hand-paper fa-4x\" aria-hidden=\"true\"></i>" && computerResult === "<i class=\"fas fa-hand-rock fa-4x\" aria-hidden=\"true\"></i>") {
        document.getElementById("ResultTextArea").innerHTML = "YOU WIN!"
    }

    if (playerResult === "<i class=\"fas fa-hand-scissors fa-4x\" aria-hidden=\"true\"></i>" && computerResult === "<i class=\"fas fa-hand-rock fa-4x\" aria-hidden=\"true\"></i>") {
        document.getElementById("ResultTextArea").innerHTML = "YOU LOSE!"
    }

    if (playerResult === "<i class=\"fas fa-hand-scissors fa-4x\" aria-hidden=\"true\"></i>" && computerResult === "<i class=\"fas fa-hand-paper fa-4x\" aria-hidden=\"true\"></i>") {
        document.getElementById("ResultTextArea").innerHTML = "YOU WIN!"
    }
}