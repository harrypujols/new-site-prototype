export default class {
  constructor(element, APP) {
    this.element = element;
    this.height = this.element.offsetHeight;
    this.resize = APP.methods.resize;
    this.character = this.element.getAttribute("data-character") || "*";
  }

  init() {
    this.updateCharacter();

    this.resize(() => {
      this.height = this.element.offsetHeight;
      this.updateCharacter();
    }, 66);
  }

  updateCharacter() {
    const characterCount = Math.floor(this.height / this.characterHeight());
    const repeatedCharacters = this.character.repeat(characterCount);
    this.element.setAttribute("data-content", repeatedCharacters);
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
