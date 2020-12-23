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
    
    ctx.restore();  
    window.requestAnimationFrame(draw);  
}
```
