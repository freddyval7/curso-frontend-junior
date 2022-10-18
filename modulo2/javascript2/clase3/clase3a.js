
// cuando la pagina se cargue, se ejecuta el contenido de la funcion arrow
window.onload = ()=>{
    console.log("se cargo la pagina")
    let foto = document.getElementById("foto")
    
    foto.onclick = ()=>{
        foto.width+=10
        foto.height+=10
    }

    document.getElementById("btnCalcular").onclick = calcular;

    document.getElementById("btnAgregar").addEventListener("click", function (){
        let error = document.getElementById("error")
        if (document.datos.subTotal.value==0){
            alert("Debe tener un valor diferente de 0")
            error.style.display="block"
        }else{
            // buscar los elementos que se van a actualizar
            let totalItem=document.getElementById("totalItem")
            let numeroItems=document.getElementById("numeroItems")

            // acumulador
            totalItem.innerText=parseFloat(document.datos.subTotal.value)+
                                parseFloat(totalItem.innerText)

            // incremento el contador
            numeroItems.innerText++

            // se esconde el h2 del mensaje de error
            error.style.display="none"
            // se limpian los formularios
            document.datos.precio.value=""
            document.datos.cantidad.value=""
            document.datos.subTotal.value="0"
        }
    })
}

function calcular(){
    let precio=document.datos.precio.value
    let cantidad=document.datos.cantidad.value

    document.datos.subTotal.value=precio*cantidad
    document.getElementById("btnAgregar").disabled=false
}