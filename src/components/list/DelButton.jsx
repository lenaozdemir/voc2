import React from "react";
import styles from './button.module.css'

const DelButton = ({ onClick }) => {
  return (
    <div className={styles.wordButtonBox}>
      <button className={styles.wordButton} onClick={onClick}>Del</button>
    </div>
  );
};

export default DelButton;
