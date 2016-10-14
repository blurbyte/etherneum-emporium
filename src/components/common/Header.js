import React from 'react';

//logo
import {Logo} from './Icons';

const styles = require('./Header.css');

const Header = () => (
  <header role="banner" className={styles.banner}>
    <div className={styles.logo}>
      <Logo />
      <p className={styles.description}>React Autocomplete Implementation</p>
    </div>
  </header>
);

export default Header;
