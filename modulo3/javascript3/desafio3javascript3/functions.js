let arrImg = []
let img1 = new Imagen("mario")
arrImg.push(img1)
let img2 = new Imagen("bowser")
arrImg.push(img2)
let img3 = new Imagen("coin")
arrImg.push(img3)
let img4 = new Imagen("flower")
arrImg.push(img4)
let img5 = new Imagen("goomba")
arrImg.push(img5)
let img6 = new Imagen("turtle")
arrImg.push(img6)
let img7 = new Imagen("mushroom")
arrImg.push(img7)
let img8 = new Imagen("pipe")
arrImg.push(img8)

$(document).ready(() => {
    $("table img").attr("src", "./img/mario-hat.png")
    $("table img").slideDown(1500);
    n = 0;
    $("#puntos").html(`Puntos: ${n}pts.`)

    //Se intenta leer la cookie y se comprueba si está vacía  se realiza un parse
    let valCookie = Cookies.get("modificaciones");

    if (valCookie != undefined)
        try {
            arrImg = JSON.parse(valCookie)
            console.log(arrImg)
        } catch (e) {
            console.log("Hubo un error en el parse de JSON")
        }

    $("table img").click(function () {
        let x = this.title
        let y = $(this).attr("src")
        //Se desvanece y aparecer la imagen al darle click
        //Se realiza un fade out para aparecer la img con el title seleccionada
        if (y == "./img/mario-hat.png") {
            $(this).fadeOut(250, () => {
                $(this).attr("src", "./img/" + `${x}` + ".png")
            }).fadeIn(250)
            //Se aumenta el contador de pts solo al destapar la carta
            n++;
            //Se busca en que posición del arrImg está el título de la img seleccionada
            for (i = 0; i < arrImg.length; i++)
                if (`${$(this).attr("title")}` == arrImg[i].title) {
                    //Al encontrar la posición, se aumenta el atributo contador del objeto
                    arrImg[i].contador++;
                    //Al cambiar el elemento del arreglo se guarda en una cookie
                    Cookies.set("modificaciones", JSON.stringify(arrImg), { expires: 2, path: '' })
                }
        }
        else {
            $(this).fadeOut(250, () => {
                $(this).attr("src", "./img/mario-hat.png")
            }).fadeIn(250)
        }

        $("#puntos").html(`Puntos: ${n}pts.`);
        //Se guarda el src de la img para agregarselo a la img que cambia
        // let src = $(this).attr("src");
        // $("#imgRandom").attr("src", `${src}`);
        // $("#imgRandom").attr("title", `${$(this).attr("title")}`);
        //Se remueven las clases y se le añade al this la clase seleccionada
        $("table img").removeClass("seleccionada");
        $(this).addClass("seleccionada");


        //Se muestra la lista
        $("#titulo").show();
        $("#lista").html(`<li>${arrImg[0].title + " : " + arrImg[0].contador}</li>`);
        $("#lista").append(`<li>${arrImg[1].title + " : " + arrImg[1].contador}</li>`);
        $("#lista").append(`<li>${arrImg[2].title + " : " + arrImg[2].contador}</li>`);
        $("#lista").append(`<li>${arrImg[3].title + " : " + arrImg[3].contador}</li>`);
        $("#lista").append(`<li>${arrImg[4].title + " : " + arrImg[4].contador}</li>`);
        $("#lista").append(`<li>${arrImg[5].title + " : " + arrImg[5].contador}</li>`);
        $("#lista").append(`<li>${arrImg[6].title + " : " + arrImg[6].contador}</li>`);
        $("#lista").append(`<li>${arrImg[7].title + " : " + arrImg[7].contador}</li>`);
        $("#lista li").css("color", "#FFDDC9")
    })

    //Cuando se hace click en el btn Volver a Empezar se remueven las clases, se oculta lo agregado
    // y se reinician los valores.
    $("#btnReiniciar").click(() => {
        for (i = 0; i < arrImg.length; i++) {
            //Se reinicia el contador de las imágenes y se actualiza la cookie
            arrImg[i].contador = 0
        }
        Cookies.set("modificaciones", JSON.stringify(arrImg), { expires: 2, path: '' })
        n = 0;
        $("table img").removeClass("seleccionada");
        $("table img").fadeOut(100).fadeIn(200).attr("src", "./img/mario-hat.png")
        $("#puntos").html("Puntos: 0pts.");
        $("#titulo").hide();
        $("#lista").empty();
    })
})

//Se crea la funcion constructora Imagen a la que se le pasará por parámetros el título de la imagen
function Imagen(title) {
    this.title = title
    this.contador = 0;
}