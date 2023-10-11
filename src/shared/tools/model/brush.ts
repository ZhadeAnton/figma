import { calcMouseCoordinates } from "../lib/mouseEventTools";
import Tool from "./tool";

export default class Brush extends Tool {
  mouseDown: boolean = false;

  constructor(canvas: HTMLCanvasElement) {
    super(canvas);
    this.listen();
  }

  listen() {
    if (!this.canvas) return;
    this.canvas.onmousemove = this.mouseMoveHandler.bind(this);
    this.canvas.onmousedown = this.mouseDownHandler.bind(this);
    this.canvas.onmouseup = this.mouseUpHandler.bind(this);
  }

  mouseUpHandler() {
    this.mouseDown = false;
  }

  mouseDownHandler(event: MouseEvent) {
    this.mouseDown = true;
    const { x, y } = calcMouseCoordinates(event);
    this.ctx?.beginPath();
    this.ctx?.moveTo(x, y);
  }

  mouseMoveHandler(event: MouseEvent) {
    if (this.mouseDown) {
      const { x, y } = calcMouseCoordinates(event);
      this.draw(x, y);
    }
  }

  draw(x: number, y: number) {
    if (!this.ctx) return;
    this.ctx.strokeStyle = "black";
    this.ctx.lineTo(x, y);
    this.ctx.stroke();
  }
}
