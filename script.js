let texto = 
"🌹 Iniciando KaticaOS v2.0...\n\n" +

"Buscando recuerdos guardados...\n" +
"✔ Primeras conversaciones encontradas\n" +
"✔ Confianza creada poco a poco\n" +
"✔ Sonrisas detectadas\n" +
"✔ Cariño activado ❤️\n\n" +

"Bienvenida, mi Katica ❤️\n\n" +

"Este proyecto no es solo código...\n" +
"Es una pequeña forma de enseñarte lo especial que eres para mí.\n\n" +

"Desde aquellas primeras conversaciones donde empezamos a conocernos,\n" +
"hasta esos momentos donde una llamada, un mensaje tuyo o un simple 'amor'\n" +
"pueden cambiar completamente mi día.\n\n" +

"Me encanta tu forma de ser, tus ocurrencias,\n" +
"la manera en que poco a poco me has dejado conocer esa parte cariñosa de ti.\n\n" +

"Gracias por cada risa, cada conversación,\n" +
"cada momento bonito y por hacer que esto se sienta diferente.\n\n" +

"📂 Registro del sistema:\n\n" +
"❤️ Persona especial: Mi Katica\n" +
"🌹 Sonrisa favorita: Encontrada\n" +
"💌 Conversaciones: Guardadas\n" +
"✨ Momentos juntos: En crecimiento\n" +
"♾️ Cariño: Sin límite\n\n" +

"Sistema completado ✅\n\n" +

"No sé qué traerá el futuro,\n" +
"pero sí sé que me gusta seguir creando momentos contigo.\n\n" +

"❤️ Fin del registro: Bennett & Katica";


let i = 0;

function escribir(){

if(i < texto.length){

document.getElementById("loading").innerHTML += texto.charAt(i);

i++;

setTimeout(escribir,45);

}

}

escribir();


// Corazones y flores cayendo

function crearElemento(){

let elementos = ["❤️","🌹","🌸","💗","✨"];

let elemento = document.createElement("div");

elemento.className = "fall";

elemento.innerHTML =
elementos[Math.floor(Math.random()*elementos.length)];

elemento.style.left = Math.random()*100+"vw";

elemento.style.animationDuration =
(3 + Math.random()*5)+"s";

document.body.appendChild(elemento);


setTimeout(()=>{

elemento.remove();

},8000);

}


setInterval(crearElemento,300);


// Botón de recuerdos

function recuerdos(){

document.getElementById("result").innerHTML =

"🌹 Recuerdos desbloqueados<br><br>" +
"❤️ Cariño cargado<br>" +
"💌 Momentos guardados<br>" +
"♾️ Historia en desarrollo<br><br>" +
"Resultado final:<br>" +
"Mi persona favorita sigue siendo tú ❤️";

}
