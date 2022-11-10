import MenuTheme from 'src/theme/menuTheme';

class WhiteTheme extends MenuTheme {
    constructor() {
        super();

        this.bgColor = 'bg-gray-400';
        this.textColor = 'text-black';
        this.hoverText = 'cursor-pointer hover:text-white';
    }


}

class BlackTheme extends MenuTheme {
    constructor() {
        super();
        this.bgColor = 'bg-slate-700'
        this.textColor = 'text-neutral-300'
        this.hoverText = 'cursor-pointer hover:text-white';
    }
}


export { WhiteTheme, BlackTheme }