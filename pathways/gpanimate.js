function swapDiv(divNum) {

    var x = document.getElementById("div"+divNum);
    var y = (divNum)
    var TextElements = document.getElementsByClassName("slide");

    // console.log(y);
    // console.log(x.style.display);

    if (x.style.display === "block") {
        if (y == "8") {
            // if the selected block was 8, make all sections disappear
            for (var i = 0, max = TextElements.length; i < max; i++) {
                TextElements[i].style.display = "none";
                }
            } else {
                x.style.display = "none"; // hide the single visible block
        	}
        } else {
            // If the current block wasn't visible hide all other blocks
            for (var i = 0, max = TextElements.length; i < max; i++) {
                TextElements[i].style.display = "none";
            }
            if (y == "8") {
                // if the selected block was 8, make all sections appear
                for (var i = 0, max = TextElements.length; i < max; i++) {
                    TextElements[i].style.display = "block";
                }
            } else {
                // display the selected block
                x.style.display = "block";
            }
        }
}

	// Parse the URL parameter
	function getParameterByName(name, url) {
	    if (!url) url = window.location.href;
	    name = name.replace(/[\[\]]/g, "\\$&");
	    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
	        results = regex.exec(url);
	    if (!results) return null;
	    if (!results[2]) return '';
	    return decodeURIComponent(results[2].replace(/\+/g, " "));
	}
	// Give the parameter a variable name
	var dynamicContent = getParameterByName('dc');
 
	 $(document).ready(function() {
 
		// Check if the URL parameter is art
		if (dynamicContent == 'art') {
			$('#div1').show();
		} 
		// Check if the URL parameter is bus
		else if (dynamicContent == 'bus') {
			$('#div2').show();
		} 
		// Check if the URL parameter is bananas
		else if (dynamicContent == 'cul') {
			$('#div3').show();
		} 
				// Check if the URL parameter is bananas
		else if (dynamicContent == 'health') {
			$('#div4').show();
		} 
				// Check if the URL parameter is bananas
		else if (dynamicContent == 'hum') {
			$('#div5').show();
		} 
				// Check if the URL parameter is bananas
		else if (dynamicContent == 'tech') {
			$('#div6').show();
		} 
				// Check if the URL parameter is bananas
		else if (dynamicContent == 'sci') {
			$('#div7').show();
		} 
		// Check if the URL parmeter is empty or not defined, display default content
		else {
			$('#default-content').show();
		}
	});
</script>

