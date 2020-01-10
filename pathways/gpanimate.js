function swapDiv(divNum) {

    var x = document.getElementById("div"+divNum);
    var y = (divNum)
    var TextElements = document.getElementsByClassName("slide");

    console.log(y);
    console.log(x.style.display);

    if (x.style.display === "block") {
        x.style.display = "none";
    } else {

        for (var i = 0, max = TextElements.length; i < max; i++) {
            TextElements[i].style.display = "none";
        }
        if (y == "8") {
            for (var i = 0, max = TextElements.length; i < max; i++) {
                TextElements[i].style.display = "block";
            }
        } else {
            x.style.display = "block";
        }
    }
}

