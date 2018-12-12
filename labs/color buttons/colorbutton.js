for(i=1; i<=30; i++) {
	var button = document.createElement("button");
	button.innerHTML = i;

	var div = document.getElementsByTagName("div")[0];
	div.appendChild(button);

	button.addEventListener ("click", function() {
	  document.body.style.backgroundColor = "#017E06";
	});
	
	button.id = "button"+i;
	button5.onclick=go

	function go() {
		document.getElementById("button5").style.background.color = black;
	}
}