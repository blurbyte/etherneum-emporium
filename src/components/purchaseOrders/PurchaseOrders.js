import React, {PropTypes} from 'react';
import CSSTransitionGroup from 'react-addons-css-transition-group';

//common components
import Button from '../common/Button';
import ErrorBox from '../common/ErrorBox';

//components
import OrdersList from './OrdersList';
import OrdersSummary from './OrdersSummary';
import ItemsList from './ItemsList';

const styles = require('./PurchaseOrders.css');

const PurchaseOrders = ({orders, onNameInputChange, onNameInputFocus, onNameInputBlur, onQuantityInputChange, items, onItemSelect, onItemFocus,  onItemBlur, itemsListVisible, onPlaceNewOrder, error}) => (
  <article className={styles.wrapper}>
    <header className={styles.header}>
      <h1 className={styles['main-header']}>Purchase Orders</h1>
    </header>
    <div className={styles.content}>
      <CSSTransitionGroup component="div" className={styles['side-content']} transitionName="toggle-content" transitionEnterTimeout={400} transitionLeave={false}>
        {itemsListVisible && <ItemsList key={0} items={items} onItemSelect={onItemSelect} onItemFocus={onItemFocus} onItemBlur={onItemBlur} />}
        {!itemsListVisible && <OrdersSummary key={1} orders={orders} />}
      </CSSTransitionGroup>
      <div className={styles['main-content']}>
        <OrdersList orders={orders} onNameInputChange={onNameInputChange} onNameInputFocus={onNameInputFocus} onNameInputBlur={onNameInputBlur} onQuantityInputChange={onQuantityInputChange} />
      </div>
    </div>
    <footer className={styles.footer}>
      <Button onClick={onPlaceNewOrder} label="Place New Order" />
      <CSSTransitionGroup component="div" transitionName="error-fade" transitionEnterTimeout={400} transitionLeaveTimeout={400}>
        {!!error.length && <ErrorBox error={error} />}
      </CSSTransitionGroup>
    </footer>
  </article>
);

PurchaseOrders.propTypes = {
  orders: PropTypes.arrayOf(PropTypes.object),
  items: PropTypes.array,
  onItemSelect: PropTypes.func.isRequired,
  onItemFocus: PropTypes.func.isRequired,
  onItemBlur: PropTypes.func.isRequired,
  onNameInputChange: PropTypes.func.isRequired,
  onNameInputFocus: PropTypes.func.isRequired,
  onNameInputBlur: PropTypes.func.isRequired,
  onQuantityInputChange: PropTypes.func.isRequired,
  onPlaceNewOrder: PropTypes.func.isRequired,
  itemsListVisible: PropTypes.bool.isRequired,
  error: PropTypes.string
};

export default PurchaseOrders;
