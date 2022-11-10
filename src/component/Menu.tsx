import React from "react";
import {Themes} from "src/theme/theme";
import {CurTheme} from "src/utils/context";

import ThemeInfo from "src/theme/menuTheme";
import {BlackTheme, WhiteTheme} from "src/theme/themechanger";
import Menu from "./Menu";
import {Link} from "react-router-dom";

interface MenuProp {
    name: string
    url?: string
    head?: JSX.Element
    children?: React.ReactElement | React.ReactElement[]
}

const addHeader = (head?: JSX.Element) => {
    if(head) {
        return <div className={'mr-1 inline-block'}> {head} </div>;
    }
}

export default (props: MenuProp) => {

    const theme: Themes = CurTheme();

    const themeClass: ThemeInfo = theme === Themes.WHITE? new WhiteTheme() : new BlackTheme();

    const textPadding = 'pl-4 '
    const menuClass = 'mb-2 text-left ' + textPadding + themeClass.textColor;

    const hoverClass = themeClass.hoverText;

    return (
        <div className={menuClass}>

            <div className={hoverClass}>
                {
                    props.url?
                        <Link className={'inline-block '} to={props.url}>
                            {
                                addHeader(props.head)
                            }
                            {
                                props.name
                            }

                        </Link>
                        :
                        <div className={'inline-block mb-1 '}>
                            {
                                addHeader(props.head)
                            }
                            { props.name }
                        </div>
                }
            </div>

            {
                // Draw sub menus.
                React.Children.map(props.children, (child, i) => {

                    if(child) {
                        return (<Menu url={child.props.url} name={child.props.name} head={child.props.head}></Menu>)
                    }
                })
            }
        </div>
    )
}