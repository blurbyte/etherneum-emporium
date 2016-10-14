import React, {PropTypes} from 'react';

const styles = require('./Item.css');

const Item = ({item, selected, onClick, onMouseEnter, onMouseLeave}) => {
  //slicing long strings
  const maxLength = 25;
  return (
    <li onClick={() => onClick(item)} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className={selected ? styles['item-selected'] : styles.item}>{item.name.length > maxLength ? item.name.substr(0, maxLength) + '...' : item.name}</li>
  );
};

Item.propTypes = {
  item: PropTypes.object.isRequired,
  selected: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired
};

export default Item;
