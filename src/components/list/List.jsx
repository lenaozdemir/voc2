import React, { useState } from 'react';
import words from '../../data/words.json';
import WordCard from '../wordCard/WordCard';
import Modal from './modal/Modal';
import İnput from './input/İnput';
import styles from './list.module.css';
import WordItem from './wordİtem/Wordİtem';

const List = () => {
  const [selectedWord, setSelectedWord] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editableWordId, setEditableWordId] = useState(null);


  return (
    <div className={styles.words}>
      <h2 className={styles.title}>Список слов</h2>
      <İnput />

      <div className={styles.list}>
        {words.map((word) => (
          <div key={word.id}>
            {editableWordId === word.id ? (
              <>
                <input type="text" defaultValue={word.english} />
                <input type="text" defaultValue={word.transcription} />
                <input type="text" defaultValue={word.russian} />
                <button>Save</button>
              </>
            ) : (
              <WordItem 
                word={word}
                handleWordClick={(word) => {
                  setSelectedWord(word);
                  setIsModalOpen(true);
                }}
              />
            )}
          </div>
        ))}
      </div>

      <Modal 
      isOpen={isModalOpen} 
      onClose={() => setIsModalOpen(false)} 
      handleCloseModal={() => setSelectedWord(null)}>

        {selectedWord && <WordCard 
        word={selectedWord.english} 
        translation={selectedWord.russian} 
        transcription={selectedWord.transcription} />}
        
      </Modal>
    </div>
  );
};

export default List;
