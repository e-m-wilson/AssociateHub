import _implicitStylesheets from "./main.css";

import _implicitScopedStylesheets from "./main.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
function tmpl($api, $cmp, $slotset, $ctx) {
  const {t: api_text, h: api_element} = $api;
  return [api_element("h1", {
    key: 0
  }, [api_text("Welcome Associates! fr")]), api_element("p", {
    key: 1
  }, [api_text("Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem pariatur vel iure! Magnam quas sit id, alias explicabo repudiandae magni, quasi architecto ea, asperiores deleniti dolore cumque molestiae quod corrupti?")])];
}
export default registerTemplate(tmpl);
tmpl.stylesheets = [];


if (_implicitStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitStylesheets)
}
if (_implicitScopedStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitScopedStylesheets)
}
tmpl.stylesheetToken = "x-main_main"
