import React from "react";

import { Themes } from 'src/theme/theme';
import { ThemeProvider } from 'src/utils/context';

import ThemeInfo from "src/theme/menuTheme";
import {BlackTheme, WhiteTheme} from "src/theme/themechanger";


interface MenusProp {
    theme?: Themes
    children: React.ReactElement | React.ReactElement[]
}

export default (props: MenusProp) => {

    let theme: Themes = props.theme? props.theme : Themes.WHITE;
    const themeClass: ThemeInfo = theme === Themes.WHITE? new WhiteTheme() : new BlackTheme();


    return (
        <div className={themeClass.bgColor }>
            <ThemeProvider value={ theme }>
                { props.children }
            </ThemeProvider>
        </div>
    )

}