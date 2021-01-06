var blockx = 250;
var blocky = 250;
var deltax = 0;
var deltay = 0;
var directstatus = 0;
function draw(){  
    var cas = document.getElementById('canvas');   
    var ctx = cas.getContext('2d');
    ctx.clearRect(0,0,cas.height,cas.width);    

    //block  
   
   window.addEventListener('keydown',function movement(e){
    document.getElementById('keypressed').innerHTML = "key" + e.key;
    switch(e.key){
        case 'w':
            deltay = -5;
            deltax = 0;
            break;
        case 's':
            deltay = 5;
            deltax = 0;
            break;
        case 'a':
            deltax = -5;
            deltay = 0;
            break;
        case 'd':
            deltax = 5;
            deltay = 0;
            break;
    }
    
    

   });
   function block(){
        var xcheck = blockx += deltax;
        var ycheck = blocky += deltay;
        ctx.clearRect(0,0,cas.height,cas.width);  
        ctx.beginPath();
        ctx.fillStyle = 'red';
        document.getElementById('position').innerHTML = "x:" + xcheck + "y:" + ycheck;
        ctx.fillRect(xcheck,ycheck,20,20);
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