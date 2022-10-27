$(document).ready(()=>{
    n=0;
    $("#puntos").html(`Puntos: ${n}pts.`)

    $("table img").click(function(){
        $("#imgGrande span").empty();
        n++;
        $("#puntos").html(`Puntos: ${n}pts.`);
        let src = $(this).attr("src");
        $("#imgRandom").attr("src",`${src}`);
        $("table img").removeClass("seleccionada");
        $(this).addClass("seleccionada");
        $("#imgGrande span").text(`${$(this).attr("title")}`);
        $("#imgGrande img").attr("src",`${src}`);
        $("#imgGrande img").show();
        $("#titulo").show();
        $("#lista").append(`<li>${$(this).attr("title")}</li>`);
        $("#lista li").css("color","salmon")
    })

    $("#btnReiniciar").click(()=>{
        n=0;
        $("table img").removeClass("seleccionada");
        $("#puntos").html("Puntos: 0pts.");
        $("#imgGrande>span").empty();
        $("#imgGrande img").hide();
        $("#titulo").hide();
        $("#lista").empty();
    })
})