import React, { useState } from 'react';
import EditButton from '../Buttons/EditButton';
import DelButton from '../Buttons/DelButton';
import styles from '../list.module.css';
import stylebtn from '../Buttons/button.module.css';

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
          <button className={stylebtn.wordButton} onClick={handleSave}>Save</button>
          <button className={stylebtn.wordButton} onClick={handleCancel}>Cancel</button>
        </>
      ) : (
        <>
          <p className={styles.word} onClick={() => handleWordClick(word)}>{editedWord.english}</p>
          <p className={styles.word} onClick={() => handleWordClick(word)}>{editedWord.transcription}</p>
          <p className={styles.word} onClick={() => handleWordClick(word)}>{editedWord.russian}</p>
          <EditButton onEdit={handleEdit} />
          <DelButton />
        </>
      )}
    </div>
  );
};

export default WordItem;
