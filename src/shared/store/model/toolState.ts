import { makeAutoObservable } from "mobx";
import { TTools } from "../types/toolsType";
import Brush from "../../tools/model/brush";
import Rect from "../../tools/model/rectangle";
import Circle from "../../tools/model/circle";
import Line from "../../tools/model/line";

class ToolState {
  tool: TTools | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  setTool(tool: TTools) {
    this.tool = tool;
  }

  get isBrushToolActive() {
    return this.tool instanceof Brush;
  }

  get isRectToolActive() {
    return this.tool instanceof Rect;
  }

  get isCircleToolActive() {
    return this.tool instanceof Circle;
  }

  get isLineToolActive() {
    return this.tool instanceof Line;
  }
}

export default new ToolState();
