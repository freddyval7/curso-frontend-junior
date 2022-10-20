var arrNombres = []
var arrCorreos = []
var arrPassword = []

window.onload = function () {
    //No se le permite escribir espacios en blanco en el nombre de usuario
    document.form2.user.onkeypress = function (event) {
        if (event.keyCode == 32)
            return false;
    }

    //Se comprueba el formato del correo en el evento onblur
    document.form2.correo.onblur = function () {
        if (this.value.trim().length > 0) {
            let error = document.getElementById("correo-error");

            if (validarCorreo(this.value))
                error.style.display = "none"
            else
                error.style.display = "block"
        }
    }

    //Funcion que valida el correo
    function validarCorreo(correo) {
        let reg = /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/

        return reg.test(correo)
    }

    //Se valida que la contraseña tenga un mínimo de 4 caracteres en el onblur
    document.form2.contra.onblur = function () {
        let error = document.getElementById("pass-error");
        if (this.value.trim().length < 4) {
            error.style.display = "block"
        }
        else
            error.style.display = "none"
    }

    //Se valida que cuando se confirme la contraseña sea igual a la introducida previamente
    document.form2.contraConfirm.onkeyup = function(event) {
        validarPass(event)
    }
    function validarPass(contra) {
        let contraConfirm = document.form2.contraConfirm.value
        if (contraConfirm == contra) {
            return true;
        }
        return false;
    }

    //Al hacer click en el botón registrar
    document.getElementById("btnRegistrar").onclick = function () {
        let user = document.form2.user.value
        let correo = document.form2.correo.value
        let contra = document.form2.contra.value
        let contraConfirm = document.form2.contraConfirm.value
        let userExist = document.getElementById("userExist")
        let emailExist = document.getElementById("emailExist")
        let passSame = document.getElementById("passSame")
        let error = document.getElementById("userOrPassNotExist")
        let valido1 = true
        let valido2 = false

        error.style.display = "none"
        //Se valida que ningún campo esté vacío
        if (user.trim() == "" || correo.trim() == "" || contra.trim() == "" || contraConfirm.trim() == "") {
            valido1 = false
            alert("Los campos no deben estar vacíos")
        }

        //Que las Contraseñas sean iguales
        if (validarPass(contra))
            valido2 = true
        else
            passSame.style.display = "block"

        if (valido1 && valido2) {
            passSame.style.display = "none"
            //Que los nombres y correos no hayan sido introducidos previamente, sino se agregan a sus respectivos arreglos
            if (arrNombres.includes(user)){
                userExist.style.display = "block"
                emailExist.style.display = "none"
            }
            else if (arrCorreos.includes(correo)){
                userExist.style.display = "none"
                emailExist.style.display = "block"
            }
            else {
                userExist.style.display = "none"
                emailExist.style.display = "none"
                arrNombres.push(user)
                arrCorreos.push(correo)
                arrPassword.push(contra)
                alert("Registrado exitosamente")
                document.form2.reset()
            }
        }
    }

    document.getElementById("btnAcceder").onclick = function (){
        debugger;
        let user = document.form1.nomCorreo.value
        let contra = document.form1.contra.value
        let error = document.getElementById("userOrPassNotExist")
        let coin1
        let coin2
        

        if (user.trim() == "" || contra.trim() == "") {
            alert("Los campos no deben estar vacíos")
        }

        for(i=0; i<arrNombres.length; i++){
            if(arrNombres[i] == user)
                coin1 = arrNombres.indexOf(user)
                else if(arrCorreos[i] == user)
                    coin1 = arrCorreos.indexOf(user)

            if(arrPassword[i] == contra)
                coin2 = arrPassword.indexOf(contra)
        }

        if(coin1 == coin2)
            window.location.assign("http://www.google.com")
        else
            error.style.display = "block"        
    }
}
