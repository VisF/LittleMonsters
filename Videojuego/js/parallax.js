const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const canvasWidth = canvas.width = 800;
const canvasHeight = canvas.height = 700;

let gameSpeed = 1;

const backgroundLayer1 = new Image();
backgroundLayer1.src = 'img/01_Mist.png';
const backgroundLayer2 = new Image();
backgroundLayer2.src = 'img/02_Bushes.png';
const backgroundLayer3 = new Image();
backgroundLayer3.src = 'img/03_Particles.png';
const backgroundLayer4 = new Image();
backgroundLayer4.src = 'img/04_Forest.png';
const backgroundLayer5 = new Image();
backgroundLayer5.src = 'img/05_Particles.png';
const backgroundLayer6 = new Image();
backgroundLayer6.src = 'img/06_Forest.png';
const backgroundLayer7 = new Image();
backgroundLayer7.src = 'img/07_Forest.png';
const backgroundLayer8 = new Image();
backgroundLayer8.src = 'img/08_Forest.png';
const backgroundLayer9 = new Image();
backgroundLayer9.src = 'img/09_Forest.png';
const backgroundLayer10 = new Image();
backgroundLayer10.src = 'img/10_Sky.png';




class Layer{
    constructor(image, speedModifier){
        this.x = 0;
        this.y = 0;
        this.width = 1900;
        this.height = 700;
        this.x2 = this.width;
        this.image = image;
        this.modificadorDeVelocidad = speedModifier;
        this.speed = gameSpeed * this.modificadorDeVelocidad;

    }
    update(){
        this.speed = gameSpeed * this.modificadorDeVelocidad;
        if(this.x<= -this.width){
            this.x = this.width + this.x2 - this.speed;

        }
        if(this.x2<= -this.width){
            this.x2 = this.width + this.x - this.speed;

        }
        this.x = Math.floor(this.x - this.speed);
        this.x2 = Math.floor(this.x2 - this.speed);


    }
    draw(){
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
        ctx.drawImage(this.image, this.x2, this.y, this.width, this.height);


    }
    



}



const layer1 = new Layer(backgroundLayer1, 1);
const layer2 = new Layer(backgroundLayer2, 0.9);
const layer3 = new Layer(backgroundLayer3, 0.8);
const layer4 = new Layer(backgroundLayer4, 0.7);
const layer5 = new Layer(backgroundLayer5, 0.6);
const layer6 = new Layer(backgroundLayer6, 0.5);
const layer7 = new Layer(backgroundLayer7, 0.4);
const layer8 = new Layer(backgroundLayer8, 0.3);
const layer9 = new Layer(backgroundLayer9, 0.2);
const layer10 = new Layer(backgroundLayer10, 0.1);

const gameLayers = [layer10, layer9, layer8, layer7, layer6, layer5, layer4, layer3, layer2, layer1];


let x = 0;
let x2= 1900;
function animate(){
    ctx.clearRect(0,0,canvasWidth, canvasHeight);
    gameLayers.forEach(object =>{
        object.update();
        object.draw();
    })
    requestAnimationFrame(animate);
}

animate();


