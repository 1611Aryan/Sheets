import Cell from "./Cell.js"

const canvas = document.getElementById("canvas") as HTMLCanvasElement
const ctx = canvas.getContext("2d")

let width = (canvas.width = window.innerWidth)
let height = (canvas.height = window.innerHeight)
let fps = 60

let rows = 10,
  columns = 10

window.onresize = () => {
  width = canvas.width = window.innerWidth
  height = canvas.height = window.innerHeight
}

const cells: Cell[] = []

for (let i = 0; i < rows; i++)
  for (let j = 0; j < columns; j++) cells.push(new Cell(i, j, ctx))

const draw = () => {
  if (ctx) {
    ctx.fillStyle = "#fff"
    ctx.fillRect(0, 0, width, height)
    ctx.fill()
    cells.forEach(cell => cell.draw())
  }
}

const animate = () => {
  draw()
  setTimeout(() => {
    requestAnimationFrame(animate)
  }, 1000 / fps)
}

animate()
