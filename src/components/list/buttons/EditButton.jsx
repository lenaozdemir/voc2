// EditButton.jsx

import React, { useState } from 'react';
import styles from './button.module.css';

const EditButton = ({ onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleClick = () => {
    setIsEditing(true);
    onEdit();
  };

  return (
    <div className={styles.wordButtonBox}>
      <button className={styles.wordButton} onClick={handleClick}>
        Edit
      </button>
      {isEditing && (
          <button className={styles.wordButton} onClick={() => setIsEditing(false)}>
          Cancel
        </button>
      )}
    </div>
  );
};

export default EditButton;
