import { LightningElement } from 'lwc';

export default class App extends LightningElement {

    

    renderedCallback() {
        document.title = 'Associate Hub';
        document.body.style.margin = 0;
        
        this.loadFont();
    }

    async loadFont() {
        const font = new FontFace('ubuntu',
        'url(/public/assets/font/ubuntu-regular.ttf)');
        await font.load();
        document.fonts.add(font); 
    }
}