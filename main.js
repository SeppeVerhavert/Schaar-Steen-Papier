document.getElementById("rockBtn").addEventListener("click", showRock);
document.getElementById("paperBtn").addEventListener("click", showPaper);
document.getElementById("scissorsBtn").addEventListener("click", showScissors);

document.getElementById("ComputerBtn").addEventListener("click", showRandom);

function showRock() {
    document.getElementById("iconArea").innerHTML = "<i class=\"fas fa-hand-rock fa-4x\"></i>";
}
function showPaper() {
    document.getElementById("iconArea").innerHTML = "<i class=\"fas fa-hand-paper fa-4x\"></i>";
}
function showScissors() {
    document.getElementById("iconArea").innerHTML = "<i class=\"fas fa-hand-scissors fa-4x\">";
}

function showRandom() {
    var computerChoise = [
        '<i class="fas fa-hand-rock fa-4x"></i>',
        '<i class="fas fa-hand-paper fa-4x"></i>',
        '<i class="fas fa-hand-scissors fa-4x">'
    ];

    var rand = computerChoise[Math.floor(Math.random() * computerChoise.length)];

    document.getElementById("computerIconArea").innerHTML = rand;
}