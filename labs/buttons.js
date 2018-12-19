//button 1
var button1 = document.createElement("button");
button1.innerHTML = "Button 1";
button1.id = "button1";

var div = document.getElementsByTagName("div")[0];
div.appendChild(button1);

button1.addEventListener ("click", function() {
  document.body.style.backgroundColor = "#017E06";
});


//button 2
var button2 = document.createElement("button");
button2.innerHTML = "Button 2";
button2.id = "button2";

var div = document.getElementsByTagName("div")[0];
div.appendChild(button2);

button2.addEventListener ("click", function() {
  document.body.style.backgroundColor = "#FB0500";
});


//button 3
var button3 = document.createElement("button");
button3.innerHTML = "Button 3";
button3.id = "button3";

var div = document.getElementsByTagName("div")[0];
div.appendChild(button3);

button3.addEventListener ("click", function() {
  document.body.style.backgroundColor = "#0101F9";
});
