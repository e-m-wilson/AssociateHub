import _implicitStylesheets from "./header.css";

import _implicitScopedStylesheets from "./header.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
function tmpl($api, $cmp, $slotset, $ctx) {
  const {h: api_element, b: api_bind, t: api_text} = $api;
  const {_m0} = $ctx;
  return [api_element("nav", {
    classMap: {
      "nav": true
    },
    key: 0
  }, [api_element("div", {
    classMap: {
      "top": true
    },
    key: 1
  }, [api_element("img", {
    attrs: {
      "src": "/public/assets/img/RevatureWhiteText.png",
      "alt": "Revature Logo"
    },
    key: 2
  }, []), api_element("div", {
    classMap: {
      "hamburger": true
    },
    attrs: {
      "title": "Main Menu"
    },
    key: 3,
    on: {
      "click": _m0 || ($ctx._m0 = api_bind($cmp.menuClick))
    }
  }, [api_element("div", {
    classMap: {
      "hamburgerLine": true
    },
    key: 4
  }, []), api_element("div", {
    classMap: {
      "hamburgerLine": true
    },
    key: 5
  }, []), api_element("div", {
    classMap: {
      "hamburgerLine": true
    },
    key: 6
  }, [])])]), api_element("div", {
    classMap: {
      "menuItem": true
    },
    key: 7
  }, [api_text("Home")]), api_element("div", {
    classMap: {
      "menuItem": true
    },
    key: 8
  }, [api_text("Recommended Trailhead Badges")]), api_element("div", {
    classMap: {
      "menuItem": true
    },
    key: 9
  }, [api_text("Course Syllabus")])])];
}
export default registerTemplate(tmpl);
tmpl.stylesheets = [];


if (_implicitStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitStylesheets)
}
if (_implicitScopedStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitScopedStylesheets)
}
tmpl.stylesheetToken = "x-header_header"
