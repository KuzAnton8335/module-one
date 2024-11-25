import { Component } from "../core/Component";
import { Form } from "./Form";
import { List } from "./List";

export class App extends Component {
  setup(props) {
    this.state = {
      total: "0",
      donates: [],
    };
    this.$rootElement = document.createElement("div");
    this.$rootElement.className = "app";
    const header = document.createElement("h1");
    header.className = "total-amount";
    this.$total = document.createElement("span");
    this.$total.textContent = this.state.total;

    header.textContent = "Итого: $";
    header.appendChild(this.$total);

    // ...
    this.$rootElement.appendChild(header);
    const donateForm = new Form();
    this.$rootElement.appendChild(donateForm.$rootElement);
    const donateList = new List();
    this.$rootElement.appendChild(donateList.$rootElement);
  }

  onItemCreate(amount) {
    // ...
  }
}
