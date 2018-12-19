var container = document.getElementById("container");
var body = document.getElementsByTagName("body")[0];
var colors = ["#ff0000","#b202e2","#0205e2","#000000",];
var count = {};
var amount = 30

for (var i = 1; i <=amount; i++) {6
    var button = document.createElement("button");
    button.innerHTML = i;
    button.id = "button" + i;
    count[button.id] = 0;
    container.appendChild(button);

    
	
}

function changeColor(event) {
    event.target.style.backgroundColor = colors[count[event.target.id]];
    count[event.target.id] = count[event.target.id] + 1;

    if (count[event.target.id] > colors.length){
        container.removeChild(event.target);
    }
}