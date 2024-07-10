import React, { useState } from 'react';
import words from '../../data/words.json';
import WordCard from '../wordCard/WordCard';
import Modal from './Modal/Modal';
import İnput from './Input/Input';
import styles from './list.module.css';
import WordItem from './Wordİtem/Wordİtem';

const List = () => {
  const [selectedWord, setSelectedWord] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleWordClick = (word) => {
    setSelectedWord(word);
    setIsModalOpen(true);
  };

  return (
    <div className={styles.words}>
      <h2 className={styles.title}>Список слов</h2>
      <İnput />

      <div className={styles.list}>
        {words.map((word) => (
          <div key={word.id}>
              <WordItem 
                word={word}
                handleWordClick={handleWordClick}
              />
          </div>
        ))}
      </div>

      <Modal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        handleCloseModal={() => setSelectedWord(null)}
      >
        {selectedWord && (
          <WordCard 
            word={selectedWord.english} 
            translation={selectedWord.russian} 
            transcription={selectedWord.transcription} 
          />
        )}
      </Modal>
    </div>
  );
};

export default List;
