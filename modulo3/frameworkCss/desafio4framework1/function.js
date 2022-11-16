$(".a-center").click(function(){
    $(".a-center").removeClass("seleccionada");
    $(this).addClass("seleccionada");
})

//Haciendo que el carousel con múltiples items funcione

var carouselWidth = $(".carousel-inner")[0].scrollWidth;
var cardWidth = $(".carousel-item").width();

var scrollPosition = 0;
$(".carousel-control-next").on("click", function(){
    if(scrollPosition < (carouselWidth - (cardWidth * 6))){
        scrollPosition += cardWidth;
        $(".carousel-inner").animate({scrollLeft: scrollPosition},600)
    }
});
$(".carousel-control-prev").on("click", function(){
    if(scrollPosition > 0){
        scrollPosition -= cardWidth;
        $(".carousel-inner").animate({scrollLeft: scrollPosition},600)
    }
})

