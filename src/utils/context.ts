import React, {useContext} from "react";
import {Themes} from "src/theme/theme"

const ThemeContext = React.createContext<Themes>(Themes.WHITE);
const ThemeProvider = ThemeContext.Provider;

const CurTheme = () => {
    const theme: Themes = useContext(ThemeContext);
    let curTheme: Themes;

    if(theme.toString() === '0') {
        curTheme = Themes.WHITE
    } else {
        curTheme = Themes.DARK;
    }

    return curTheme;
}

export { ThemeProvider, CurTheme }