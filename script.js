//console. log("puro visaje"); significa que sì funciona el js cuando aparece el mensaje en inspeccionar

const titulo = document.getElementById("titulo");
const texto = document.getElementById("texto")


let textoInicial = true; //(variable tipo booleano - dos valores posiblws)
let iTexto = 0;

const textos = ["uno", "dos", "tres", "cuatro", "cinco"];
console.log(textos[0]);

titulo.addEventListener("mousemove", () => {

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

