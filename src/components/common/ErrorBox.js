import React, {PropTypes} from 'react';

const styles = require('./ErrorBox.css');

const ErrorBox = ({error}) => (
  <div className={styles['error-box']}><span>{error}</span></div>
);

ErrorBox.propTypes = {
  error: PropTypes.string.isRequired
};

export default ErrorBox;
