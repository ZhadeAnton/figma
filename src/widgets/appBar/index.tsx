import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import { Grid, Toolbar } from "@mui/material";
import ThemeSwitch from "../../features/themeSwitch";
import ToolbarList from "../../features/toolbar";
import SettingsBar from "../../features/settingsBar";

function ButtonAppBar() {
  return (
    <Box
      sx={{
        flexGrow: 1
      }}
    >
      <AppBar position="static">
        <Toolbar>
          <Grid container direction="row" wrap="nowrap">
            <Grid item container direction="row" wrap="nowrap" alignItems="center">
              <ToolbarList />
            </Grid>
            <Grid item container direction="row" wrap="nowrap" alignItems="center">
              <SettingsBar />
            </Grid>

            <Grid item mt={2}>
              <ThemeSwitch />
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default ButtonAppBar;
