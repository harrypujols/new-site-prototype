export default class Settings {
  constructor(APP) {
    this.APP = APP;
    this.saveFunctions = this.APP.start.save(this.APP);
    this.data = this.APP.data;
    this.load = this.saveFunctions.load;
    this.save = this.saveFunctions.save;
    this.settingsKey = "settings";
    this.settings = this.load(this.settingsKey);
  }

  saveSettings() {
    this.save(this.settingsKey, this.settings);
  }

  loadSettings() {
    this.settings = this.load(this.settingsKey);
    if (this.settings) {
      this.data.settings = this.settings;
    } else {
      this.settings = this.data.settings;
      this.saveSettings();
    }

    return this.settings;
  }

  updateSettings(settings) {
    this.settings = settings;
    this.saveSettings();
  }

  init() {
    this.loadSettings();
  }
}
