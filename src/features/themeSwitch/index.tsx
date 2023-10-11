import { observer } from "mobx-react-lite";
import { Box, IconButton } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import modeState from "../../shared/store/model/modeState";

const ThemeSwitch = observer(() => (
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
      onClick={() => modeState.switcMode()}
      color="inherit"
    >
      {modeState.mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
    </IconButton>
  </Box>
));

export default ThemeSwitch;
