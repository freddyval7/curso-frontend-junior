$(document).ready(()=>{
    //Se hace la petición para el select del área de estudios
    $.getJSON("http://api.cadif1.com/areadeestudio",function(resp){
                console.log(resp)
                for(i=0;i<resp.areas.length;i++){
                    $(".form__areas").append(`<option value="${resp.areas[i].id}">${resp.areas[i].nombre}</option>`)
                }
            }).fail(()=>{
                $(".error__h1").text("Ocurrió un error...");
            }).always(()=>{
                console.log("Se completó la solicitud")
            })

    //Cada vez que se cambia el area de estudios, sólo se mostrarán los cursos disponibles para ese área
    $("#areas").change(function(){
        var y = this.value

        //Se hace la petición para el select de los cursos
        $.getJSON("https://api.cadif1.com/curso",function(resp){
                console.log(resp)
                for(i=0;i<resp.cursos.length;i++){
                    if(resp.cursos[i].idareaestudio == y)
                        $(".form__cursos").append(`<option value="${resp.cursos[i].id}">${resp.cursos[i].nombre}</option>`)
                }
            }).fail(()=>{
                $(".error__h1").text("Ocurrió un error...");
            }).always(()=>{
                console.log("Se completó la solicitud")
            })
    })

    const form = document.getElementById("form");
    const inputs = document.querySelectorAll("#form input");
    
    //Expresiones regulares para las validaciones
    const exp = {
        nombre: /^[a-zA-ZÀ-ÖØ-öø-ÿ\s]{3,40}$/,
        correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        cedula: /^\d[0-9.]{7,40}$/
    }

    //Para comprobar que al enviar el submit del form esté todo bien, se crean los booleans
    const camp = {
        group__cedula: false,
        group__nombre: false,
        group__correo: false,
    }

    //Función validadora del form
    const validateForm = (e)=>{
        switch(e.target.name){
            case "cedula":
                validateInput(exp.cedula,e.target,"group__cedula");
            break;
            case "nombre":
                validateInput(exp.nombre,e.target,"group__nombre");
            break;
            case "correo":
                validateInput(exp.correo,e.target,"group__correo");
            break;
        }
    }

    //Funcion que valida cada input
    const validateInput = (expr, input, id) => {
        if(expr.test(input.value)){
            document.getElementById(id).classList.remove("form__group-error");
            // document.querySelector(`#group__${id} .form__error`).classList.remove("form__error-active");
            // document.querySelector(`#group__${id} .form__error2`).classList.remove("form__error2-active")
            //Se cambia el boolean a true si todo está bien
            camp[id] = true;
        } else{
            if(input.value == ""){
                document.getElementById(id).classList.add("form__group-error");
                //Se muestra el toast de error
                Swal.fire({
                    text: 'Los campos no deben estar vacíos',
                    customClass: {
                      container: 'position-absolute'
                    },
                    toast: true,
                    position: 'bottom-right',
                    timer: 5000
                  })
                // document.querySelector(`#group__${id} .form__error2`).classList.add("form__error2-active");
                // document.querySelector(`#group__${id} .form__error`).classList.remove("form__error-active");
                //Se cambia el boolean a false si algo está mal   
                camp[id] = false;
            } else{
                document.getElementById(id).classList.add("form__group-error");
                //Dependiendo del input se muestra el toast de error personalizado
                switch(id){
                    case "group__cedula":
                        Swal.fire({
                                text: 'La cédula debe contener sólo números y debe ser mayor a 7 caracteres',
                                customClass: {
                                  container: 'position-absolute'
                                },
                                toast: true,
                                position: 'bottom-right',
                                timer: 5000
                            })
                    break;
                    case "group__nombre":
                        Swal.fire({
                            text: 'El nombre debe ser sólo letras y ser mayor a 3 caracteres',
                            customClass: {
                              container: 'position-absolute'
                            },
                            toast: true,
                            position: 'bottom-right',
                            timer: 5000
                        })
                    break;
                    case "group__correo":
                        Swal.fire({
                            text: 'El correo debe tener un formato válido',
                            customClass: {
                              container: 'position-absolute'
                            },
                            toast: true,
                            position: 'bottom-right',
                            timer: 5000
                        })
                    break;
                }
                // document.querySelector(`#group__${id} .form__error`).classList.add("form__error-active");      
                // document.querySelector(`#group__${id} .form__error2`).classList.remove("form__error2-active");
                //Se cambia el boolean a false si algo está mal 
                camp[id] = false;
            }
        }
    }

    //Funcion que valida los selects
    const validateSelect = ()=>{
        if (document.forms["form"].areas.value == "default"){
            $(`#group__areas`).addClass("form__group-error");
        }
        else{
            $(`#group__areas`).removeClass("form__group-error");
            if (document.forms["form"].cursos.value == "default"){
                $(`#group__cursos`).addClass("form__group-error");
            }
            else{
                $(`#group__cursos`).removeClass("form__group-error");
                return true
            }
        }
        return false
    }

    document.addEventListener("blur", validateSelect);

    //Por cada input se valida en el evento blur
    inputs.forEach((input) => {
        input.addEventListener("blur", validateForm);
    })
    
    //Al hacer submit
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        //Se valida que todo esté bien
        if(camp.group__cedula && camp.group__correo && camp.group__nombre && validateSelect){
            //Se pregunta si se quieren enviar los datos
            Swal.fire({
                title: '¿Está seguro que desea enviar sus datos?',
                showDenyButton: true,
                confirmButtonText: 'Si',
                denyButtonText: `No`,
                allowOutsideClick:false,
                icon: "question"
                }).then((result) => {
                    //Si es así se hace post al api de Cadi
                    if (result.isConfirmed) {
                        let obj = {
                            "nombre": document.forms["form"].nombre.value,
                            "cedula": document.forms["form"].cedula.value,
                            "correo": document.forms["form"].correo.value,
                            "curso": document.forms["form"].cursos.value
                        }
                        Swal.fire('Se envió exitosamente!', '', 'success')
                        $.post("https://api.cadif1.com/test",obj,function(resp){
                            console.log(resp)
                           console.log("se enviaron los datos")
                            console.log(resp.mensaje)
                            form.reset();
                        }).fail((resp)=>{
                            Swal.fire(
                            'Error al colocar los datos!', 
                            'No debe dejar nada sin seleccionar!',"error")
                            console.log(document.forms["form"].cedula.value)
                            console.log("error al enviar los datos")
                            console.log(resp)
                        })
                    //Sino, no se envía nada
                    } else if (result.isDenied) {
                        Swal.fire('No se enviaron los datos', '', 'info')
                }
            })
        }
        //Si algo falla al hacer submit, se muestra un mensaje de error
        else{
            validateInput(exp.cedula,e.target,"group__cedula");
            validateInput(exp.nombre,e.target,"group__nombre");
            validateInput(exp.correo,e.target,"group__correo");
            Swal.fire('Error al colocar los datos!',"","error")
        }
    })
})