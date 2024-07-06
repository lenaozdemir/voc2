import React from 'react';
import styles from './modal.module.css';

const Modal = ({ isOpen, onClose, children, handleCloseModal }) => {
  if (!isOpen) return null;

  const handleClose = () => {
    onClose();
    handleCloseModal();
  };

  return (
<div className={styles.modalOverlay} onClick={handleClose}>
      <div className={styles.modalContent}>
        <button className={styles.close} onClick={handleCloseModal}>×</button>
        {children}
      </div>
    </div>
  );
};

export default Modal;