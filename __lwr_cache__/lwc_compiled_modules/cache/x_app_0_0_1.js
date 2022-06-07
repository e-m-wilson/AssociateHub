import _tmpl from "./app.html";
import { registerComponent as _registerComponent, LightningElement } from "lwc";

class App extends LightningElement {
  renderedCallback() {
    document.title = 'Associate Hub';
    document.body.style.margin = 0;
    this.loadFont();
  }

  async loadFont() {
    const font = new FontFace('ubuntu', 'url(/public/assets/font/ubuntu-regular.ttf)');
    await font.load();
    document.fonts.add(font);
  }

}

export default _registerComponent(App, {
  tmpl: _tmpl
});