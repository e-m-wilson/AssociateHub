import { LightningElement, api } from "lwc";

export default class Header extends LightningElement {

    

    menuClick() {
        let hamburger = this.template.querySelector('.hamburger');
        let hamburgerLines = this.template.querySelectorAll('.hamburgerLine');
        let nav = this.template.querySelector('.nav');
        let menuItems = this.template.querySelectorAll('.menuItem');

        nav.classList.toggle('selected');
        for(let elem of menuItems) {
            elem.classList.toggle('showMenuItems');
        }
        
    }
}