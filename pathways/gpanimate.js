function swapDiv(divNum) {
  
var TextElements = document.getElementsById("progDivs");

for (var i = 0, max = TextElements.length; i < max; i++) {
    TextElements[i].style.display = "none";
}
  var x = document.getElementByName("div"+divNum);
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
