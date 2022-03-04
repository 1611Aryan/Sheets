class Cell {
    constructor(x, y, ctx) {
        this.x = x;
        this.y = y;
        this.ctx = ctx;
        this.width = 90;
        this.height = 50;
    }
    draw() {
        if (this.ctx) {
            this.ctx.beginPath();
            this.ctx.strokeStyle = "#454545";
            this.ctx.lineWidth = 0.5;
            this.ctx.strokeRect(this.x * this.width, this.y * this.height, this.width, this.height);
            this.ctx.closePath();
        }
    }
}
export default Cell;
