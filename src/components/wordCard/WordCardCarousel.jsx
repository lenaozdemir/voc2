import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Card from './WordCard';
import styles from './wordCard.module.css';

const WordCardCarousel = ({ words }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!words || words.length === 0) {
    return <p>No words available</p>;
  }

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? words.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === words.length - 1 ? 0 : prevIndex + 1
    );
  };

  const currentWord = words[currentIndex];

  return (
    <div className={styles.carousel}>
      <button className={styles.arrow} onClick={handlePrevClick}>
        &lt;
      </button>
      <Card
        word={currentWord.english}
        translation={currentWord.russian}
        transcription={currentWord.transcription}
      />
      <button className={styles.arrow} onClick={handleNextClick}>
        &gt;
      </button>
    </div>
  );
};

WordCardCarousel.propTypes = {
  words: PropTypes.arrayOf(
    PropTypes.shape({
      english: PropTypes.string.isRequired,
      transcription: PropTypes.string.isRequired,
      russian: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default WordCardCarousel;
