let texto =

"> Iniciando KaticaOS v3.0...\n"+
"> Buscando usuario especial...\n"+
"> Analizando conversaciones...\n"+
"> Cargando recuerdos...\n"+
"> Activando módulo de cariño...\n"+
"> Acceso concedido ❤️";


let i = 0;


function escribir(){

if(i < texto.length){

document.getElementById("terminalText").innerHTML += texto.charAt(i);

i++;

setTimeout(escribir,45);

}

}


escribir();





function unlock(){


document.getElementById("secret").innerHTML =

"🔓 ARCHIVO DESBLOQUEADO<br><br>"+

"Análisis completado...<br><br>"+

"El sistema llegó a una conclusión:<br><br>"+

"Entre tantas personas, encontré a alguien que hace mis días diferentes.<br><br>"+

"Mi Katica ❤️<br><br>"+

"Estado final: ELEGIDA ♾️";


}






function crearElemento(){


let elementos = [

"❤️",
"🌹",
"🌸",
"✨",
"💗"

];


let elemento = document.createElement("div");


elemento.className="fall";


elemento.innerHTML =

elementos[Math.floor(Math.random()*elementos.length)];



elemento.style.left =

Math.random()*100+"vw";



elemento.style.animationDuration =

(3+Math.random()*6)+"s";



document.body.appendChild(elemento);



setTimeout(()=>{

elemento.remove();

},9000);


}



setInterval(crearElemento,300);
