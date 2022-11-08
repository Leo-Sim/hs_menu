
import React from "react";

// MenuTheme has only variables that is dependent on 'theme'
interface MenuTheme {
    bgColor: string
    textColor: string
}

class ThemeInfo implements MenuTheme{

    private _bgColor: string = '';
    private _textColor: string = '';

    constructor() {

    }

    public get bgColor(): string {
        return this._bgColor;
    }

    public set bgColor(value: string) {
        this._bgColor = value;
    }

    get textColor(): string {
        return this._textColor;
    }

    set textColor(value: string) {
        this._textColor = value;
    }
}

export default ThemeInfo;
