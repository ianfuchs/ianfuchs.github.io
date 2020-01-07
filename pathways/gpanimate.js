function swapDiv(divNum) {
  
  var y = document.querySelectorAll('[id*=div]')
  	y.style.display = "none";
  var x = document.getElementById("div"+divNum);
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}


// THIS WAS AN OLD IDEA THAT DIDN'T WORK
//
// function toggleDiv(divNum) {
//     
//     $("#close").hide();
//     $(".slide").animate({right:'-200'},350);
//     if($("#div"+divNum)) {
//         
//         $("#div"+divNum).animate({right:'0'},350,function(){$("#close").show();});
//     }
// }
// 
// $(document).ready(function(){
//    $("#close").on("click",function(e){
//       $(".slide").animate({right:'-200'},350);
//       $(this).hide()
//    })
// 
// })

//https://stackoverflow.com/questions/43446745/onclick-changing-content-on-div