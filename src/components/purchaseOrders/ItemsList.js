import React, {PropTypes} from 'react';

//components
import Item from './Item';

const styles = require('./ItemsList.css');

const ItemsList = ({items, onItemSelect, onItemFocus, onItemBlur}) => {
  const matchingItemsFound = !!items.length;
  return (
    <section className={styles.wrapper}>
      <h2 className={styles['secondary-header']}>Select Item</h2>
      {!matchingItemsFound && <p className={styles['no-match']}>No matches</p>}
      {matchingItemsFound && <ul className={styles.items}>
        {items.map(
          (item, index) => (
            <Item key={index} item={item} onClick={onItemSelect} onMouseEnter={onItemFocus} onMouseLeave={onItemBlur} selected={!index} />
          )
        ) }
      </ul>}
    </section>
  );
};

ItemsList.propTypes = {
  items: PropTypes.array,
  onItemSelect: PropTypes.func.isRequired,
  onItemFocus: PropTypes.func.isRequired,
  onItemBlur: PropTypes.func.isRequired
};

export default ItemsList;
