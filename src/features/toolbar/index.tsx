import { observer } from "mobx-react-lite";
import { Box, Grid, IconButton } from "@mui/material";
import BrushIcon from "@mui/icons-material/Brush";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import Brightness1OutlinedIcon from "@mui/icons-material/Brightness1Outlined";
import DoNotDisturbAltOutlinedIcon from "@mui/icons-material/DoNotDisturbAltOutlined";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import ColorLensOutlinedIcon from "@mui/icons-material/ColorLensOutlined";
import KeyboardBackspaceOutlinedIcon from "@mui/icons-material/KeyboardBackspaceOutlined";
import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";
import RedoOutlinedIcon from "@mui/icons-material/RedoOutlined";
import toolState from "../../shared/store/model/toolState";
import Brush from "../../shared/tools/model/brush";
import canvasState from "../../shared/store/model/canvasState";
import Rect from "../../shared/tools/model/rectangle";
import Circle from "../../shared/tools/model/circle";

const ToolbarList = observer(() => {
  if (!canvasState.isCanvasReady) return null;

  const handleBrushToolButtonClick = () => {
    if (canvasState.canvas) {
      toolState.setTool(new Brush(canvasState.canvas));
    }
  };

  const handleRectleToolButtonClick = () => {
    if (canvasState.canvas) {
      toolState.setTool(new Rect(canvasState.canvas));
    }
  };

  const handleCircleToolButtonClick = () => {
    if (canvasState.canvas) {
      toolState.setTool(new Circle(canvasState.canvas));
    }
  };

  return (
    <Box height="100%" width="100%">
      <Grid width="100%" container direction="row" wrap="nowrap" alignItems="center" gap={3}>
        <Grid item width={20} height={20}>
          <IconButton
            onClick={handleBrushToolButtonClick}
            color={toolState.isBrushToolActive ? "info" : "default"}
          >
            <BrushIcon />
          </IconButton>
        </Grid>

        <Grid item width={20} height={20}>
          <IconButton
            onClick={handleRectleToolButtonClick}
            color={toolState.isRectToolActive ? "info" : "default"}
          >
            <CheckBoxOutlineBlankIcon />
          </IconButton>
        </Grid>

        <Grid item width={20} height={20}>
          <IconButton
            onClick={handleCircleToolButtonClick}
            color={toolState.isCircleToolActive ? "info" : "default"}
          >
            <Brightness1OutlinedIcon />
          </IconButton>
        </Grid>

        <Grid item width={20} height={20}>
          <IconButton>
            <DoNotDisturbAltOutlinedIcon />
          </IconButton>
        </Grid>

        <Grid item width={20} height={20}>
          <IconButton>
            <RemoveOutlinedIcon />
          </IconButton>
        </Grid>

        <Grid item width={20} height={20}>
          <IconButton>
            <ColorLensOutlinedIcon />
          </IconButton>
        </Grid>

        <Grid item width={20} height={20}>
          <IconButton>
            <KeyboardBackspaceOutlinedIcon />
          </IconButton>
        </Grid>

        <Grid item width={20} height={20}>
          <IconButton>
            <RedoOutlinedIcon />
          </IconButton>
        </Grid>

        <Grid item width={20} height={20}>
          <IconButton>
            <SaveOutlinedIcon />
          </IconButton>
        </Grid>
      </Grid>
    </Box>
  );
});

export default ToolbarList;
