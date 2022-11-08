import MenuTheme from './menuTheme';

class WhiteTheme extends MenuTheme {
    constructor() {
        super();

        this.bgColor = 'bg-white';
        this.textColor = 'text-white';
    }


}

class BlackTheme extends MenuTheme {
    constructor() {
        super();
        this.bgColor = 'bg-slate-700'
        this.textColor = 'text-white'
    }
}


export { WhiteTheme, BlackTheme }