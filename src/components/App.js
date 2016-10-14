import React from 'react';

//components
import Header from './common/Header';
import ManagePurchaseOrders from './purchaseOrders/ManagePurchaseOrders';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <ManagePurchaseOrders />
      </div>
    );
  }
}

export default App;
