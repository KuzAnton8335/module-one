import { Component } from "../core/Component";
import { Form } from "./Form";
import { List } from "./List";
import { ListItem } from "./ListItem";

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

    this.$rootElement.appendChild(header);
    const donateForm = new Form({ onSubmint: this.onItemCreate.bind(this) });
    this.$rootElement.appendChild(donateForm.$rootElement);
    const donateList = new List();
    this.$rootElement.appendChild(donateList.$rootElement);
    this.donateList = donateList;
    this.list = donateList;
  }

  onItemCreate(amount) {
    const item = new ListItem({
      amount,
      onDelete: this.onItemDelete.bind(this),
    });
    this.addItem(item);
    this.donateList.addItem(item);
    return amount;
  }

  addItem(item) {
    this.state.donates.push(item);
    this.list.addItem(item);
    this.updateTotal();
  }

  updateTotal() {
    const total = this.state.donates.reduce(
      (acc, item) => acc + parseFloat(item.amount),
      0
    );
    this.state.total = total.toFixed(2);
    this.$total.textContent = this.state.total;
  }

  onItemDelete(item) {
    const index = this.state.donates.indexOf(item);
    if (index !== -1) {
      this.state.donates.splice(index, 1);
      this.updateTotal(-item.amount);
      this.list.removeItem(item);
    }
  }

  updateTotal(amount) {
    this.state.total = (
      parseFloat(this.state.total) + parseFloat(amount)
    ).toFixed(2);
    this.$total.textContent = this.state.total;
  }
}
