import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Grid } from "@mui/material";
import ThemeSwitch from "../../widgets/themeSwitch";

export default function ButtonAppBar() {
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
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{
                  mr: 2
                }}
              >
                <MenuIcon />
              </IconButton>

              <Typography
                variant="h6"
                component="div"
                sx={{
                  flexGrow: 1
                }}
              >
                News
              </Typography>
            </Grid>

            <Grid item>
              <ThemeSwitch />
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
