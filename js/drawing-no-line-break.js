class DrawingNoLineBreak extends PaintFunction {
    constructor(contextReal, contextDraft) {
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;
        $('#line-width').show();
        this.count = 0;
        this.doubleClick = false;
        this.secondPointX;
        this.secondPointY;
    }
    onMouseDown(coord, event) {
        if(this.count > 0) {
            this.coordX = this.secondPointX;
            this.coordY = this.secondPointY;
            let self = this;
            $('#canvas-draft').dblclick(function(){
                self.doubleClick = true;
                self.count = 0;
            })
        } else {
            this.doubleClick = false;
            this.coordX = coord[0];
            this.coordY = coord[1];
        }
    }
    onDragging(coord, event) {}
    onMouseMove(coord, event) {
        if(!this.doubleClick) {
            this.contextDraft.strokeStyle = rgbaColor;
            this.contextDraft.lineJoin = "round";
            this.contextDraft.lineWidth = lineSize;
            this.clearDraft();
            this.contextDraft.beginPath();
            this.contextDraft.moveTo(this.secondPointX, this.secondPointY);
            this.contextDraft.lineTo(coord[0], coord[1]);
            this.contextDraft.stroke();
        }
    }
    onMouseUp(coord) {
        if(!this.doubleClick) {
            this.contextReal.strokeStyle = rgbaColor;
            this.contextReal.lineJoin = "round";
            this.contextReal.lineWidth = lineSize;
            this.clearDraft();
            this.contextReal.beginPath();
            this.contextReal.moveTo(this.coordX, this.coordY);
            this.contextReal.lineTo(coord[0], coord[1]);
            this.contextReal.stroke();
            this.secondPointX = coord[0];
            this.secondPointY = coord[1];
            this.count++;
        }
    }
    onMouseLeave() {}
    onMouseEnter() {}

    clearDraft() {
        this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
    }
}