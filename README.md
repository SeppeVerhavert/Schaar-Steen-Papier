#  Schaar-Steen-Papier

learn to generate random numbers and further knowledge on using if statements in JavaScript.  

##  What?

	- generate random

	- if statements

### Must-have features

- [x] Have three buttons that the player can press to change their pick
- [x] Have another button to let the computer pick one and show the winner
- [x] Let the player know they won (no alert box)
- [x] Have a reset button
  
## How?

### On button press for the player
``` javascript
function  showRock()  {
document.getElementById("iconArea").innerHTML  =  rock;
document.getElementById("computerIconArea").innerHTML  =  "  ";
document.getElementById("ResultTextArea").innerHTML  =  "  ";
}
``` 

### Random selector from array
``` javascript
function  showRandom()  {
let  computerChoice  = [
'<i class="fas fa-hand-rock fa-4x" aria-hidden="true"></i>',
'<i class="fas fa-hand-paper fa-4x" aria-hidden="true"></i>',
'<i class="fas fa-hand-scissors fa-4x" aria-hidden="true"></i>'
];
let  rand  =  computerChoice[Math.floor(Math.random() *  computerChoice.length)];
document.getElementById("computerIconArea").innerHTML  =  rand;
}
``` 
### On button press for the computer

``` javascript
function  compareFields()  {
if (playerResult  ===  "<i class=\"fas fa-hand-rock fa-4x\" aria-hidden=\"true\"></i>"  
&&  computerResult  ===  "<i class=\"fas fa-hand-paper fa-4x\" aria-hidden=\"true\"></i>") {
document.getElementById("ResultTextArea").innerHTML  =  "YOU LOSE!"
} 
else  if (playerResult  ===  "<i class=\"fas fa-hand-rock fa-4x\" aria-hidden=\"true\"></i>"  
&&  computerResult  ===  "<i class=\"fas fa-hand-scissors fa-4x\" aria-hidden=\"true\"></i>") {
document.getElementById("ResultTextArea").innerHTML  =  "YOU WIN!"
}
```
## Pending things to do
	- Add a scoreboard
	- Function compareFields doesn't compute when player has not made a choice
## Live version
https://seppeverhavert.github.io/Schaar-Steen-Papier/

## Dependencies
	- Bootstrap 4
	- Font-Awesome
