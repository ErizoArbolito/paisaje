//console. log("puro visaje"); significa que sì funciona el js cuando aparece el mensaje en inspeccionar

const titulo = document.getElementById("titulo");
const texto = document.getElementById("texto")
const boton = document.getElementById("boton")
const image = document.getElementById("image")
const image = document.getElementById("historia")

let textoInicial = true; //(variable tipo booleano - dos valores posiblws)
let iTexto = 0;

const textos = ["Para iniciar", "tienes que", "hacer", "click allá", "↖"];
console.log(textos[0]);

titulo.addEventListener("click", () => {

    if(textoInicial === true) {
        titulo.innerText = "Qué visaje";;
    } else {
        titulo.innerText = "Paisaje visajoso";
    }
    textoInicial = !textoInicial

    //alert("qué visaje"); saca una ventana emergente
});

texto.addEventListener("click", () => {
    texto.innerText = textos[iTexto];
    iTexto += 1;
})

boton.addEventListener("click", () => {
 image.hidden = !image.hidden;
})

boton.addEventListener("click", () => {
 historia.hidden = !historia.hidden;
})