import { useEffect } from 'react';
import sprite from '../../images/sprite.svg';
import { CloseButton, ModalContent, ModalOverlay } from './Modal.styled';

const Modal = ({ onClose, children }) => {
  const handleClose = () => {
    onClose();
  };

  const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  useEffect(() => {
    const handleKeydown = event => {
      if (event.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeydown);

    return () => {
      window.removeEventListener('keydown', handleKeydown);
    };
  }, [onClose]);

  return (
    <ModalOverlay onClick={handleBackdropClick}>
      <ModalContent>
        <CloseButton onClick={handleClose}>
          <use href={`${sprite}#icon-close`} />
        </CloseButton>
        {children}
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;
