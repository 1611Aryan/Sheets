class Cell {
  private width: number
  private height: number

  constructor(
    private x: number,
    private y: number,
    private ctx: CanvasRenderingContext2D | null
  ) {
    this.width = 90
    this.height = 50
  }
  draw() {
    if (this.ctx) {
      this.ctx.beginPath()
      this.ctx.strokeStyle = "#454545"
      this.ctx.lineWidth = 0.5
      this.ctx.strokeRect(
        this.x * this.width,
        this.y * this.height,
        this.width,
        this.height
      )

      this.ctx.closePath()
    }
  }
}

export default Cell
