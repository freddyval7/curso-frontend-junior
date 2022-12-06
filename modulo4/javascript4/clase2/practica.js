let url1 = "https://rickandmortyapi.com/api/character"
let url2 = "https://rickandmortyapi.com/api/character/"

$("#btnMostrarAll").click(function(){
    $.ajax({
        url: url1,
        type: "GET",
        dataType: "json",
        success: function(respuesta){
            console.log(respuesta)
            console.log("bien")
            mostrarListaAll(respuesta);
        },
        error: function(error){
            console.log(error)
        }
    })
})

$("#btnMostrarPersonaje").click(function(){
    $.ajax({
        url: url2+$("#personaje").val(),
        type: "GET",
        dataType: "json",
        success: function(respuesta){
            console.log(respuesta)
            console.log("bien")
            mostrarPersonaje(respuesta);
        },
        error: function(error){
            console.log(error)
        }
    })
})

function mostrarPersonaje(respuesta){
    $("#lista").empty()
    $("#lista").show()
    $("#lista").append(`<li>${respuesta.name}</li>`)
    $("#lista").append("<li><img width='100px' height='100px' src='"+respuesta.image+"' /></li>")
}

function mostrarListaAll(respuesta){
    $("#lista").empty()
    $("#lista").show()
    for(i=0;i<respuesta.results.length;i++){
        $("#lista").append(`<li>${respuesta.results[i].name}</li>`)
        $("#lista").append("<li><img width='100px' height='100px' src='"+
        respuesta.results[i].image+"' /></li>")
    }
}