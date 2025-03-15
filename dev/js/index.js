const FRAMEWORK = {};

import data from "./data/data";

import run from "./app/run";
import settings from "./app/settings";
import components from "./app/components";

import breakpoint from "./methods/breakpoint";
import render from "./components/render";
import border from "./components/border";

import resize from "./methods/resize";
import typewriter from "./components/typewriter";

((window, APP) => {
  APP.components = {
    breakpoint,
    render,
    border,
    typewriter,
  };

  APP.start = {
    components,
    run,
    settings,
  };

  APP.methods = {
    resize,
    breakpoint,
    resize,
  };

  APP.data = data;

  APP.start.run(APP);
})(window, FRAMEWORK, undefined);
