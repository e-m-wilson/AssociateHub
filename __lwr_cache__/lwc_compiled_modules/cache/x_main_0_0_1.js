import _tmpl from "./main.html";
import { registerComponent as _registerComponent, LightningElement } from "lwc";

class Main extends LightningElement {}

export default _registerComponent(Main, {
  tmpl: _tmpl
});