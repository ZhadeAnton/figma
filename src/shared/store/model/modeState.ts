import { PaletteMode } from "@mui/material";
import { makeAutoObservable } from "mobx";

const THEME_COLOR_STORAGE_KEY = "THEME_COLOR";

const localeStorageMode: PaletteMode = (localStorage.getItem(THEME_COLOR_STORAGE_KEY) as PaletteMode) || "light";

class ModeState {
  mode: PaletteMode = localeStorageMode;

  constructor() {
    makeAutoObservable(this);
  }

  switcMode() {
    const newMode = this.mode === "light" ? "dark" : "light";
    localStorage.setItem(THEME_COLOR_STORAGE_KEY, newMode);
    this.mode = newMode;
  }
}

export default new ModeState();
