import { Suspense } from "react";
import { observable } from "mobx";
import { ThemeProvider, createTheme } from "@mui/material";
import modeState from "../../../shared/store/model/modeState";
import { getTheme } from "./theme";

const WithTheme = (component: () => React.ReactNode) => function WithThemeFn() {
  const { mode } = observable(modeState);
  const theme = createTheme(getTheme(mode));

  return (
    <ThemeProvider theme={theme}>
      <Suspense fallback="Loading...">{component()}</Suspense>
    </ThemeProvider>
  );
};

export default WithTheme;
