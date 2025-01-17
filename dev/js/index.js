const FRAMEWORK = {};

import data from "./data/data";

import components from "./components/components";
import breakpoint from "./components/breakpoint";
import render from "./components/render";

import run from "./app/run";

((window, APP) => {
  APP.components = {
    components,
    breakpoint,
    render,
  };

  APP.start = {
    run,
  };

  APP.data = data;

  APP.start.run(APP);
})(window, FRAMEWORK, undefined);
