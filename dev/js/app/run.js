export default (APP) => {
  document.addEventListener("DOMContentLoaded", () => {
    APP.start.components(APP);
    const settingsInstance = new APP.start.settings(APP);
    settingsInstance.init();
  });
};
