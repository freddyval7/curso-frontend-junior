$(document).ready(()=>{
    $("#btnAllProducts").click(function(){
        $.getJSON("https://mystoreapi.com/catalog/products?limit=20&skip=1",function(resp){
            console.log(resp)
            if(resp.products.length == 0){
                $("#errorText").show();
                $("#errorText").text("No hay productos disponibles...");
            }
            else{
                $("#products").show();
                for(i=0;i<resp.products.length;i++)
                    $("#products").append(`<li>${resp.products[i].name} - (id: ${resp.products[i].id})</li>`)
                $("#errorText").hide();
                $("#exito").hide();
            }
        }).fail(()=>{
            $("#errorText").text("Ocurrió un error...");
        }).always(()=>{
            console.log("Se completó solicitud")
        })
    })

    $("#btnCargarOrden").click(function(){
        if(!todoValido())
            $("#errorText").text("Los datos introducidos no son válidos!")
        else{
            let obj = {
                "name": document.forms["formClient"].name.value,
                "address": document.forms["formClient"].address.value,
            }
            $.post("https://mystoreapi.com/order/new",obj,function(resp){
                $("#exito").show();
                $("#exito").text(`Se creó su orden con éxito con el id: ${resp.id}`)
                $("#products").hide();
                document.forms["formClient"].reset();
            }).fail(()=>{
                $("#errorText").text("Ocurrió un error...");
            }).always(()=>{
                console.log("Se completó solicitud")
            })
        }
    })
})

function todoValido(){
    return true
}