import React, {PropTypes} from 'react';

const styles = require('./Button.css');

const Button = ({label, onClick}) => (
  <button className={styles.button} onClick={onClick}>{label}</button>
);

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Button;
