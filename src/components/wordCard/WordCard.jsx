import React from 'react';
import styles from './wordCard.module.css';
import Translation from './Translation';

const Card = (props) => {

  return (
    <>
    <div className={styles.card} {...props}>
      <h2 className={styles.word}>{props.word}</h2>
      <p className={styles.transcription}>{props.transcription}</p>
      <Translation translation={props.translation} />   
    </div>

    </>
  );
};

export default Card;