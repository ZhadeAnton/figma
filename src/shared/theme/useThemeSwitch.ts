import { createEvent, createStore } from "effector";
import { useStore } from "effector-react";
import { PaletteMode } from "@mui/material";

const THEME_COLOR_STORAGE_KEY = "THEME_COLOR";

const localeStorageMode: PaletteMode = (localStorage.getItem(THEME_COLOR_STORAGE_KEY) as PaletteMode) || "light";

const toggleColorModeEvent = createEvent();

function switchMode(mode: PaletteMode): PaletteMode {
  localStorage.setItem(THEME_COLOR_STORAGE_KEY, mode === "light" ? "dark" : "light");
  return mode === "light" ? "dark" : "light";
}

const $mode = createStore(localeStorageMode).on(toggleColorModeEvent, switchMode);

function useThemeSwitch() {
  const mode = useStore($mode);

  return {
    mode,
    toggleColorModeEvent
  };
}

export default useThemeSwitch;
