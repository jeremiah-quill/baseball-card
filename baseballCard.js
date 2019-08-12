var name = prompt("Please choose a player name:");
var position = prompt("Please choose a player position:");
var number = prompt("Please choose a number:");
var team = prompt("Please choose a team name:");
var color = prompt("Please choose between yellow, red, blue, green, black, orange, or purple:");
var pic = prompt("Please choose dog, cat, or monkey:");
var idKey = ['name', 'position', 'number', 'team'];
var inputKey = [name, position, number, team];

var toggle  = document.getElementById("toggle");
var content = document.getElementById("content");



function addPic() {
if (pic === "dog") {
    document.getElementById("card-container").style.background = "url('dog2.jpg') no-repeat center";
} else if (pic ==="cat"){
    document.getElementById("card-container").style.background = "url('cat.jpg') no-repeat center";
} else {
    document.getElementById("card-container").style.background = "url('monkey.jpg') no-repeat center";
    }
}
function addColor() {
    if(color === "black" || color === "purple" || color === "blue") {
        document.getElementById("border-container").style.color = "white";
    };
    document.getElementById("border-container").style.backgroundColor = color;
}
function addText() {
    for (i=0; i < idKey.length; i += 1) {
        var outputDiv=document.getElementById(idKey[i]);
        outputDiv.innerHTML = inputKey[i];
        }
}



addPic();
addColor();
addText();
toggle.addEventListener("click", function() {
  content.classList.toggle("show");
});

