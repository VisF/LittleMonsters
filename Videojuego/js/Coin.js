class Coin extends ObjetoInteractuable{
    constructor() {
      super();
      this.coin = document.createElement('div');
      this.coin.classList.add("coin");
      document.getElementById("contenedor").appendChild(this.coin);
    }

    status(){
      super.status();
    }
  }