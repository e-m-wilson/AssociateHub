import _tmpl from "./header.html";
import { registerComponent as _registerComponent, LightningElement } from "lwc";

class Header extends LightningElement {
  menuClick() {
    let hamburger = this.template.querySelector('.hamburger');
    let hamburgerLines = this.template.querySelectorAll('.hamburgerLine');
    let nav = this.template.querySelector('.nav');
    let menuItems = this.template.querySelectorAll('.menuItem');
    nav.classList.toggle('selected');

    for (let elem of menuItems) {
      elem.classList.toggle('showMenuItems');
    }
  }

}

export default _registerComponent(Header, {
  tmpl: _tmpl
});