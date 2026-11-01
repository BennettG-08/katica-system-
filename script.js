let texto = 
"🌹 Iniciando KaticaOS v3.0...\n\n" +

"Buscando recuerdos guardados...\n" +
"✔ Primeras conversaciones encontradas\n" +
"✔ Risas detectadas\n" +
"✔ Cariño activado\n" +
"✔ Momentos especiales cargados ❤️\n\n" +

"Bienvenida, mi Katica ❤️\n\n" +

"Este proyecto no nació porque quería hacer solo una página bonita...\n" +
"Nació porque quería guardar algo que para mí vale mucho: nosotros.\n\n" +

"Desde esas primeras conversaciones donde poco a poco fuimos agarrando confianza,\n" +
"hasta esas veces donde una llamada, un mensaje o una palabra tuya me cambiaba el día.\n\n" +

"Me gusta cómo eres, tus ocurrencias, tu forma de hablar,\n" +
"esa manera tuya de hacer que hasta una conversación sencilla se vuelva especial.\n\n" +

"Gracias por cada risa, cada cariño, cada momento donde me haces sentir cerca de ti.\n\n" +

"Registro del sistema:\n" +
"❤️ Persona encontrada: Mi Katica\n" +
"🌹 Sonrisa favorita: Guardada\n" +
"💌 Recuerdos: Infinitos\n" +
"♾️ Estado: Eligiéndote una y otra vez\n\n" +

"Proyecto completado ✅\n" +
"Pero nuestra historia sigue en desarrollo... ❤️";



let i=0;


function escribir(){

if(i < texto.length){

document.getElementById("loading").innerHTML += texto.charAt(i);

i++;

setTimeout(escribir,40);

}

}

escribir();




let j=0;


function escribirHistoria(){

if(j < texto.length){

document.getElementById("story").innerHTML += texto.charAt(j);

j++;

setTimeout(escribirHistoria,20);

}

}

escribirHistoria();





function unlock(){

document.getElementById("result").innerHTML=

"🔓 MENSAJE DESBLOQUEADO<br><br>"+

"El sistema terminó el análisis...<br><br>"+

"Conclusión:<br>"+

"Mi persona favorita sigue siendo tú, Katica ❤️";

}





function crearElemento(){

let lista=[

"❤️",
"🌹",
"🌸",
"✨",
"💗"

];


let elemento=document.createElement("div");


elemento.className="fall";


elemento.innerHTML=

lista[Math.floor(Math.random()*lista.length)];



elemento.style.left=Math.random()*100+"vw";


elemento.style.animationDuration=

(3+Math.random()*6)+"s";



document.body.appendChild(elemento);



setTimeout(()=>{

elemento.remove();

},9000);

}



setInterval(crearElemento,300);
