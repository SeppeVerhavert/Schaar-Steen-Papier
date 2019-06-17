document.getElementById("rockBtn").addEventListener("click", showRock);
document.getElementById("paperBtn").addEventListener("click", showPaper);
document.getElementById("scissorsBtn").addEventListener("click", showScissors);

function showRock() {
    document.getElementById("iconArea").innerHTML = "<i class=\"fas fa-hand-rock fa-2x\"></i>";
}
function showPaper() {
    document.getElementById("iconArea").innerHTML = "<i class=\"fas fa-hand-paper fa-2x\"></i>";
}
function showScissors() {
    document.getElementById("iconArea").innerHTML = "<i class=\"fas fa-hand-scissors fa-2x\">";
}