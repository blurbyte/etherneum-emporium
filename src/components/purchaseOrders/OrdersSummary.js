import React, {PropTypes} from 'react';

//icons
import {SwordsArtwork, CoinIcon} from '../common/Icons';

//lodash
import reduce from 'lodash/reduce';

const styles = require('./OrdersSummary.css');

const OrdersSummary = ({orders}) => {
  //lodash reduce to compute total orders amount
  const amount = reduce(orders, (result, order) => (
    result + order.price * order.quantity
  ), 0);

  return (
    <section className={styles.wrapper}>
      <SwordsArtwork />
      <h2 className={styles['secondary-header']}>Total Amount</h2>
      <div className={styles['amount-wrapper']}>
        <p className={styles['amount']}>{amount.toFixed(0)}</p>
        {!!amount && <CoinIcon width={24} height={24} />}
      </div>
    </section>
  );
};

OrdersSummary.propTypes = {
  orders: PropTypes.array
};

export default OrdersSummary;
