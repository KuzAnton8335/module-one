import { Component } from "../core/Component";
export class List extends Component {
  setup(props) {
    this.$rootElement = document.createElement("div");
    this.$rootElement.className = "donates-container";
    const subtitle = document.createElement("h2");
    subtitle.textContent = "Список донатов";

    this.$listContainer = document.createElement("div");
    this.$rootElement.appendChild(subtitle, this.$listContainer);
    this.$rootElement.appendChild(this.$listContainer);
    this.items = [];
  }

  addItem(item) {
    this.$listContainer.appendChild(item.$rootElement);
    this.items.push(item);
  }
  removeItem(item) {
    const index = this.items.indexOf(item);
    if (index !== -1) {
      this.$listContainer.removeChild(item.$rootElement);
      this.items.splice(index, 1);
    }
  }
}
