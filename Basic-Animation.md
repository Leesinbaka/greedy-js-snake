# BasicAnimation  
### HTML
```html  
    <body onload="draw();">  
    <canvas id="canvas" width="510" height="510">
```  
### Javascript
```javascript
function draw(){  
    var ctx = document.getElementById('canvas').getContext('2d');    

    ctx.clearRect(0,0,510,510);    

    //block  
    ctx.save();  
    var time = new Date();  
    var block ={  
        x : time.getSeconds()*3,  
        y : time.getSeconds()*3,  
        height : 20,  
        width : 20,  
        color : 'red',  
        draw : function(){  
            ctx.fillStyle = this.color;  
            ctx.fillRect(this.x, this.y, this.width, this.height);  
        }     
    };  
    block.draw();  
    
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
