const FRAMEWORK = {};

import data from "./data/data";

import breakpoint from "./components/breakpoint";
import render from "./components/render";
import border from "./components/border";

import components from "./app/components";
import resize from "./app/resize";
import run from "./app/run";

((window, APP) => {
  APP.components = {
    breakpoint,
    render,
    border,
  };

  APP.start = {
    components,
    resize,
    run,
  };

  APP.data = data;

  APP.start.run(APP);
})(window, FRAMEWORK, undefined);
