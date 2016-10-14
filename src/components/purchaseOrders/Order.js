import React, {PropTypes} from 'react';

//icon
import {CoinIcon} from '../common/Icons';

const styles = require('./Order.css');

const Order = ({order, onNameInputChange, onNameInputFocus, onNameInputBlur, onQuantityInputChange, index}) => {
  const {name, quantity, price, disabled} = order;

  let total = quantity * price;
  total = total.toFixed(0);

  return (
    <li className={styles.wrapper}>
      <input type="text" value={name} onChange={e => onNameInputChange(e, index)} onFocus={() => onNameInputFocus(index)} onBlur={onNameInputBlur} disabled={disabled} placeholder="Enter item name" className={styles['input-name']} />
      <input type="text" value={quantity} onChange={e => onQuantityInputChange(e, index)} disabled={disabled} className={styles['input-quantity']} />
      <p className={styles.amount}>{price}{!!price && <span className={styles.icon}><CoinIcon width={20} height={20} /></span>}</p>
      <p className={styles.amount}>{total}{!!price && <span className={styles.icon}><CoinIcon width={20} height={20} /></span>}</p>
    </li>
  );
};

Order.propTypes = {
  order: PropTypes.object.isRequired,
  onNameInputChange: PropTypes.func.isRequired,
  onNameInputFocus: PropTypes.func.isRequired,
  onNameInputBlur: PropTypes.func.isRequired,
  onQuantityInputChange: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired
};

export default Order;
