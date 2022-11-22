import React, {useState} from "react";

import {BrowserRouter} from "react-router-dom";

import {Themes} from 'src/theme/theme';
import {MenuContext, ThemeProvider} from 'src/utils/context';
import Utils from 'src/utils/util';

import ThemeInfo from "src/theme/menuTheme";
import {BlackTheme, WhiteTheme} from "src/theme/themechanger";

import util from 'src/utils/util';


interface MenuContainerProp {
    // specify initial menu id to be selected.
    initId?: string
    theme?: Themes
    // whether hiding menu text when all menus has head or not
    hideText?: boolean
    children: React.ReactElement | React.ReactElement[]

}



export default (props: MenuContainerProp) => {

    let [theme, setTheme] = useState(props.theme? props.theme : Themes.WHITE)

    // let theme: Themes = props.theme? props.theme : Themes.WHITE;
    const themeClass: ThemeInfo = theme === Themes.WHITE? new WhiteTheme() : new BlackTheme();

    // Check if all menus have head.
    const children = props.children;

    const headAll: boolean = util.checkIfHaveHead(children);

    let width = 'w-36 '
    let hideText = false;

    // enable 'hide text' only when all menus have 'head' attribute
    if(props.hideText && headAll) {
        // width = 'w-16 '
        hideText = true;
    }


    let [selectedId, setSelectedId] = useState('1');
    let context: MenuContext = {
        theme: theme,
        hideText: hideText,
        selected: selectedId
    }

    const menus = React.Children.map(children, child => {

        if(React.isValidElement(child)) {
            return React.cloneElement(child as React.ReactElement, {
                setSelectedId: setSelectedId
            });
        }
        return null;
    });

    const containerCss = 'h-full pt-2  ' + width;
    return (
        <div className={ containerCss + themeClass.bgColor }>
            <BrowserRouter>
                <ThemeProvider value={ context }>

                    {menus}

                </ThemeProvider>
            </BrowserRouter>

        </div>
    )

}