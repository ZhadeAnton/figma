import { observer } from "mobx-react-lite";
import { Box, Grid, IconButton } from "@mui/material";
import BrushIcon from "@mui/icons-material/Brush";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import Brightness1OutlinedIcon from "@mui/icons-material/Brightness1Outlined";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import toolState from "../../shared/store/model/toolState";
import canvasState from "../../shared/store/model/canvasState";
import Brush from "../../shared/tools/model/brush";
import Rect from "../../shared/tools/model/rectangle";
import Circle from "../../shared/tools/model/circle";
import Line from "../../shared/tools/model/line";

enum EToolNames {
  Brush = "Brush",
  Rect = "Rect",
  Circle = "Circle",
  Line = "Line",
}

type TButtonColor =
  | "info"
  | "default"
  | "inherit"
  | "primary"
  | "secondary"
  | "error"
  | "success"
  | "warning";

const ToolbarList = observer(() => {
  if (!canvasState.isCanvasReady) return null;

  const handleToolClick = (event: React.SyntheticEvent<HTMLButtonElement>) => {
    const toolName = event.currentTarget.name;

    if (toolName && canvasState.canvas) {
      switch (toolName) {
        case EToolNames.Brush: {
          toolState.setTool(new Brush(canvasState.canvas));
          break;
        }
        case EToolNames.Rect: {
          toolState.setTool(new Rect(canvasState.canvas));
          break;
        }
        case EToolNames.Circle: {
          toolState.setTool(new Circle(canvasState.canvas));
          break;
        }
        case EToolNames.Line: {
          toolState.setTool(new Line(canvasState.canvas));
          break;
        }
        default: {
          /** return */
        }
      }
    }
  };

  const tools = [
    {
      name: EToolNames.Brush,
      color: toolState.isBrushToolActive ? "info" : ("default" as TButtonColor),
      icon: <BrushIcon />
    },
    {
      name: EToolNames.Rect,
      color: toolState.isRectToolActive ? "info" : ("default" as TButtonColor),
      icon: <CheckBoxOutlineBlankIcon />
    },
    {
      name: EToolNames.Circle,
      color: toolState.isCircleToolActive ? "info" : ("default" as TButtonColor),
      icon: <Brightness1OutlinedIcon />
    },
    {
      name: EToolNames.Line,
      color: toolState.isLineToolActive ? "info" : ("default" as TButtonColor),
      icon: <RemoveOutlinedIcon />
    }
  ];

  return (
    <Box height="100%" width="100%">
      <Grid width="100%" container direction="row" wrap="nowrap" alignItems="center" gap={3}>
        {tools.map((tool) => (
          <Grid item width={20} height={20} key={tool.name}>
            <IconButton name={tool.name} onClick={handleToolClick} color={tool.color}>
              {tool.icon}
            </IconButton>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
});

export default ToolbarList;
