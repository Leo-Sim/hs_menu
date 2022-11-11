import React, {useContext} from "react";
import {Themes} from "src/theme/theme";

export interface MenuContext {
    theme: Themes
    selected: string
    hideText: boolean
}

// interface for context.
const defaultContext: MenuContext = {
    theme: Themes.WHITE,
    selected: '',
    hideText: false
}

const ThemeContext = React.createContext<MenuContext>(defaultContext);
const ThemeProvider = ThemeContext.Provider;

const CurTheme = () => {
    const context = useContext(ThemeContext);
    const theme: Themes = context.theme;

    let curTheme: Themes;

    if(theme.toString() === '0') {
        curTheme = Themes.WHITE
    } else {
        curTheme = Themes.DARK;
    }

    return curTheme;
}

const ShouldHideText = () => {
    const context = useContext(ThemeContext);
    return context.hideText;
}

const GetSelectedMenu = () => {
    const context = useContext(ThemeContext);
    return context.selected;
}

export { ThemeProvider, CurTheme, ShouldHideText, GetSelectedMenu };

