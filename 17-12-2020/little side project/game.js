function draw(){  
    var cas = document.getElementById('canvas');   
    var ctx = cas.getContext('2d');
    ctx.clearRect(0,0,510,510);    

    //block  
    function movingblock(){
        var width = 20
        var height = 20
        window.addeventlistener(),
        draw : function(){}
    }
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