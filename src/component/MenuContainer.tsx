import React, {useState} from "react";

import {BrowserRouter} from "react-router-dom";

import {Themes} from '../theme/theme';
import {MenuContext, ThemeProvider} from '../utils/context';

import ThemeInfo from "../theme/menuTheme";
import {BlackTheme, WhiteTheme} from "../theme/themechanger";

import util from '../utils/util';


interface MenuContainerProp {
    // specify initial menu id to be selected.
    initId: string
    theme?: Themes
    // whether hiding menu text when all menus has head or not
    hideText?: boolean
    children: React.ReactElement | React.ReactElement[]

}

function validateInitId(initId: string, props: MenuContainerProp): boolean {
    let isValid: boolean = false;

    React.Children.forEach(props.children, child => {
        if(child.props.id == initId) {
            isValid = true;
            return false;
        }

        // Check if any of sub menus ids is equals to initId.
        if(child.props.children) {
            const subMenu = child.props;
            if(validateInitId(initId, subMenu)) {
                isValid = true;
                return false;
            }
        }
    });

    return isValid;
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

    // if 'initId' is valid, set selected menu. if not valid, set first menu selected.
    const initId = props.initId;

    const isValidInitValue = validateInitId(initId, props);

    if(!isValidInitValue) {
        console.error('Props \"initId\" is invalid. \"initId\" should be one of menus id');
        return (<div></div>);
    }

    const initSelect: string = initId && isValidInitValue? initId : '';

    let [selectedId, setSelectedId] = useState(initSelect);
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

    const containerCss = 'absolute inset-y-0 h-full pt-2  ' + width;
    return (
        <div className={ containerCss + themeClass.bgColor }>
            <BrowserRouter >
                <ThemeProvider value={ context }>

                    {menus}

                </ThemeProvider>
            </BrowserRouter>

        </div>
    )

}