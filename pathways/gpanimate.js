function toggleDiv(divNum) {
    
    $("#close").hide();
    $(".slide").animate({right:'-200'},350);
    if($("#div"+divNum)) {
        
        $("#div"+divNum).animate({right:'0'},350,function(){$("#close").show();});
    }
}

$(document).ready(function(){
   $("#close").on("click",function(e){
      $(".slide").animate({right:'-200'},350);
      $(this).hide()
   })

})