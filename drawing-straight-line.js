class DrawingStraightLine extends PaintFunction {
    constructor(contextReal, contextDraft) {
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;
    }
    onMouseDown(coord, event) {
        this.coordX = coord[0];
        this.coordY = coord[1];
        this.contextReal.beginPath();
        this.contextReal.moveTo(this.coordX, this.coordY);
    }
    onDragging(coord, event) {
        this.contextDraft.strokeStyle = "#2F329F";
        this.contextDraft.lineJoin = "round";
        this.contextDraft.lineWidth = 5;
        this.clearDraft();
        this.contextDraft.beginPath();
        this.contextDraft.moveTo(this.coordX, this.coordY);
        this.contextDraft.lineTo(coord[0], coord[1]);
        this.contextDraft.stroke();
    }
    onMouseMove() {}
    onMouseUp(coord) {
        this.contextReal.strokeStyle = "#2F329F";
        this.contextReal.lineJoin = "round";
        this.contextReal.lineWidth = 5;
        this.clearDraft();
        this.contextReal.lineTo(coord[0], coord[1]);
        this.contextReal.stroke();
    }
    onMouseLeave() {}
    onMouseEnter() {}

    clearDraft() {
        this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
    }
}