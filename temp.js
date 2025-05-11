var myPaletteContainer = document.getElementById("myPaletteContainer");
var myPalette = document.getElementById("myPalette");
var myCanvasContainer = document.getElementById("myCanvasContainer");
var myCanvas = document.getElementById("myCanvas");
var tween = null;
var progressStart = 0;
var totalRects = 16; // number of rectangles --  includes repeats
var uniqueRects = totalRects/2;
var rectWidth = 600;
var rectsWidth = rectWidth*totalRects/2;
var animTimePerPixel = 0.0125/8;
var firstRectOffsetX = rectWidth/2; 
var width = window.innerWidth;
var fillRectX = width/2 - firstRectOffsetX;
var left = fillRectX - rectsWidth;


var c = function() {
    return({
        log: function(msg) {
          consoleDiv = document.getElementById('console');
          para = document.createElement('p');
          text = document.createTextNode(msg);
          para.appendChild(text);
          consoleDiv.appendChild(para);
        }
    });
}();

function start() {
  var rectHeight = 565;
  var verticalBorder = 17;
  var rectsHeight = rectHeight + verticalBorder*2;
  
  $('#myPaletteContainer').css('width', width)
                          .css('height', rectsHeight);

  $('#myPalette').css('width', 2*rectsWidth)
                 .css('height', rectsHeight)
                 .css('left', left);

  $('#myCanvas').css('width', 2*rectsWidth)
                .css('height', rectsHeight);

  $('#myCanvas')[0].width = 2*rectsWidth;
  $('#myCanvas')[0].height = rectsHeight;
  
  var context = myCanvas.getContext("2d");

	context.font="40px Georgia";
	context.textAlign="center";

	for (var index = 0; index < totalRects; index++) {
		context.fillStyle = "#FF0000"; // red
		context.fillRect(index*rectWidth, verticalBorder, rectWidth, rectHeight);
		context.rect(index*rectWidth, verticalBorder, rectWidth, rectHeight);
		context.stroke();
		context.fillStyle = "#000000"; // black
    context.fillText(String(index%uniqueRects),index*rectWidth + rectWidth/2,rectsHeight/2);
	}

  startSlideshow();
} // start()

function getRectPosition(id) {
  return rectWidth*id;
}

function getAnimTimeForSlideshow(startX) {
  var oldX = 0;
  if (startX == undefined) {
    if (tween) {
      var x = tween.vars.css == undefined ? -rectsWidth : tween.vars.css.x;
      oldX = tween.progress()*(x - progressStart) + progressStart;
    }
  } else {
    oldX = startX;
  }
        
  var destination = rectsWidth - rectWidth;
  if (oldX > firstRectOffsetX) {
    destination = rectsWidth - destination;
  }
  var origination = Math.abs(oldX);
  var rectsWidthDelta = destination - origination;
  rectsWidthDelta = Math.abs(rectsWidthDelta);
        
  var animTime = rectsWidthDelta * animTimePerPixel; // total time for slideshow animation

  return animTime;
} // getAnimTimeForSlideshow()

function startSlideshow() {
  var animDelay = 2;
  var animTime = getAnimTimeForSlideshow();
  tween = TweenLite.fromTo(".myPalette", animTime, {x:progressStart}, {x:-rectsWidth, delay:animDelay, ease:Linear.easeNone, onUpdate:onSlideshowUpdate});
}

function stopSlideshow() {
  tween.pause();
}

function onSlideshowUpdate() {
  if (tween && !tween.paused()) {
    if (tween.vars.css == undefined) {
      c.log("tween.vars.css is undefined");
      return;
    }
    var rectsWidthOver2 = rectsWidth/2;
    var progress = tween.progress();
    var x = tween.vars.css.x;
    var posx = progress*(x - progressStart) + progressStart;

    if (posx < -rectsWidthOver2) {
      var animTime = getAnimTimeForSlideshow() + getAnimTimeForSlideshow(0);

      var oldps = progressStart;
      var delta = Math.abs(-posx - rectsWidthOver2);
      // reset start position (progressStart) to mirror image of posx about x=0 
      progressStart = -posx + 2*delta; 
      c.log("x = " + x + ", progress = " + progress + ", old progressStart = " + oldps + ", progressStart = " + progressStart + ", posx = " + posx + ", delta = " + delta);

      // tween = TweenLite.set(".myPalette", {x:progressStart}).to(".myPalette", {x:-rectsWidth});

      tween = TweenLite.fromTo(".myPalette", animTime, {x:progressStart, rotation:0.01}, {x:-rectsWidth, rotation:0.01, ease:Linear.easeNone, onUpdate:onSlideshowUpdate});
    } // posx < -rectsWidthOver2
  } // tween && !tween.paused()
} // onSlideshowUpdate()

start();
