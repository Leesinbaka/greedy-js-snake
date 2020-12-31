# AddEventListener
### JavaScript
```javascript
window.addEventListener('keydown',function movement(e){
    document.getElementById('keypressed').innerHTML = e.key;
    switch(e.key){
        case 'w':
            deltay =-2 ;
            break;
        case 's':
            deltay =2 ;
            break;
        case 'a':
            deltax =-2 ;
            break;
        case 'd':
            deltax =2 ;
            break;
    }
   });
   function block(){
    ctx.clearRect(0,0,cas.height,cas.width);  
    ctx.beginPath();
    ctx.fillStyle = 'red';
    ctx.fillRect(blockx += deltax,blocky += deltay,20,20);
    ctx.closePath();
}
block();
```
#
## TestExample
### HTML
```HTML
<!DOCTYPE html>
<html>
    <head>
        <script src="game.js"></script>
        <link rel="stylesheet" href="snake.css">
    </head>
    <body onload="draw()">
        <canvas id="canvas" width="510" height="510">
        </canvas>
        Key:<p id="keypressed"></p>
    </body>
    <footer></footer>
</html>
```
### JavaScript
```javascript
var blockx = 250;//set var outside loop
var blocky = 250;//set var outside loop
var deltax = 0;//set var outside loop
var deltay = 0;//set var outside loop
function draw(){  
    var cas = document.getElementById('canvas');   
    var ctx = cas.getContext('2d');
    ctx.clearRect(0,0,510,510);    

    //block
   window.addEventListener('keydown',function movement(e){
    document.getElementById('keypressed').innerHTML = e.key;
    switch(e.key){
        case 'w':
            deltay =-2 ;
            break;
        case 's':
            deltay =2 ;
            break;
        case 'a':
            deltax =-2 ;
            break;
        case 'd':
            deltax =2 ;
            break;
    }
   });
   function block(){
    ctx.clearRect(0,0,cas.height,cas.width);  
    ctx.beginPath();
    ctx.fillStyle = 'red';
    ctx.fillRect(blockx += deltax,blocky += deltay,20,20);
    ctx.closePath();
}

block();

    //bound map
    var boundmap = {
        lineWidth : "2",
        strokeStyle : "green",
        x : 5,
        y : 5,
        width : 500,
        height : 500,
        draw : function(){
            ctx.beginPath();
            ctx.lineWidth = this.lineWidth;
            ctx.strokeStyle = this.strokeStyle;
            ctx.rect(this.x,this.y,this.width,this.height);
            ctx.stroke();
        }
    };
    boundmap.draw();
    
    window.requestAnimationFrame(draw);  
}
```
