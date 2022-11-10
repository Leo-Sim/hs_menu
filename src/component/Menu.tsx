import React from "react";
import {Themes} from "src/theme/theme";
import {CurTheme} from "src/utils/context";

import ThemeInfo from "src/theme/menuTheme";
import {BlackTheme, WhiteTheme} from "src/theme/themechanger";

interface MenuProp {
    name: string
    url: string
    // theme?: Themes
}

export default (props: MenuProp) => {

    const theme: Themes = CurTheme();

    const themeClass: ThemeInfo = theme === Themes.WHITE? new WhiteTheme() : new BlackTheme();



    return (
        <div >
            { props.name } { }
        </div>
    )
}