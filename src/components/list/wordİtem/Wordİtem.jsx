// WordItem.jsx

import React, { useState } from 'react';
import EditButton from '../buttons/EditButton';
import DelButton from '../buttons/DelButton';
import styles from '../list.module.css';
import stylebtn from '../buttons/button.module.css'

const WordItem = ({ word, handleWordClick }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedWord, setEditedWord] = useState({ ...word });

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditedWord({ ...word });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedWord((prevWord) => ({
      ...prevWord,
      [name]: value,
    }));
  };

  const handleSave = () => {
    setIsEditing(false);
  };

  return ( 
    <div className={styles.wordBox}>
      {isEditing ? (
        <>
          <input type="text" name="english" value={editedWord.english} onChange={handleInputChange} />
          <input type="text" name="transcription" value={editedWord.transcription} onChange={handleInputChange} />
          <input type="text" name="russian" value={editedWord.russian} onChange={handleInputChange} />
          <button className={stylebtn.wordButton}  onClick={handleSave}>Save</button>
          <button className={stylebtn.wordButton}  onClick={handleCancel}>Cancel</button>
        </>
      ) : (
        <>
          <p className={styles.word}>{word.english}</p>
          <p className={styles.word}>{word.transcription}</p>
          <p className={styles.word}>{word.russian}</p>
          <EditButton onEdit={handleEdit} />
          <DelButton />
        </>
      )}
    </div>
  );
};

export default WordItem;
