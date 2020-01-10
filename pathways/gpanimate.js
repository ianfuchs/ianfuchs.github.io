function swapDiv(divNum) {

    var x = document.getElementById("div"+divNum);
    var y = (divNum)
    var TextElements = document.getElementsByClassName("slide");

    // console.log(y);
    // console.log(x.style.display);

    if (x.style.display === "block") {
        //find the current status of the selected block. hide if visible
        x.style.display = "none";
    } else {
        // If the current block wasn't visible hide all other blocks
        for (var i = 0, max = TextElements.length; i < max; i++) {
            TextElements[i].style.display = "none";
        }
        if (y == "8") {
            if (x.style.display === "block") {
                for (var i = 0, max = TextElements.length; i < max; i++) {
                    TextElements[i].style.display = "none";
                } else {
                    //find the current status of the selected block. hide if visible
                    // if the selected block was 8, make all sections appear
                    for (var i = 0, max = TextElements.length; i < max; i++) {
                        TextElements[i].style.display = "block";
                    }
                }
            } else {
                // display the selected block
                x.style.display = "block";
            }
        }
    }

