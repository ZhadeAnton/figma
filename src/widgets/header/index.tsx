import { Box, Grid } from "@mui/material";
import ThemeSwitch from "../themeSwitch";

function Header() {
  return (
    <Box width="100%">
      <Grid container justifyContent="space-between" width="100%">
        <Grid item>
          <Box
            sx={{
              width: 40,
              height: 40,
              // background: "primary.main"
              background: "red"
            }}
          />
        </Grid>
        <Grid item>
          <ThemeSwitch />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Header;
