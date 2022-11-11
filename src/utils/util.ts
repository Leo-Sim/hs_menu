import React from "react";

const utilFuncs = {

    checkIfHaveHead: (menus: React.ReactElement | React.ReactElement[]): boolean => {

        let result: boolean = true;

        if(Array.isArray(menus)) {

            menus.map(menu => {
                const hasHead: boolean = menu.props.head != undefined;

                const subMenus = menu.props.children;

                // call recursive function to check if its all submenus have head.
                const subHasHead = utilFuncs.checkIfHaveHead(subMenus);

                if(!hasHead || !subHasHead) {
                    result = false;
                }
            });
        }

        return result;
    }

}

export default utilFuncs;