
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
        if (document.datos.nombre.value.trim() == "")
            alert("Debe escribir el nombre")
        else
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

                agregarItemATabla(document.datos.nombre.value,
                                document.datos.cantidad.value,
                                document.datos.precio.value,
                                document.datos.subTotal.value)

                // se esconde el h2 del mensaje de error
                error.style.display="none"
                // se limpian los formularios
                document.datos.precio.value=""
                document.datos.cantidad.value=""
                document.datos.subTotal.value="0"
            }
    })
}

function agregarItemATabla(nombre,cantidad,precio,subtotal){
    let tabla = document.getElementById("listado")

    tabla.style.display = "block"
    let fila = tabla.insertRow(-1)

    if (fila.rowIndex % 2 == 0)
        fila.style.backgroundColor="#dee2e6"

    let celda = fila.insertCell(-1)
    let img = document.createElement("img")
    img.src = "https://api.cadif1.com/alumno/foto/16541/0/1"
    img.width = 50

    celda.appendChild(img)

    // el numero de la fila
    celda = fila.insertCell(-1)
    celda.innerText = fila.rowIndex
    
    celda = fila.insertCell(-1)
    celda.innerText = nombre
    celda = fila.insertCell(-1)
    celda.innerText = precio
    celda = fila.insertCell(-1)
    celda.innerText = cantidad
    celda = fila.insertCell(-1)
    celda.innerText = subtotal
    
    celda = fila.insertCell(-1)
    let boton = document.createElement("button")
    boton.innerText = "Eliminar"
    boton.onclick = function (){
        console.log("hola boton")
        // this es el boton. This no tiene valor con funciones arrow
        console.log(this.parentNode.parentNode)
        // rowIndex es la posicion de una fila en una tabla
        tabla.deleteRow(this.parentNode.parentNode.rowIndex)
    }
    celda.appendChild(boton)
}

function calcular(){
    let precio=document.datos.precio.value
    let cantidad=document.datos.cantidad.value

    if (precio.trim()=="" || isNaN(precio))
        alert("El precio debe ser un numero")
    else
        if (cantidad.trim()=="" || isNaN(cantidad))
            alert("La cantidad debe ser un numero")
        else{
            document.datos.subTotal.value=precio*cantidad
            document.getElementById("btnAgregar").disabled=false
        }
}