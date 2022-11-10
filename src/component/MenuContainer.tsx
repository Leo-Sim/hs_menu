import React from "react";

import { BrowserRouter } from "react-router-dom";

import { Themes } from 'src/theme/theme';
import { ThemeProvider } from 'src/utils/context';

import ThemeInfo from "src/theme/menuTheme";
import {BlackTheme, WhiteTheme} from "src/theme/themechanger";


interface MenuContainerProp {
    theme?: Themes
    children: React.ReactElement | React.ReactElement[]
}

export default (props: MenuContainerProp) => {

    let theme: Themes = props.theme? props.theme : Themes.WHITE;
    const themeClass: ThemeInfo = theme === Themes.WHITE? new WhiteTheme() : new BlackTheme();

    return (
        <div className={'w-36 h-full ' + themeClass.bgColor }>
            <BrowserRouter>
                <ThemeProvider value={ theme }>

                    {props.children}

                </ThemeProvider>
            </BrowserRouter>
        </div>
    )

}