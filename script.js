let texto =
"> Iniciando KaticaOS...\n"+
"> Buscando conexión especial...\n"+
"> Analizando recuerdos...\n"+
"> Cargando cariño...\n"+
"> Sistema desbloqueado ❤️";


let i=0;


function escribir(){

if(i<texto.length){

document.getElementById("terminalText").innerHTML += texto.charAt(i);

i++;

setTimeout(escribir,50);

}

}


escribir();



function unlock(){

document.getElementById("secret").innerHTML=

"🔓 ARCHIVO DESBLOQUEADO<br><br>"+

"El sistema terminó el análisis...<br><br>"+

"Conclusión:<br>"+

"Entre tantos usuarios en el mundo,<br>"+

"encontré a la persona que quiero seguir conociendo cada día más.<br><br>"+

"Mi Katica ❤️";

}




function crearElemento(){

let cosas=[
"❤️",
"🌹",
"🌸",
"✨"
];


let elemento=document.createElement("div");

elemento.className="fall";

elemento.innerHTML=
cosas[Math.floor(Math.random()*cosas.length)];


elemento.style.left=Math.random()*100+"vw";

elemento.style.animationDuration=
(3+Math.random()*6)+"s";


document.body.appendChild(elemento);


setTimeout(()=>{

elemento.remove();

},9000);

}


setInterval(crearElemento,300);
