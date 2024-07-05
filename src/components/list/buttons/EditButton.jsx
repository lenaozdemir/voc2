import React from "react";
import styles from './button.module.css'

const EditButton = ({ onClick }) => {
  return (
    <div className={styles.wordButtonBox}>
      <button className={styles.wordButton} onClick={onClick}>Edit</button>
    </div>
  );
};

export default EditButton;
