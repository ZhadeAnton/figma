import { Suspense } from "react";
import { amber, deepOrange, grey } from "@mui/material/colors";
import { PaletteMode, ThemeProvider, createTheme } from "@mui/material";
import useThemeSwitch from "../../../shared/theme/useThemeSwitch";

const WithTheme = (component: () => React.ReactNode) => function WithThemeFn() {
  const { mode: currentMode } = useThemeSwitch();

  const getDesignTokens = (mode: PaletteMode) => ({
    palette: {
      mode,
      primary: {
        ...amber,
        ...(mode === "dark" && {
          main: amber[300]
        })
      },
      ...(mode === "dark" && {
        background: {
          default: deepOrange[900],
          paper: deepOrange[900]
        }
      }),
      text: {
        ...(mode === "light"
          ? {
            primary: grey[900],
            secondary: grey[800]
          }
          : {
            primary: "#fff",
            secondary: grey[500]
          })
      }
    }
  });

  const theme = createTheme(getDesignTokens(currentMode));

  return (
    <ThemeProvider theme={theme}>
      <Suspense fallback="Loading...">{component()}</Suspense>
    </ThemeProvider>
  );
};

export default WithTheme;
