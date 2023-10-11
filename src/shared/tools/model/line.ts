import { calcMouseCoordinates } from "../lib/mouseEventTools";
import Tool from "./tool";

export default class Line extends Tool {
  mouseDown: boolean = false;

  currentX?: number;

  currentY?: number;

  saved?: string;

  constructor(canvas: HTMLCanvasElement) {
    super(canvas);
    this.listen();
    // this.name = "Line";
  }

  listen() {
    if (!this.canvas) return;
    this.canvas.onmousedown = this.mouseDownHandler.bind(this);
    this.canvas.onmouseup = this.mouseUpHandler.bind(this);
    this.canvas.onmousemove = this.mouseMoveHandler.bind(this);
  }

  mouseDownHandler(event: MouseEvent) {
    this.mouseDown = true;
    const { x, y } = calcMouseCoordinates(event);
    this.currentX = x;
    this.currentY = y;
    this.ctx?.beginPath();
    this.ctx?.moveTo(this.currentX, this.currentY);
    this.saved = this.canvas?.toDataURL();
  }

  mouseUpHandler() {
    this.mouseDown = false;
  }

  mouseMoveHandler(event: MouseEvent) {
    if (this.mouseDown) {
      const { x, y } = calcMouseCoordinates(event);
      this.draw(x, y);
    }
  }

  draw(x: number, y: number) {
    const img = new Image();
    img.src = this.saved || "";
    img.onload = () => {
      if (!this.canvas || !this.currentX || !this.currentY) return;
      this.ctx?.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.ctx?.drawImage(img, 0, 0, this.canvas.width, this.canvas.height);
      this.ctx?.beginPath();
      this.ctx?.moveTo(this.currentX, this.currentY);
      this.ctx?.lineTo(x, y);
      this.ctx?.stroke();
    };
  }
}
