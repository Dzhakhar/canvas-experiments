var canvasBody = document.getElementById("canvas"),
    canvas = canvasBody.getContext("2d"),
    w = canvasBody.width = window.innerWidth,
    h = canvasBody.height = window.innerHeight,
    tick = 0,
    opts = {
      count: 1,
      size: 30,
      sizeRandom: 10,
      spawnOpacity: 1,
      sparkLife: 0.1,
      color: "rgba(39, 173, 96, alpha)"
    };

function anim(){
  window.requestAnimationFrame(anim);

  step();
}

anim();

function step(){
  var fillColor = opts.color.replace("alpha", opts.spawnOpacity);
  canvas.fillStyle = fillColor;
  for(var i = 0; i < Math.round(opts.count); i++){
    var random = Math.random() * opts.sizeRandom;
    canvas.fillRect(-(opts.size/2) + Math.random() * w, -(opts.size/2) + Math.random() * h, opts.size + random, opts.size + random)
  }
  canvas.fillStyle = "rgba(255,255,255,"+ opts.sparkLife +")";
  canvas.fillRect(0,0,w,h);
}
