export default class {
  constructor(APP) {
    this.APP = APP;
    this.saveFunctions = this.APP.start.save(this.APP);
    this.data = this.APP.data;
    this.load = this.saveFunctions.load;
    this.save = this.saveFunctions.save;
    this.settingsKey = "settings";
    this.settings = this.load(this.settingsKey);
  }

  this.saveSettings() {
    this.save(this.settingsKey, this.settings);
  }

  this.loadSettings() {
    this.settings = this.load(this.settingsKey);
    if (this.settings) {
      this.data.settings = this.settings;
    } else {
      this.saveSettings();
    }

    return this.settings
  }

  this.updateSettings(settings) {
    this.settings = settings;
    this.saveSettings();
  }
  
  this.init() {
    this.loadSettings();

    this.APP.addEvent
  }
}
