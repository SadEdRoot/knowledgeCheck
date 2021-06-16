import React from 'react';
import Search from "./Search";

import styles from "./Header.module.scss"

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.header__text}>Header</h1>
      <Search />
    </header>
  );
};

export default Header;
