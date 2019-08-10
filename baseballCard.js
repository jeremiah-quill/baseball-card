function printName(message) {
    var outputDiv = document.getElementById("name);
    outputDiv.innerHTML = message;
}
function printPosition(message) {
    var outputDiv = document.getElementById("position");
    outputDiv.innerHTML = message;
}
function printTeam(message) {
    var outputDiv = document.getElementById("team");
    outputDiv.innerHTML = message;
}

function printColor() {
    if(color === "black" || color === "purple" || color === "blue") {
        document.getElementById("border-container").style.color = "white";
    };
    document.getElementById("border-container").style.backgroundColor = color;
}

function printPic() {
if (pic === "dog") {
    document.getElementById("card-container").style.background = "url('dog2.jpg') no-repeat center";
} else {
    document.getElementById("card-container").style.background = "url('cat.jpg') no-repeat center";
}
}

var name = prompt("Please choose a player name:");
var position = prompt("Please choose a player position:");
var team = prompt("Please choose a team name:");
var color = prompt("Please choose between yellow, red, blue, green, black, orange, or purple:");
var pic = prompt("Please choose dog or cat:");


printName(name);
printPosition(position);
printTeam(team);
printColor();
printPic()
