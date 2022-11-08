import React from "react";
import {Themes} from "../theme/theme";
import {CurTheme} from "../utils/context";

import ThemeInfo from "../theme/menuTheme";
import {BlackTheme, WhiteTheme} from "../theme/themechanger";

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