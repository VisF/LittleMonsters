class Character extends ObjetoInteractuable{
  constructor(){
    super();
    this.character = document.getElementById("character");
}

status(){
    this.character.getBoundingClientRect();
}

correr(){
    this.clean();
    this.character.classList.add("correr");
}

saltar(){
    if (this.character.classList.contains("correr")) {
        this.clean();

        this.character.classList.add("saltar");


        this.character.addEventListener("animationend", ()=>{
            this.caer();
        });
        
    }
}

caer(){
    this.clean();
    this.character.classList.add("caer");

    this.character.addEventListener("animationend", () => {
        this.correr();
    });
}

clean(){
    this.character.classList.remove("correr");
    this.character.classList.remove("saltar");
    this.character.classList.remove("caer");
    this.character.removeEventListener("animationend", () =>{});
}

checkCollisionCoin(coin) {
  const characterRect = this.character.getBoundingClientRect();
  const objectCoin = coin.coin.getBoundingClientRect();
  // Lógica de detección de colisión entre el personaje y el objeto
  // Retorna true si se produce una colisión, false en caso contrario
  if(characterRect.right > objectCoin.left &&
    characterRect.left < objectCoin.right &&
    characterRect.top < objectCoin.bottom &&
    characterRect.bottom > objectCoin.top){
    console.log("choco coin");
    return true;
     
  }
  return false;
}
checkCollisionRoca(roca) {
    const characterRect = this.character.getBoundingClientRect();
    const objectRoca = roca.roca.getBoundingClientRect();
    // Lógica de detección de colisión entre el personaje y el objeto
    // Retorna true si se produce una colisión, false en caso contrario
    if((characterRect.right > objectRoca.left &&
      characterRect.left < objectRoca.right &&
      characterRect.top < objectRoca.bottom &&
      characterRect.bottom > objectRoca.top)){
      console.log("choco Roca");
      return true;
       
    }
    return false;
  }
}
  

