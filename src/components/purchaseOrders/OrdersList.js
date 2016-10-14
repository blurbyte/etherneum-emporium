import React, {PropTypes} from 'react';
import CSSTransitionGroup from 'react-addons-css-transition-group';

//components
import Order from './Order';

const styles = require('./OrdersList.css');

const OrdersList = ({orders, onNameInputChange, onNameInputFocus, onNameInputBlur, onQuantityInputChange}) => (
  <div>
    <div className={styles.labels}>
      <span className={styles['label-long']}>Name</span>
      <span className={styles.label}>Quantity</span>
      <span className={styles.label}>Price</span>
      <span className={styles.label}>Total</span>
    </div>
    <CSSTransitionGroup component="ul" className={styles.list} transitionName="place-order" transitionEnterTimeout={400} transitionLeaveTimeout={400}>
      {orders.map(
        (order, index) => (
          <Order key={index} index={index} order={order} onNameInputChange={onNameInputChange} onNameInputFocus={onNameInputFocus} onNameInputBlur={onNameInputBlur} onQuantityInputChange={onQuantityInputChange}/>
        )
      )}
    </CSSTransitionGroup>
  </div>
);

OrdersList.propTypes = {
  orders: PropTypes.arrayOf(PropTypes.object),
  onNameInputChange: PropTypes.func.isRequired,
  onNameInputFocus: PropTypes.func.isRequired,
  onNameInputBlur: PropTypes.func.isRequired,
  onQuantityInputChange: PropTypes.func.isRequired
};

export default OrdersList;
