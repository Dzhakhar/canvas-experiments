var canvasBody = document.getElementById("canvas"),
    canvas = canvasBody.getContext("2d"),

    w = canvasBody.width = window.innerWidth,
    h = canvasBody.height = window.innerHeight,

    opts = {
      amount: 80,

      len: 200,
      size: 10,

      baseTime: 100,
      addedTime: 10,

      color: "rgba(255,255,255,alpha)",
      opacity: 1,
      bgColor: "#8F1D21",

      cx: w/2,
      cy: h/2,
    },

    tick = 0,
    steam = [],
    baseRad = Math.PI * 2 / 6;

function loop(){
  window.requestAnimationFrame(loop);

  ++tick;

  canvas.fillStyle = opts.bgColor;
  canvas.fillRect(0,0,w,h);
  canvas.fillStyle = opts.color.replace("alpha", opts.opacity)

  if(opts.amount!==0){
    steam.push( new Arom );
    steam.map(function (arom){ arom.reset(); });
    opts.amount--;
    console.log(steam);
  }

  steam.map( function( arom ){ arom.step();});
}

function Arom(){

  this.reset();
}

Arom.prototype.reset = function(){

  this.currentX = 0;
  this.currentY = 0;

  this.x = 0;
  this.y = 0;

  this.addedX = 0;
  this.addedY = 0;

  this.rad = 0;
  this.cumulativeTime = 0;

  this.color = opts.color.replace("aplha", opts.opacity);

  this.beginPhase();
};

Arom.prototype.beginPhase = function(){
  this.x += this.addedX;
  this.y += this.addedY;

  this.time = 0;
  this.targetTime = ( opts.baseTime + opts.addedTime * Math.random()) |0;

  this.rad += baseRad + (Math.random() * 10);
  this.addedX = Math.cos( this.rad );
  this.addedY = Math.sin( this.rad );

  console.log(this.currentX > w)
}

Arom.prototype.step = function(){

  ++this.time;
  ++this.cumulativeTime;

  if( this.time >= this.targetTime ){
    this.beginPhase();
  };

  var prop = this.time / this.targetTime,
      x = this.addedX * prop,
      y = this.addedY * prop;

  canvas.fillStyle = opts.color.replace("aplha", opts.opacity);
  canvas.beginPath();
  canvas.arc( opts.cx + (this.x + x) * opts.len, opts.cy + (this.y + y) * opts.len, opts.size, 0, Math.PI * 2 / (Math.random()));
  canvas.fill();
  console.log()
  this.currentX = opts.cx + (this.x + x) * opts.len;
  this.currentY = opts.cy + (this.y + y) * opts.len;
}

loop();
