let endpoint1 = "https://holidayapi.com/v1/countries?pretty&key=96153a05-0c5f-4c71-a9d2-392dd69a2a0c";
var respuesta;

$(document).ready(function(){
    let ajax = new XMLHttpRequest;

    ajax.onreadystatechange = function(){
        if(this.readyState == 4){
            try {
                respuesta = JSON.parse(this.responseText);
                if(this.status==200){
                    console.log(respuesta)
                    console.log("bien")
                    console.log(respuesta.countries.length);
                    agregarPaises(respuesta);
                }
                else{
                    console.log(respuesta)
                    $("#mensaje").text("Ocurrió un error")
                }
            } catch (e) {
                console.log(e);
                console.log("Ocurrió un error al procesor los datos JSON")
            }
        }
    }

    ajax.open("GET",endpoint1);
    ajax.send();
})

$("#select").change(function(){
    $("#lista").empty();
    console.log(this.value)
    var y = this.value;
    if(y == "default"){
        $("#mensaje").text("Debes seleccionar un país")
        $("#mensaje").fadeIn("slow")
    }
    else{
        $("#mensaje").empty();
        $.ajax({
            url: `https://holidayapi.com/v1/holidays?pretty&key=96153a05-0c5f-4c71-a9d2-392dd69a2a0c&country=${y}&year=2021&language=es`,
            type:"GET",
            dataType: "JSON",
            success: function(respuesta){
                for(i=0;respuesta.holidays.length;i++)
                    $("#lista").append(`<li>${respuesta.holidays[i].name}, celebrado el: ${respuesta.holidays[i].date}</li>`)     
            },
            error: function(error){
                $("#mensaje").hide();
                console.log("error en funcion ajax")
                $("#mensaje").text("Ocurrió un error con la petición :(")
                $("#mensaje").fadeIn("slow")
                $("#reintentar").show();
                $("#lista").empty();
                console.log(error)
            }
        })
    }
})

$("#reintentar").click(function(){
    reintentar();
})

function reintentar(){
    ("#reintentar").hide;
    $.ajax({
        url: `https://holidayapi.com/v1/holidays?pretty&key=96153a05-0c5f-4c71-a9d2-392dd69a2a0c&country=${this.value}&year=2021&language=es`,
        type:"GET",
        dataType: "JSON",
        success: function(respuesta){
            for(i=0;respuesta.holidays.length;i++)
                $("#lista").append(`<li>${respuesta.holidays[i].name}, celebrado el: ${respuesta.holidays[i].date}</li>`)
        },
        error: function(error){
            $("#mensaje").hide();
            $("#reintentar").show();
            console.log("error en funcion ajax")
            $("#mensaje").text("Ocurrió un error con la petición :(")
            $("#mensaje").fadeIn("slow")
            $("#lista").empty();
        }
    })
}

function agregarPaises(respuesta){
    for(i=0;i<respuesta.countries.length;i++){
        $("#select").append(`<option value="${respuesta.countries[i].code}">${respuesta.countries[i].name}</option>`)
    }
}