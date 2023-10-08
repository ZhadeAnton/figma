import { Box, Grid } from "@mui/material";
import ButtonAppBar from "../../features/appBar";

function MainPage() {
  return (
    <Box>
      <Grid container width="100%">
        <Grid item width="100%">
          <ButtonAppBar />
        </Grid>
      </Grid>
    </Box>
  );
}

export default MainPage;
