export default class {
  constructor(element, APP) {
    this.element = element;
    this.width = this.element.offsetWidth;
    this.height = this.element.offsetHeight;
    this.resize = APP.methods.resize;
    this.character = this.element.getAttribute("data-character") || "*";
  }

  init() {
    this.updateCharacter();

    this.resize(() => {
      this.width = this.element.offsetWidth;
      this.height = this.element.offsetHeight;
      this.updateCharacter();
    }, 66);
  }

  updateCharacter() {
    const widthCharacterCount = Math.floor(this.width / this.characterWidth());
    const heightCharacterCount = Math.floor(
      this.height / this.characterHeight()
    );
    const repeatedWidthCharacters = this.character.repeat(widthCharacterCount);
    const repeatedHeightCharacters =
      this.character.repeat(heightCharacterCount);

    this.element.setAttribute("data-content-width", repeatedWidthCharacters);
    this.element.setAttribute("data-content-height", repeatedHeightCharacters);
  }

  characterWidth() {
    const span = document.createElement("span");
    span.style.fontFamily = "monospace";
    span.style.visibility = "hidden";
    span.textContent = this.character;
    document.body.appendChild(span);
    const characterWidth = span.offsetWidth;
    document.body.removeChild(span);
    return characterWidth;
  }

  characterHeight() {
    const span = document.createElement("span");
    span.style.fontFamily = "monospace";
    span.style.visibility = "hidden";
    span.textContent = this.character;
    document.body.appendChild(span);
    const characterHeight = span.offsetHeight;
    document.body.removeChild(span);
    return characterHeight;
  }
}
