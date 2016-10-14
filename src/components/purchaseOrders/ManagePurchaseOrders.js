//container component, contains app logic
/*eslint-disable react/no-set-state*/
import React from 'react';

//modern promise library
const Promise = require('bluebird');
Promise.config({ cancellation: true });

//components
import PurchaseOrders from './PurchaseOrders';

//mock api
import { getProducts } from '../../api/mockApi';

class ManagePurchaseOrders extends React.Component {
  constructor(props) {
    super(props);

    //initial state
    this.state = {
      orders: [{ name: '', quantity: 1, price: 0, disabled: false }],
      items: [],
      itemsListStatus: {
        isVisible: false,
        isFocused: false
      },
      error: ''
    };

    //binding this
    //orders list events
    this.onNameInputChange = this.onNameInputChange.bind(this);
    this.onNameInputFocus = this.onNameInputFocus.bind(this);
    this.onNameInputBlur = this.onNameInputBlur.bind(this);
    this.onQuantityInputChange = this.onQuantityInputChange.bind(this);
    this.enableAllInputs = this.enableAllInputs.bind(this);
    //new order button even
    this.onPlaceNewOrder = this.onPlaceNewOrder.bind(this);
    //items list events
    this.onItemSelect = this.onItemSelect.bind(this);
    this.onItemFocus = this.onItemFocus.bind(this);
    this.onItemBlur = this.onItemBlur.bind(this);

    //dummy promise to avoid null check
    this.searchPromise = Promise.resolve();

    //holds index of currently focused order
    this.currentOrderIndex = null;

    //status of API fetch request
    this.loading = false;
  }

  onNameInputChange(e, index) {
    //regular controlled component constraints
    let {orders} = this.state;
    const {value} = e.target;
    //ES2015 dynamic field acces
    const order = Object.assign(orders[index], { name: value });
    //replacing values order with ones typed into focused field
    orders.splice(index, 1, order);
    this.setState({ orders });

    //API call, fetching data
    //canceling previous API calls on input change
    this.searchPromise.cancel();

    //actions after name field got cleared / is empty
    if (!value.length) {
      //put order default values
      const order = Object.assign(orders[index], { quantity: 1, price: 0 });
      orders.splice(index, 1, order);
      this.setState({ orders });

      //clearing items list
      this.setState({ items: [] });
    }
    else {
      //fetching items from API
      //setting loading flag, fetching data has started
      this.loading = true;
      this.searchPromise = getProductsAsync(value)
        .then(items => {
          //checks if focused input field is disabled
          if (orders[this.currentOrderIndex].disabled) {
            const enabledOrder = orders[this.currentOrderIndex];
            //checks if any data got fetched
            //if it was successful order got filled with values from first item
            if (items.length) {
              const {name, price} = items[0];
              Object.assign(enabledOrder, { name, price });
              orders.splice(this.currentOrderIndex, 1, enabledOrder);
            }
          }
          //in most cases it will just show itemsList
          else {
            this.showItemsList(items);
          }
        })
        .then(() => {
          //sygnalizes that fetching finished
          this.loading = false;
          this.enableAllInputs();
        });
    }
  }

  onNameInputFocus(index) {
    this.currentOrderIndex = index;
    this.hideItemsList();
    this.clearErrorMessages();
  }

  onNameInputBlur(e) {
    let {orders, items} = this.state;
    const {value} = e.target;
    const {isFocused} = this.state.itemsListStatus;

    //checks if input is empty/cleared
    if (!value.length) {
      return;
    }

    //checks if API is still fetching data
    //then disables focused input
    if (this.loading) {
      const disabledOrder = Object.assign(orders[this.currentOrderIndex], { disabled: true });
      orders.splice(this.currentOrderIndex, 1, disabledOrder);
      this.setState({ orders });
    }
    //after fetching is complete
    else {
      //automaticly fills in first item from list of fetched products
      if (!isFocused && items.length) {
        const {name, price} = this.state.items[0];
        const order = Object.assign(orders[this.currentOrderIndex], { name, price });
        orders.splice(this.currentOrderIndex, 1, order);
        this.setState({ orders });

        //setting small delay to wait for click event to occur
        //hides itemsList afterwards
        setTimeout(() => {
          this.hideItemsList();
        }, 100);
      }
    }
  }

  onQuantityInputChange(e, index) {
    //regular controlled component constraint
    let {orders} = this.state;
    const {value} = e.target;
    //checks if entered value is a number
    if (!isNaN(value)) {
      this.clearErrorMessages();
      const order = Object.assign(orders[index], { quantity: value });
      orders.splice(index, 1, order);
      this.setState({ orders });
    }
    else {
      const error = 'Peddlers are expecting numeric values 😱';
      this.setState({ error });
      return;
    }
  }

  onItemSelect(item) {
    //filling currently focused order with selected values
    let {orders} = this.state;
    const {name, price} = item;
    const order = Object.assign(orders[this.currentOrderIndex], { name, price });
    orders.splice(this.currentOrderIndex, 1, order);
    this.setState({ orders });

    //hiding items list
    this.hideItemsList();
  }

  enableAllInputs() {
    const {orders} = this.state;
    //enables all inputs
    this.setState({ orders: orders.map(order => Object.assign(order, { disabled: false })) });
  }

  onItemFocus() {
    this.setState({ itemsListStatus: Object.assign(this.state.itemsListStatus, { isFocused: true }) });
  }

  onItemBlur() {
    this.setState({ itemsListStatus: Object.assign(this.state.itemsListStatus, { isFocused: false }) });
  }

  showItemsList(items) {
    this.setState({ items, itemsListStatus: Object.assign(this.state.itemsListStatus, { isVisible: true }) });
  }

  hideItemsList() {
    //hiding items list and data cleanup
    this.setState({ items: [], itemsListStatus: Object.assign(this.state.itemsListStatus, { isVisible: false, isFocused: false }) });
  }

  clearErrorMessages() {
    this.setState({ error: '' });
  }

  onPlaceNewOrder() {
    this.hideItemsList();
    this.clearErrorMessages();

    let {orders} = this.state;
    const maxNumOfOrders = 10;
    if (orders.length <= maxNumOfOrders) {
      //putting new default order on the list
      orders.push({ name: '', quantity: 1, price: 0, disabled: false });
      this.setState({ orders });
    }
    else {
      const error = 'Peddlers can not handle orders anymore 😱';
      this.setState({ error });
    }
  }

  render() {
    const {orders, items, itemsListStatus, error} = this.state;
    return (
      <PurchaseOrders orders={orders} onNameInputChange={this.onNameInputChange} onNameInputFocus={this.onNameInputFocus} onNameInputBlur={this.onNameInputBlur} onQuantityInputChange={this.onQuantityInputChange} items={items} onItemSelect={this.onItemSelect} onItemFocus={this.onItemFocus} onItemBlur={this.onItemBlur} onPlaceNewOrder={this.onPlaceNewOrder} itemsListVisible={itemsListStatus.isVisible} error={error} />
    );
  }
}

//promise wrapper for API function, allows cancelling
const getProductsAsync = (prefix) => (
  new Promise(resolve => {
    getProducts(prefix, products => resolve(products));
  })
);

export default ManagePurchaseOrders;
