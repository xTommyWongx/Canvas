class DrawingEllipse extends PaintFunction{
    constructor(contextReal,contextDraft){
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;
        $('#line-width').hide();       
    }
    onMouseDown(coord,event){
        this.contextReal.fillStyle = rgbaColor;
        this.origX = coord[0];
        this.origY = coord[1];
    }
    onDragging(coord,event){
        this.contextDraft.fillStyle = rgbaColor;
        this.contextDraft.lineWidth = 5;
        this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
        this.contextDraft.beginPath();
        this.contextDraft.ellipse(coord[0], coord[1], coord[0]-this.origX,coord[1]-this.origY, 0 * Math.PI/180, 0, 2 * Math.PI);
        this.contextDraft.fill();
        this.contextDraft.stroke();
        this.contextDraft.closePath();
    }
    onMouseUp(coord){
        this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
        this.contextReal.beginPath();
        this.contextReal.ellipse(coord[0], coord[1], coord[0]-this.origX, coord[1]-this.origY, 0 * Math.PI/180, 0, 2 * Math.PI);
        this.contextReal.fill();
        this.contextReal.stroke();
        this.contextReal.closePath();
    }
    onMouseMove(){}
    onMouseLeave(){}
    onMouseEnter(){}

}