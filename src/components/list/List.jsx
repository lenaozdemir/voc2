// src/components/list/List.jsx
import React, { useState } from 'react';
import words from '../../data/words.json';
import WordCard from '../wordCard/WordCard';
import Modal from '../templates/Modal';
import İnput from './İnput';
import styles from './list.module.css';
import WordItem from './wordİtem/Wordİtem';

const List = () => {
  const [selectedWord, setSelectedWord] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editableWordId, setEditableWordId] = useState(null);

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedWord(null);
  };

  const handleEditClick = (id, event) => {
    event.stopPropagation();
    setEditableWordId(id);
    setIsModalOpen(false);
  };

  const handleSaveClick = (id, event) => {
    event.stopPropagation();
    setEditableWordId(null);
  };

  return (
    <div className={styles.words}>
      <h2 className={styles.title}>Список слов</h2>
      <İnput />

      <div className={styles.list}>
        {words.map((word) => (
          <div key={word.id} className={styles.wordBox}>
            {editableWordId === word.id ? (
              <>
                <input type="text" defaultValue={word.english} />
                <input type="text" defaultValue={word.transcription} />
                <input type="text" defaultValue={word.russian} />
                <button onClick={(event) => handleSaveClick(word.id, event)}>Save</button>
              </>
            ) : (
              <WordItem 
                word={word}
                handleWordClick={(word) => {
                  setSelectedWord(word);
                  setIsModalOpen(true);
                }}
                handleEditClick={handleEditClick}
              />
            )}
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
