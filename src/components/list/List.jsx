import React, { useState } from 'react';
import words from '../../data/words.json';
import Card from '../wordCard/WordCard';
import Modal from './Modal/Modal';
import İnput from './Input/Input';
import styles from './list.module.css';
import WordItem from './Wordİtem/Wordİtem';

const List = () => {
  const [selectedWord, setSelectedWord] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [index, setIndex] = useState(0)


  const handleWordClick = (word) => {
    setSelectedWord(word);
    setIsModalOpen(true);
  };

  const handleShowPrevWord = (index) => {
    setIndex((index) => {
      const newIndex = words[index].id - 1 < words[0].id ? words.length - 1 : words[index].id - 1;
    })

    setSelectedWord(words[index]);
  }

  const handleShowNextWord = (id) => {
    setIndex((id) => {
      if (id + 1 >= words.length) {
        return 0;
      } else {
        return id + 1;
      }
    });

    setSelectedWord(words[index]);
  }

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
          <>
          <button onClick={() => handleShowPrevWord(index)}>→</button>
          <Card 
            word={selectedWord.english} 
            translation={selectedWord.russian} 
            transcription={selectedWord.transcription}
            index={selectedWord.id}
          />
          <button onClick={() => handleShowNextWord(index)}>→</button>
          </>
        )}
      </Modal>
    </div>
  );
};

export default List;
