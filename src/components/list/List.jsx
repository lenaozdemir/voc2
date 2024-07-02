import React, { useState } from 'react';
import words from '../../data/words.json';
import WordCard from '../wordCard/WordCard'
import Modal from '../templates/Modal'
import Formİnput from './İnput'
import styles from './list.module.css';


const List = () => {
  const [selectedWord, setSelectedWord] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleWordClick = (word) => {
    setSelectedWord(word);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedWord(null);
  };

  return (
    <div className={styles.words}>
      <h2 className={styles.title}>Список слов</h2>
      <Formİnput/>

      <div className={styles.list}>
        {words.map((word) => (
          <div key={word.id} className={styles.wordBox} onClick={() =>  handleWordClick(word)}>
            <p className={styles.word}>{word.english} </p>
            <p className={styles.word}>{word.transcription } </p>
            <p className={styles.word}>{word.russian} </p>
            <div className={styles.wordButtonBox}>
              <button className={styles.wordButton}>Edit</button>
            </div>
            <div className={styles.wordButtonBox}>
              <button className={styles.wordButton}>Del</button>
            </div>
          </div>
        ))}
      </div>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        {selectedWord && <WordCard word={selectedWord.english} translation={selectedWord.russian} transcription={selectedWord.transcription} />}
      </Modal>

    </div>
  );
};

export default List;