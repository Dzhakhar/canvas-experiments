var canvasBody = document.getElementById("canvas"),
    canvas = canvasBody.getContext("2d"),

    w = canvasBody.width = window.innerWidth,
    h = canvasBody.height = window.innerHeight,

    opts = {
      pixelSize: 20
    },

    color = {
      black: "black",
      yellow: "yellow",
      blue: "blue",
      red: "red",
      brown: "#84401a",
      skin: "#ffbd71",
      transparent: "rgba(0,0,0,0)"
    },

    picture = [
      "---rrrrrr----",
      "--rrrrrrrrrr-",
      "--hhhsss+s---",
      "-hshssss+sss-",
      "-hshhssss+sss",
      "-hhsssss++++-",
      "---ssssssss--",
      "--rrbrrrr----",
      "-rrrbrrbrrrr-",
      "rrrrbbbbrrrr-",
      "ssrbybbybrss-",
      "sssbbbbbbsss-",
      "ssbbbbbbbbss-",
      "--bbb--bbb---",
      "-hhh----hhh--",
      "hhhh----hhhh-"];

function initArt(){
  for(var i = 0; i < picture.length; i++){
    for(var f = 0; f < picture[i].length; f++){
             if (picture[i].charAt(f) == "-"){
        newRect(f, i, color.transparent)
      } else if (picture[i].charAt(f) == "r"){
        newRect(f, i, color.red)
      } else if (picture[i].charAt(f) == "h") {
        newRect(f, i, color.brown)
      } else if (picture[i].charAt(f) == "s") {
        newRect(f, i, color.skin)
      } else if (picture[i].charAt(f) == "+") {
        newRect(f, i, color.black)
      } else if (picture[i].charAt(f) == "b") {
        newRect(f, i, color.blue)
      } else if (picture[i].charAt(f) == "y") {
        newRect(f, i, color.yellow)
      } else {
        newRect(f, i, color.transparent)
      }
    }
  }
}

function newRect(col, row, color){
  canvas.fillStyle = color;
  canvas.fillRect(opts.pixelSize*col, opts.pixelSize*row, opts.pixelSize, opts.pixelSize);
  console.log(col, row, color)
}

initArt();
