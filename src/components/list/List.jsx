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
  const [index, setIndex] = useState(0);
  const [message, setMessage] = useState('');

  const handleWordClick = (word) => {
    setSelectedWord(word);
    setIndex(words.findIndex(w => w.id === word.id));
    setIsModalOpen(true);
  };

  const handleShowPrevWord = () => {
    setIndex((prevIndex) => {
      const newIndex = (prevIndex - 1)
      if (newIndex < 0) {
        return message
      } else {
      setSelectedWord(words[newIndex]);
      setMessage(''); // Очищаем сообщение
      return newIndex;
    }
    });
  };

  const handleShowNextWord = () => {
    setIndex((prevIndex) => {
      const newIndex = prevIndex + 1;
      if (newIndex > words.length) {
        return message; 
      } else {
        setSelectedWord(words[newIndex]);
        setMessage('');
        return newIndex;
      }
    });
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
        handleCloseModal={() => {
          setSelectedWord(null);
          setIndex(0);
        }}
      >
        {selectedWord && (
          <>
            <button onClick={handleShowPrevWord}>←</button>
            <Card 
              word={selectedWord.english} 
              translation={selectedWord.russian} 
              transcription={selectedWord.transcription}
              index={selectedWord.id}
            />
            <button onClick={handleShowNextWord}>→</button>
          </>
        )}
      </Modal>
    </div>
  );
};

export default List;
