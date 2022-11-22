import React from "react";
import {Themes} from "src/theme/theme";
import {CurTheme, ShouldHideText, GetSelectedMenu} from "src/utils/context";
import Utils from 'src/utils/util';

import ThemeInfo from "src/theme/menuTheme";
import {BlackTheme, WhiteTheme} from "src/theme/themechanger";
import Menu from "./Menu";
import {Link} from "react-router-dom";

interface MenuProp {
    id: string
    name: string
    url?: string
    head?: JSX.Element
    setSelectedId?: Function
    children?: React.ReactElement | React.ReactElement[]
}

const addHeader = (head?: JSX.Element) => {
    if(head) {
        return <div className={'mr-1 inline-block'}> {head} </div>;
    }
}

export default (props: MenuProp) => {

    const theme: Themes = CurTheme();

    const selectedId: string = GetSelectedMenu();

    const themeClass: ThemeInfo = theme === Themes.WHITE? new WhiteTheme() : new BlackTheme();

    const textPadding = ' pl-4 '
    const menuClass = 'mb-2 text-left text-base ' + textPadding + themeClass.textColor;

    const statusClass = props.id == selectedId? themeClass.selected : themeClass.hoverText;

    // check if given 'id' is in submenus.
    function checkIfSubMenu(id: string): boolean {

        const subIds = Utils.getIdsOfChildren(props)

        if(subIds && subIds?.includes(id)) {
            return true;
        }
        return false;
    }

    return (
        <div className={menuClass}>

            <div className={statusClass} onClick={() => props.setSelectedId && props.setSelectedId(props.id)}>
                {
                    props.url?
                        <Link className={'inline-block '} to={props.url}>
                            {
                                addHeader(props.head)
                            }
                            {
                                !ShouldHideText() && props.name
                            }

                        </Link>
                        :
                        <div className={'inline-block mb-1 '}>
                            {
                                addHeader(props.head)
                            }
                            { !ShouldHideText() && props.name }
                        </div>
                }
            </div>

            {
                // show sub menus when either parent or itself is clicked
                (selectedId === props.id || checkIfSubMenu(selectedId)) &&

                // Draw sub menus.
                React.Children.map(props.children, (child, i) => {

                    if(child) {
                        return (
                            <Menu
                                id={child.props.id}
                                url={child.props.url}
                                name={child.props.name}
                                head={child.props.head}
                                setSelectedId={props.setSelectedId}></Menu>
                        )
                    }
                })
            }
        </div>
    )
}