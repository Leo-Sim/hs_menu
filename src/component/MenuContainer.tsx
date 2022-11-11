import React, { useState } from "react";

import { BrowserRouter } from "react-router-dom";

import { Themes } from 'src/theme/theme';
import { ThemeProvider } from 'src/utils/context';

import ThemeInfo from "src/theme/menuTheme";
import {BlackTheme, WhiteTheme} from "src/theme/themechanger";

import util from 'src/utils/util';


interface MenuContainerProp {
    theme?: Themes
    // whether hiding menu text when all menus has head or not
    hideText: boolean
    children: React.ReactElement | React.ReactElement[]

}

export default (props: MenuContainerProp) => {

    let theme: Themes = props.theme? props.theme : Themes.WHITE;
    const themeClass: ThemeInfo = theme === Themes.WHITE? new WhiteTheme() : new BlackTheme();

    // Check if all menus have head.
    const children = props.children;

    const headAll: boolean = util.checkIfHaveHead(children);

    let width = 'w-36 '
    if(props.hideText && headAll) {
        // width = 'w-16 '
    }

    const containerCss = 'h-full pt-2  ' + width;
    return (
        <div className={ containerCss + themeClass.bgColor }>
            <BrowserRouter>
                <ThemeProvider value={ theme }>

                    {children}

                </ThemeProvider>
            </BrowserRouter>
        </div>
    )

}