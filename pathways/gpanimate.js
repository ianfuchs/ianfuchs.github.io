function toggleDiv(divNum) {
    
    $("#close").hide();
    $(".slide").animate({left:'-200'},350);
    if($("#div"+divNum)) {
        
        $("#div"+divNum).animate({left:'0'},350,function(){$("#close").show();});
    }
}

$(document).ready(function(){
   $("#close").on("click",function(e){
      $(".slide").animate({left:'-200'},350);
      $(this).hide()
   })

})

//https://stackoverflow.com/questions/43446745/onclick-changing-content-on-div