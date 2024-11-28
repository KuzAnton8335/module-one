import { Component } from '../core/Component';

export class Form extends Component {
  setup(props) {
    this.state = {
      amount: ''
    }

    this.$rootElement = document.createElement('form');
    this.$rootElement.className = 'donate-form';

    const $label = document.createElement('label');
    $label.className = 'donate-form__input-label';
    $label.textContent = 'Введите сумму в $';

    const $input = document.createElement('input');
    $input.className = 'donate-form__donate-input';
    $input.name = 'amount';
    $input.type = 'number';
    $input.required = true;
    $input.min = 1;
    $input.max = 100;
    this.$input = $input;
    $label.appendChild($input);
    this.$rootElement.appendChild($label);

    const $button = document.createElement('button');
    $button.disabled = true;
    $button.className = 'donate-form__submit-button';
    $button.type = 'submit';
    $button.textContent = 'Задонатить';
    this.$button = $button;
    this.$rootElement.appendChild($button);

    $input.addEventListener('input', this.handleInput.bind(this));
    this.$rootElement.addEventListener('submit', this.handleSubmit.bind(this));
  }

  get isValid() {
    return !isNaN(this.state.amount) && this.state.amount >= 1 && this.state.amount <= 100;
  }

  handleInput(event) {
    this.state.amount = event.target.value;
    this.$button.disabled = !this.isValid;
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.isValid) {
      this.props.onSubmit(Number(this.state.amount));
      this.state.amount = '';
      this.$input.value = '';
    }
  }
}