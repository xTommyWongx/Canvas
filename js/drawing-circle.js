class DrawingCircle extends PaintFunction{
    constructor(contextReal,contextDraft){
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;            
    }
    onMouseDown(coord,event){
        this.contextReal.strokeStyle = rgbaColor;
        this.origX = coord[0];
        this.origY = coord[1];
    }         
    onDragging(coord,event){
        this.contextDraft.strokeStyle = rgbaColor;
        this.contextDraft.lineWidth = lineSize;
        this.contextDraft.beginPath();
        this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
        this.contextDraft.arc(coord[0],coord[1],Math.sqrt((coord[0]- this.origX)**2 +(coord[1] - this.origY)**2),
        0,(Math.PI/180)*360,false);
        this.contextDraft.stroke();
       this.contextDraft.closePath();
    }
    onMouseUp(coord){
        this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
        this.contextReal.beginPath();
        this.contextReal.lineWidth = lineSize;
        this.contextReal.arc(coord[0],coord[1],Math.sqrt((coord[0]- this.origX)**2 +(coord[1] - this.origY)**2),
        0,(Math.PI/180)*360,false);
        this.contextReal.stroke();
        this.contextReal.closePath();
    }
    onMouseMove(){}
    onMouseLeave(){}
    onMouseEnter(){}

}