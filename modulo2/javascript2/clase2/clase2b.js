function calcular(){
    let precio=document.datos.precio.value
    let cantidad=document.datos.cantidad.value
    document.datos.subtotal.value = precio * cantidad
    let subtotal = document.datos.subtotal.value
    let iva = 0.16 * subtotal
    
    document.datos.total.value = parseInt(subtotal) + parseInt(iva)
    document.getElementById("btnAgregar").disabled = false
}

function agregarACarrito(){
    let error = document.getElementById("error")
    if (document.datos.total.value==0)
        error.style.display="block"
    else{
        let totalItem=document.getElementById("totalItem")
        let numeroItems=document.getElementById("numeroItems")

        totalItem.innerText=parseFloat(document.datos.total.value)+
                            parseFloat(totalItem.innerText)

        numeroItems.innerText++

        error.style.display="none"
        document.datos.precio.value=""
        document.datos.cantidad.value=""
        document.datos.subtotal.value="0"
        document.datos.iva.value = "16%"
        document.datos.total.value = "0"
    }
} 