var canvasBody = document.getElementById("canvas"),
    canvas = canvasBody.getContext("2d"),

    w = canvasBody.width = window.innerWidth,
    h = canvasBody.height = window.innerHeight,

    opts = {
      color: "hsl(hue,100%,40%)",
      radius: 10,
      radiusRandom: 2,
      opacity: 0.55
    },
    tick = 0,
    currentHue = 0,

    painting = false;

canvasBody.onmousedown = function() {
  painting = true;
  console.log("Down");
};
canvasBody.onmouseup = function() {
  painting = false;
  console.log("Up");
};
canvasBody.addEventListener("mousemove", function(e){
  var posX = e.pageX,
      posY = e.pageY;

  if(painting){
    ++tick;
    if(!(tick%10)){
      if((currentHue !== 356)){
        currentHue++
      } else {
        currentHue = 0;
      }
      console.log("change");
    };

    currentColor = opts.color.replace("hue", currentHue);
    canvas.fillStyle = currentColor;
    canvas.beginPath()
    canvas.arc(posX, posY, opts.radius, 0, Math.PI * 2);
    canvas.fill();
  }

});
