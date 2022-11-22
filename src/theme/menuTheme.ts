
// MenuTheme has only variables that is dependent on 'theme'
interface MenuTheme {
    bgColor: string
    textColor: string
    hoverText: string
}

class ThemeInfo implements MenuTheme{

    private _bgColor: string = '';
    private _textColor: string = '';
    private _hoverText: string = '';
    // class for selected menu. => same as when menu is hovered
    private _selected: string = '';

    get hoverText(): string {
        return this._hoverText;
    }

    set hoverText(value: string) {
        this._hoverText = value;
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

    get selected(): string {
        return this._selected;
    }

    set selected(value: string) {
        this._selected = value;
    }
}

export default ThemeInfo;
