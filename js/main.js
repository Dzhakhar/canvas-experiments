var canvasBody = document.getElementById("canvas"), //Just selecting the canvas. EZ
    canvas = canvasBody.getContext("2d"), // Gettings the context of the canvasBody

    w = canvasBody.width = window.innerWidth, // Setting the canvas width, and also, setting the W variable for the window width.
    h = canvasBody.height = window.innerHeight, // Same as W but for height.

    // Options that you can change. Just try not to touch other ones, but only this ones.
    opts = {
      bulbSize: 60, //Size of the bulb
      bulbLightColor: "#fcfcfc", //Buld light color
      bgc: "rgba(66,124,245,alpha)", // Color of the background
      bgcRedrawOpacity: 0.05, //Redraw opacity, makes the bulb last longer

      blinkChance: 0.3
    },

    tick = 0,
    bulbs = [], // The array that will store the objects of each Bulb
    baseRad = Math.PI * 2, // The default radian. Just to make circle a circle =)

    hAmount = Math.floor(window.innerWidth / opts.bulbSize), // horizontal Amount
    vAmount = Math.floor(window.innerHeight / opts.bulbSize); // vertical Amount

//The repetative function that will call itself, and redraw the canvas every 1000/60 seconds =)
function loop(){
  window.requestAnimationFrame(loop);

  ++tick;

  canvas.fillStyle = opts.bgc.replace("alpha", opts.bgcRedrawOpacity);
  canvas.fillRect(0,0,w,h); // Redrawing the canvas.

  if(Math.random() < opts.blinkChance){
    var randomV = Math.floor(Math.random() * vAmount),
        randomH = Math.floor(Math.random() * hAmount);

    bulbs[randomV][randomH].spark();
  }

}

function initStuff(){ //The function that will fill out the bulbs radian, and will build the bulb structure.

  for(var i = 0; i < vAmount; i++){
    var lineData = [];
    for( var f = 0; f < hAmount; f++){
      lineData.push( new Bulb() );
      console.log(lineData);
    }
    bulbs.push(lineData);
  }
  for( var d = 0; d < vAmount; d++){
    for( var g = 0; g < hAmount; g++){
      bulbs[d][g].reset(g, d);
    }
  }

  loop();
}

function Bulb(){

  this.reset();
}
Bulb.prototype.reset = function (xPos, yPos) {
  this.radius = opts.bulbSize/2;
  this.color = opts.bulbLightColor;

  this.x = xPos * opts.bulbSize + this.radius;
  this.y = yPos * opts.bulbSize + this.radius;
};
Bulb.prototype.spark = function (arg) {
  canvas.fillStyle = this.color;
  canvas.beginPath();
  canvas.arc( this.x, this.y, this.radius, 0, baseRad);
  canvas.fill();
};

initStuff();
