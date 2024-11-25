import { Component } from "../core/Component";

export class List extends Component {
  setup() {
    this.$rootElement = document.createElement("div");
    this.$rootElement.className = "donates-container";
    const subtitle = document.createElement("h2");
    subtitle.textContent = "Список донатов";

    this.$listContainer = document.createElement("div");

    this.$rootElement.appendChild(subtitle, this.$listContainer);

    // ...
  }

  addItem(item) {
    // ...
  }
}
