import { calcMouseCoordinates } from "../lib/mouseEventTools";
import Tool from "./tool";

export default class Circle extends Tool {
  mouseDown: boolean = false;

  startX?: number;

  startY?: number;

  saved?: string;

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
    const { x, y } = calcMouseCoordinates(event);
    this.mouseDown = true;
    this.startX = x;
    this.startY = y;
    this.ctx?.beginPath();
    this.saved = this.canvas?.toDataURL();
  }

  mouseMoveHandler(event: MouseEvent) {
    if (this.mouseDown && this.startX && this.startY) {
      const { x, y } = calcMouseCoordinates(event);
      const width = x - this.startX;
      const height = y - this.startY;
      const r = Math.sqrt(width ** 2 + height ** 2);
      this.draw(this.startX, this.startY, r);
    }
  }

  draw(x: number, y: number, r: number) {
    const img = new Image();
    img.src = this.saved || "";
    img.onload = () => {
      if (this.canvas) {
        this.ctx?.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx?.drawImage(img, 0, 0, this.canvas.width, this.canvas.height);
        this.ctx?.beginPath();
        this.ctx?.arc(x, y, r, 0, 2 * Math.PI);
        this.ctx?.fill();
        this.ctx?.stroke();
      }
    };
  }
}
