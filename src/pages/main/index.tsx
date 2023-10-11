import { Box, Grid } from "@mui/material";
import ButtonAppBar from "../../widgets/appBar";
import Canvas from "../../features/canvas";

function MainPage() {
  return (
    <Box>
      <Grid container direction="column" wrap="nowrap" width="100%">
        <Grid item width="100%">
          <ButtonAppBar />
        </Grid>
        <Grid item>
          <Canvas />
        </Grid>
      </Grid>
    </Box>
  );
}

export default MainPage;
