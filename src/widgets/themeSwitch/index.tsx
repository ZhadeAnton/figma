import { Box, IconButton } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import useThemeSwitch from "../../shared/theme/useThemeSwitch";

function ThemeSwitch() {
  const { mode, toggleColorModeEvent } = useThemeSwitch();

  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <IconButton
        sx={{
          ml: 1
        }}
        onClick={() => toggleColorModeEvent()}
        color="inherit"
      >
        {mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
    </Box>
  );
}

export default ThemeSwitch;
