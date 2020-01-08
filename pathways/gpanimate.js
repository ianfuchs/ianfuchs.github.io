function swapDiv(divNum) {
  
var TextElements = document.getElementsByName("progDivs");

for (var i = 0, max = TextElements.length; i < max; i++) {
    TextElements[i].style.display = "none";
}
  var x = document.getElementByID("div"+divNum);
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
