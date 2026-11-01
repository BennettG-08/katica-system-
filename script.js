let texto = 
"Inicializando sistema...\n\n" +
"🌹 Cargando recuerdos...\n" +
"❤️ Detectando persona especial...\n" +
"✨ Analizando sonrisas...\n\n" +
"Sistema completado ✅\n\n" +
"Bienvenida, mi Katica ❤️";


let i = 0;


function escribir(){

if(i < texto.length){

document.getElementById("loading").innerHTML += texto.charAt(i);

i++;

setTimeout(escribir,50);

}

}


escribir();



// corazones y flores cayendo

function crearElemento(){

let elementos=["❤️","🌹","🌸","💗","✨"];

let flor=document.createElement("div");

flor.className="fall";

flor.innerHTML=
elementos[Math.floor(Math.random()*elementos.length)];


flor.style.left=Math.random()*100+"vw";

flor.style.animationDuration=
(3+Math.random()*5)+"s";


document.body.appendChild(flor);


setTimeout(()=>{

flor.remove();

},8000);

}


setInterval(crearElemento,300);




// boton recuerdos

function recuerdos(){

document.getElementById("result").innerHTML=

"✔ Amor cargado ❤️<br>"+
"✔ Recuerdos encontrados 🌹<br>"+
"✔ Cariño infinito ♾️<br><br>"+
"Resultado final:<br>"+
"Siempre tú, mi Katica ❤️";

}
