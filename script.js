const css = document.querySelector("h3");
const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const body = document.getElementById("gradient");
const randomBtn = document.querySelector(".randomColor");

function setGrad() {
	body.style.background = "linear-gradient(to right, " 
	+ color1.value	+ ", "	+ color2.value + ")";
	css.textContent = body.style.background + ":";
	var text = document.createTextNode("Hex value color 1: " 
		+ color1.value + " Hex value color 2: " + color2.value);
	var node = document.createElement("P");
	node.appendChild(text);
	css.appendChild(node);
}

function setRandom() {
	for (i = 0; i < 1; i++) {
		var x=Math.round(0xffffff * Math.random()).toString(16);
		var y=(6-x.length);
		var z="000000";
		var z1 = z.substring(0,y);
		var randomColor1 = "#" + z1 + x;
	}
	var x=Math.round(0xffffff * Math.random()).toString(16);
	var y=(6-x.length);
	var z="000000";
	var z1 = z.substring(0,y);
	var randomColor2 = "#" + z1 + x;
	body.style.background = "linear-gradient(to right, "
	+ randomColor1 + ", " + randomColor2 + ")";
	color1.value = randomColor1;
	color2.value = randomColor2;
	css.textContent = body.style.background + ";";
	var text = document.createTextNode("Hex value color 1: " 
		+ randomColor1 + " Hex value color 2: " + randomColor2);
	var node = document.createElement("P");
	node.appendChild(text);
	css.appendChild(node);
}

color1.addEventListener("input", setGrad);

color2.addEventListener("input", setGrad);

randomBtn.addEventListener("click", setRandom);