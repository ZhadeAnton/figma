import { calcMouseCoordinates } from "../lib/mouseEventTools";
import Tool from "./tool";

export default class Rect extends Tool {
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
      this.draw(this.startX, this.startY, width, height);
    }
  }

  draw(x: number, y: number, width: number, height: number) {
    const img = new Image();
    img.src = this.saved || "";
    img.onload = () => {
      if (this.canvas) {
        this.ctx?.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx?.drawImage(img, 0, 0, this.canvas.width, this.canvas.height);
        this.ctx?.beginPath();
        this.ctx?.rect(x, y, width, height);
        this.ctx?.fill();
        this.ctx?.stroke();
      }
    };
    this.ctx?.rect(x, y, width, height);
    this.ctx?.fill();
    this.ctx?.stroke();
  }
}
