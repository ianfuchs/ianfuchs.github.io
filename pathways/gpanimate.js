function swapDiv(divNum) {
  
var x = document.getElementById("div"+divNum);
var TextElements = document.getElementsByClassName("slide");


for (var i = 0, max = TextElements.length; i < max; i++) {
    TextElements[i].style.display = "none";
}
  if (x === "div8") {
    for (var i = 0, max = TextElements.length; i < max; i++) {
    	TextElements[i].style.display = "block";
	}
  } else {
    x.style.display = "block";
  }
}

