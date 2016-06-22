var canvasBody = document.getElementById("canvas"),
    canvas = canvasBody.getContext("2d"),

    w = canvasBody.width = window.innerWidth,
    h = canvasBody.height = window.innerHeight,

    opts = {
      amount: 12,
      opacity: 0.3, //Opacity of the hexagons
      color: "rgba(0,0,0,alpha)", //Black color
      speed: 4000, //Higher = slower
      size: 40
    },

    baseRad = (Math.PI * 2 / 6) * 5,
    tick = 0;

    dieX = w + opts.size * 2;
    dieY = w + opts.size * 2;

    hexagons = [];

function loop(){
  window.requestAnimationFrame(loop);

  ++tick;
  console.log(tick);
  canvas.fillStyle = "white";
  canvas.fillRect(0,0,w,h);


  hexagons.push(new Hexagon);
  hexagons.map( function( hexagon ){hexagon.step();});
}

function Hexagon(){

  this.reset();
}

Hexagon.prototype.reset = function () {
  this.startX = -100;
  this.startY = -200;

  this.x = 0;
  this.y = 0;

  this.time = 0;

  this.addedX = 0;
  this.addedY = 0;
  this.rad = 0;

  this.color = opts.color.replace("alpha", opts.opacity);
  this.targetTime = 600;

  this.beginPhase();
};

Hexagon.prototype.beginPhase = function () {
  this.x += this.addedX;
  this.y += this.addedY;

  this.rad += baseRad + (Math.random() * (Math.PI * 2 / 18));
  this.addedX = Math.cos( this.rad );
  this.addedY = Math.sin( this.rad );

  this.time = 0;
};

Hexagon.prototype.step = function () {
  ++this.time;

  if( this.time >= this.targetTime || this.x > dieX || this.y > dieY){
    this.reset();
  };

  var prop = this.time / this.targetTime,
      x = this.addedX * prop,
      y = this.addedY * prop;

  canvas.fillStyle = this.color;
  canvas.fillRect( this.startX + (this.x + x), this.startY + (this.y + y), opts.size, opts.size);
  console.log(this.startX + (this.x + x) * opts.speed);
};

loop();
