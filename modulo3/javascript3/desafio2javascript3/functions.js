let arrImg = []
let img1 = new Imagen("Mario")
arrImg.push(img1)
let img2 = new Imagen("Bowser")
arrImg.push(img2)
let img3 = new Imagen("Coin")
arrImg.push(img3)
let img4 = new Imagen("Flower")
arrImg.push(img4)
let img5 = new Imagen("Goomba")
arrImg.push(img5)
let img6 = new Imagen("Turtle")
arrImg.push(img6)
let img7 = new Imagen("Mushroom")
arrImg.push(img7)
let img8 = new Imagen("Pipe")
arrImg.push(img8)

$(document).ready(() => {
    $("table img").slideDown(1500);
    n = 0;
    $("#puntos").html(`Puntos: ${n}pts.`)

    $("table img").click(function () {
        //Se desvanece y aparecer la imagen al darle click
        $(this).fadeOut(200).fadeIn(200)
        $("#imgGrande span").empty();
        //Se aumenta el contador de pts
        n++;
        $("#puntos").html(`Puntos: ${n}pts.`);
        //Se guarda el src de la img para agregarselo a la img que cambia
        let src = $(this).attr("src");
        $("#imgRandom").attr("src", `${src}`);
        $("#imgRandom").attr("title", `${$(this).attr("title")}`);
        //Se remueven las clases y se le añade al this la clase seleccionada
        $("table img").removeClass("seleccionada");
        $(this).addClass("seleccionada");
        //Se muestra el titulo de la imagen y la img agrandada
        $("#imgGrande span").text(`${$(this).attr("title")}`);
        $("#imgGrande img").attr("src", `${src}`);
        $("#imgGrande img").show();

        //Se busca en que posición del arrImg está el título de la img seleccionada
        for (i = 0; i < arrImg.length; i++)
            if (`${$(this).attr("title")}` == arrImg[i].title) {
                var x = i
                //Al encontrar la posición, se aumenta el atributo contador del objeto
                arrImg[i].contador++;
            }
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
        for (i = 0; i < arrImg.length; i++){
            arrImg[i].contador = 0
        }
        n = 0;
        $("table img").removeClass("seleccionada");
        $("#puntos").html("Puntos: 0pts.");
        $("#imgGrande>span").empty();
        $("#imgGrande img").hide();
        $("#titulo").hide();
        $("#lista").empty();
    })
})

//Se crea la funcion constructora Imagen a la que se le pasará por parámetros el título de la imagen
function Imagen(title) {
    this.title = title
    this.contador = 0;
}