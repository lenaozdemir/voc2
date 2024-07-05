// src/components/list/wordItem/WordItem.jsx
import React from 'react';
import EditButton from '../buttons/EditButton';
import DelButton from '../buttons/DelButton';
import styles from '../list.module.css';

const WordItem = ({ word, handleWordClick, handleEditClick }) => {
  const handleClick = () => {
    handleWordClick(word);
  };

  return (
    <>
      <p className={styles.word} onClick={handleClick}>{word.english}</p> 
      <p className={styles.word} onClick={handleClick}>{word.transcription}</p> 
      <p className={styles.word} onClick={handleClick}>{word.russian}</p> 
      <EditButton onClick={(event) => handleEditClick(word.id, event)} />
      <DelButton />
    </>
  );
};

export default WordItem;
