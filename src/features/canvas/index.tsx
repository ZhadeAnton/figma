import { useEffect, useRef } from "react";
import { observer } from "mobx-react-lite";
import canvasState from "../../shared/store/model/canvasState";
import toolState from "../../shared/store/model/toolState";
import Brush from "../../shared/tools/model/brush";
import "./styles.scss";

const Canvas = observer(() => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (canvasRef) {
      const canvasElement = canvasRef.current;

      if (canvasElement) {
        canvasState.setCanvas(canvasElement);
        toolState.setTool(new Brush(canvasElement));
      }
    }
  }, [canvasRef]);

  return (
    <canvas
      ref={canvasRef}
      width={window.innerWidth - 100}
      height={window.innerHeight - 200}
      className="canvas"
      id="main-canvas"
    />
  );
});

export default Canvas;
