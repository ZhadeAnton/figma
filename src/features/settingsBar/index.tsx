import { observer } from "mobx-react-lite";
import { Box, Grid } from "@mui/material";
import toolState from "../../shared/store/model/toolState";

const SettingsBar = observer(() => (
  <Box>
    <Grid container>
      <Grid item>
        <input
          type="number"
          min={1}
          max={20}
          defaultValue={1}
          onChange={(e) => toolState.setLineWidth(Number(e.target.value))}
        />
      </Grid>
    </Grid>
  </Box>
));

export default SettingsBar;
