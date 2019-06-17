document.getElementById("rockBtn").addEventListener("click", showRock);
document.getElementById("paperBtn").addEventListener("click", showPaper);
document.getElementById("scissorsBtn").addEventListener("click", showScissors);
document.getElementById("ComputerBtn").addEventListener("click", showRandom);
document.getElementById("resetBtn").addEventListener("click", resetFields);

var rock = "<i class=\"fas fa-hand-rock fa-4x\"></i>";
var paper = "<i class=\"fas fa-hand-paper fa-4x\"></i>";
var scissors = "<i class=\"fas fa-hand-scissors fa-4x\">";

var computerChoise = [
    '<i class="fas fa-hand-rock fa-4x"></i>',
    '<i class="fas fa-hand-paper fa-4x"></i>',
    '<i class="fas fa-hand-scissors fa-4x">'
];

var rand = computerChoise[Math.floor(Math.random() * computerChoise.length)];

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
    document.getElementById("computerIconArea").innerHTML = rand;
    compareFields();
}

function resetFields() {
    console.log("yay");
    document.getElementById("iconArea").innerHTML = " ";
    document.getElementById("computerIconArea").innerHTML = " ";
}

function compareFields() {
    if (rand === rock || rand === paper || rand === scissors){
        console.log("draw")
    }
}