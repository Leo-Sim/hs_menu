
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
}

export default ThemeInfo;
