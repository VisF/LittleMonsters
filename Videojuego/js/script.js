"use strict"


let personaje = new Character();
let score = 0;
let roca = new Roca();
let coin = new Coin();
let tiempo = 20000; // 2 minutos de tiempo
let scoreFinal = 0;
document.addEventListener('keydown', (event) => {
    if (event.key === " ") {
        personaje.saltar();
    }
});

function generarCoin() {
    coin = new Coin();
}

function generarRoca(){
    roca = new Roca();

}
//Generamos una funcion para pasar a otro html, que indique el final del juego
function menuPerdi(){
    clearInterval(gameLoopId); // Detener el ciclo gameLoop
    
    const scoreFinalElement = document.getElementById("scoreFinal");
    if (scoreFinalElement) {
        scoreFinalElement.textContent = "Score: " + scoreFinal;
    }
    window.location.href = 'menu.html?score=' + scoreFinal;;
  }




function gameLoop() {
    tiempo -= 50;
    const minutos = Math.floor(tiempo / 60000);
    const segundos = Math.floor((tiempo % 60000) / 1000).toString().padStart(2, '0');
    document.getElementById('reloj').textContent = `Tiempo: ${minutos}:${segundos}`;
    //Confirmamos que toco el coin y lo borramos en caso de ser asi, y sumamos los puntos
    let aux = personaje.checkCollisionCoin(coin);
    if(aux){
        tiempo+=3000;
        score += 10;
        coin.coin.remove();
        document.getElementById("score").textContent = "Score: " + score;
    }
    //Hacemos lo mismo con los obstaculos y terminamos el juego, pasando el puntaje a la variable scorefinal
    let aux2 = personaje.checkCollisionRoca(roca);
    if(aux2 || tiempo == 0){
        scoreFinal = score;
        menuPerdi();
        clearInterval(gameLoopId);
        
        
        console.log("Se termino");
    }
    

}


let gameLoopId = setInterval(gameLoop, 50);

setInterval(generarCoin, 2000);

setInterval(generarRoca, 2600);
