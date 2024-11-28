import { Component } from '../core/Component';
import { Form } from './Form';
import { List } from './List';
import { ListItem } from './ListItem';

export class App extends Component {
  setup(props) {
    this.state = {
      total: 0,
      donates: []
    };

    this.$rootElement = document.createElement('div');
    this.$rootElement.className = 'app';

    const $heading = document.createElement('h1');
    $heading.className = 'total-amount';
    $heading.textContent = 'Итого: $';
    this.$rootElement.appendChild($heading);

    const $total = document.createElement('span');
    $total.textContent = this.state.total;
    $heading.appendChild($total);
    this.$total = $total;
    
    const donateForm = new Form({ onSubmit: this.onItemCreate.bind(this) });
    this.$rootElement.appendChild(donateForm.$rootElement);
    const donateList = new List();
    this.$rootElement.appendChild(donateList.$rootElement);
    this.donateList = donateList;
  }
  
  onItemCreate(amount) {
    const item = new ListItem({ amount });
    this.state.donates.push(item);
    this.donateList.addItem(item);
    this.state.total += amount;
    this.$total.textContent = this.state.total;
  }
}
