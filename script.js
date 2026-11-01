let text =
"> Iniciando conexión...\n"+
"> Buscando usuario especial...\n"+
"> Cargando recuerdos...\n"+
"> Acceso concedido ❤️\n"+
"> Sistema KaticaOS iniciado correctamente.";


let i=0;


function type(){

if(i < text.length){

document.getElementById("terminalText").innerHTML += text.charAt(i);

i++;

setTimeout(type,50);

}

}


type();



function unlock(){

document.getElementById("secret").innerHTML=

"🔓 MENSAJE DESENCRIPTADO<br><br>"+
"El sistema confirmó algo importante:<br><br>"+
"Mi persona favorita sigue siendo tú, Katica ❤️";

}




function createFall(){

let items=[
"❤️",
"🌹",
"🌸",
"✨"
];


let item=document.createElement("div");

item.className="fall";

item.innerHTML=
items[Math.floor(Math.random()*items.length)];


item.style.left=Math.random()*100+"vw";

item.style.animationDuration=
(4+Math.random()*5)+"s";


document.body.appendChild(item);


setTimeout(()=>{

item.remove();

},9000);


}


setInterval(createFall,350);
