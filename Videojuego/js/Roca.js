class Roca extends ObjetoInteractuable{
    constructor() {
      super();
      this.roca = document.createElement('div');
      this.roca.classList.add("roca");
      document.getElementById("contenedor").appendChild(this.roca);
    }

    status(){
      super.status();
    }
  }