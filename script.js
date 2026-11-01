let mensaje = 
"Inicializando proyecto...\n\n" +
"Conectando con Katica... ✅\n" +
"Cargando recuerdos... ✅\n" +
"Analizando sonrisas... ✅\n\n" +
"Resultado:\n" +
"Eres una de las personas más bonitas que llegaron a mi vida ❤️\n\n" +
"No hice este proyecto para una nota ni para una clase.\n" +
"Lo hice porque quería crear algo diferente para ti.\n\n" +
"Gracias por tus risas, tus ocurrencias y por hacer mis días más bonitos.\n\n" +
"Estado del sistema:\n❤️ Elegida\n❤️ Especial\n❤️ Única";

let i = 0;

function escribir() {
    if (i < mensaje.length) {
        document.getElementById("text").innerHTML += mensaje.charAt(i);
        i++;
        setTimeout(escribir, 40);
    }
}

escribir();


function start(){
    document.getElementById("result").innerHTML =
    "✔ Amor cargado<br>" +
    "✔ Cariño activado<br>" +
    "✔ Sistema funcionando<br><br>" +
    "Versión final: Siempre tú ❤️";
}
