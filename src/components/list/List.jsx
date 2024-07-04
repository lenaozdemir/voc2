import React, { useState } from 'react';
import words from '../../data/words.json';
import WordCard from '../wordCard/WordCard';
import Modal from '../templates/Modal';
import İnput from './İnput';
import styles from './list.module.css';
import EditButton from './EditButton';
import DelButton from './DelButton';

const List = () => {
  const [selectedWord, setSelectedWord] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editableWordId, setEditableWordId] = useState(null);

  const handleWordClick = (word) => {
    setSelectedWord(word);
    setIsModalOpen(true);
  };

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

  const handleInputClick = (event) => {
    event.stopPropagation();
  };

  return (
    <div className={styles.words}>
      <h2 className={styles.title}>Список слов</h2>
      <İnput />

      <div className={styles.list}>
        {words.map((word) => (
          <div key={word.id} className={styles.wordBox} onClick={() => handleWordClick(word)}>
            {editableWordId === word.id ? (
              <>
                <input type="text" defaultValue={word.english} onClick={handleInputClick}/>
                <input type="text" defaultValue={word.transcription} onClick={handleInputClick} />
                <input type="text" defaultValue={word.russian} onClick={handleInputClick} />
                <button onClick={(event) => handleSaveClick(word.id, event)}>Save</button>
              </>
            ) : (
              <>
                <p className={styles.word} onClick={() => handleWordClick(word)}>{word.english}</p> 
                <p className={styles.word} onClick={() => handleWordClick(word)}>{word.transcription}</p> 
                <p className={styles.word} onClick={() => handleWordClick(word)}>{word.russian}</p> 
                <EditButton onClick={(event) => handleEditClick(word.id, event)} />
                <DelButton />
              </>
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
