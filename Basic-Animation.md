# BasicAnimation  
### HTML  
    > <body onload="draw();  ">  
    > <canvas id="canvas" width="510" height="510"> */}  
### js
```javascript
function draw(){  
    var ctx = document.getElementById('canvas').getContext('2d');    

    ctx.clearRect(0,0,510,510);    

    //block
    ctx.save();    
    ctx.fillSytle = '#FF000' ;  
    var time = new Date();  
    ctx.fillRect(time.getSeconds()*3,time.getSeconds()*3, 20, 20);  
    
    //bound map
    ctx.beginPath();  
    ctx.lineWidth = "2";  
    ctx.strokeStyle = "black";  
    ctx.rect(5, 5, 500, 500);  
    ctx.stroke();  
    
    ctx.restore();  
    window.requestAnimationFrame(draw);  
}
```