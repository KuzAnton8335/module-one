import { Component } from "../core/Component";

export class ListItem extends Component {
  setup(props) {
    this.state = {
      id: Date.now(),
      date: new Date(),
      amount: props.amount,
    };
    this.$rootElement = document.createElement("div");
    this.$rootElement.className = "donate-item";
    this.$rootElement.innerHTML = `
    <div>${this.formatDate(this.state.date)} - <b>$${this.state.amount}</b>
    <button class="delete-button">Удалить</button>
    </div>
    `;
    this.$deleteButton = this.$rootElement.querySelector(".delete-button");
    this.$deleteButton.addEventListener("click", this.onDelete.bind(this));
  }

  formatDate(date) {
    return `${date.getDate().toString().padStart(2, "0")}/${(
      date.getMonth() + 1
    )
      .toString()
      .padStart(2, "0")}/${date.getFullYear()}, ${date
      .getHours()
      .toString()
      .padStart(2, "0")}:${date.getMinutes().toString().padStart(2, "0")}:${date
      .getSeconds()
      .toString()
      .padStart(2, "0")}`;
  }

  onDelete() {
    this.props.onDelete(this);
  }
}
