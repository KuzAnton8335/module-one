import { Component } from "../core/Component";

export class Form extends Component {
  setup(props) {
    props = {
      onSubmint: this.onItemCreate,
    };
    this.state = {
      amount: "",
    };
    this.$rootElement = document.createElement("form");
    this.$rootElement.className = "donate-form";
    const label = document.createElement("label");
    label.className = "donate-form__input-label";
    label.textContent = "Введите сумму в $";
    this.$input = document.createElement("input");
    this.$input.className = "donate-form__donate-input";
    this.$input.type = "number";
    this.$button = document.createElement("button");
    this.$button.className = "donate-form__submit-button";
    this.$button.textContent = "Задонатить";

    this.$rootElement.append(label, this.$input, this.$button);
    this.$input.addEventListener("input", this.handleInput.bind(this));
    this.$rootElement.addEventListener("submit", this.handleSubmit.bind(this));
    // ...
  }

  handleInput(event) {
    // ...
    this.state.amount = event.target.value;
    console.log(this.isValid);
    this.$button = !this.isValid;
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.isValid) {
      console.log(
        "Форма отправлена с суммой:",
        this.props.onSubmint(this.state.amount)
      );
      this.state.amount = "";
      this.$input.value = "";
    }
    console.log(this.isValid);
  }
}
