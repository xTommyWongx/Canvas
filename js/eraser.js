class Eraser extends PaintFunction{
    constructor(context){
        super();
        this.context = context;            
    }
    onMouseDown(coord,event){
        this.context.beginPath();
        this.context.moveTo(coord[0],coord[1]);
    }
    onDragging(coord,event){
        this.context.globalCompositeOperation = "destination-out";
        this.context.lineWidth = 15;
        this.context.strokeStyle = "rgba(0,0,0,1)";
        this.context.lineTo(coord[0],coord[1]);
        this.context.moveTo(coord[0],coord[1]);
        this.context.closePath();
        this.context.stroke();  
    }
    onMouseMove(){}
    onMouseUp(){
        this.context.globalCompositeOperation="destination-over";
    }
    onMouseLeave(){}
    onMouseEnter(){}
}