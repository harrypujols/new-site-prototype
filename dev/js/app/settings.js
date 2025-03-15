export default class {
  constructor(APP) {
    this.data = APP.data;
  }

  retrieve() {
    if (localStorage.getItem("settings")) {
      let preferences = JSON.parse(localStorage.getItem("settings"));
      console.log(preferences);
      return preferences;
    } else {
      this.store(this.data.settings);
      console.log("No settings found. Using default settings.");
      return this.data.settings;
    }
  }

  store(data) {
    localStorage.setItem("settings", JSON.stringify(data));
  }

  init() {
    this.retrieve();
  }
}
