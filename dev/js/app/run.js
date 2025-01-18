export default (APP) => {
  document.addEventListener("DOMContentLoaded", () => {
    APP.start.components(APP);
    console.log("App started");
  });
};
